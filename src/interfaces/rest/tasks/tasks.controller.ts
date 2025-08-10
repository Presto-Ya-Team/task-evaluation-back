import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateTaskUseCase } from '@src/application/use-cases/create-task.use-case';
import { DeleteTaskUseCase } from '@src/application/use-cases/delete-task.use-case';
import { GetTaskUseCase } from '@src/application/use-cases/get-task.use-case';
import { GetTasksUseCase } from '@src/application/use-cases/get-tasks.use-case';
import { UpdateTaskUseCase } from '@src/application/use-cases/update-task.use-case';
import { Task } from '@src/domain/entities/task.entity';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTask: CreateTaskUseCase,
    private readonly getTasks: GetTasksUseCase,
    private readonly getTask: GetTaskUseCase,
    private readonly updateTask: UpdateTaskUseCase,
    private readonly deleteTask: DeleteTaskUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateTaskDto): Promise<Task> {
    return await this.createTask.execute(dto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.getTasks.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    const task = await this.getTask.execute(id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskDto): Promise<Task> {
    const updated = await this.updateTask.execute({ id, ...dto });

    if (!updated) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return updated;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const deleted = await this.deleteTask.execute(id);

    if (!deleted) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
