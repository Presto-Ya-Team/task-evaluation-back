import { 
  Controller, 
  Get, 
  Post, 
  Delete, 
  Body, 
  Param, 
  BadRequestException, 
  Patch
} from '@nestjs/common';
import { TaskStatus } from '../../domain/enums/task-status.enum';
import { TaskUseCases } from '../../usecases/task/task.usecase';
import { Task } from '../../domain/model/task.model';
import { TaskPriority } from '../../domain/enums/task-priority.enum';

class CreateTaskDto {
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  estimatedHours: number;
}

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskUseCases: TaskUseCases) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskUseCases.getAllTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      return await this.taskUseCases.createTask(createTaskDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<{ success: boolean }> {
    const deleted = await this.taskUseCases.deleteTask(id);
    if (!deleted) {
      throw new BadRequestException('Task not found');
    }
    return { success: true };
  }

  @Patch(':id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus
  ): Promise<Task> {
    try {
      return await this.taskUseCases.updateTaskStatus(id, status);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
