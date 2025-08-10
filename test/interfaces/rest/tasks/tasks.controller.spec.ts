import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { CreateTaskUseCase } from '@src/application/use-cases/create-task.use-case';
import { DeleteTaskUseCase } from '@src/application/use-cases/delete-task.use-case';
import { GetTaskUseCase } from '@src/application/use-cases/get-task.use-case';
import { GetTasksUseCase } from '@src/application/use-cases/get-tasks.use-case';
import { UpdateTaskUseCase } from '@src/application/use-cases/update-task.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TasksController } from '@src/interfaces/rest/tasks/tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTask: Task = new Task('1', 'Test Title', 'Test Description', false, new Date());

  const createTaskUseCase = { execute: jest.fn() };
  const getTasksUseCase = { execute: jest.fn() };
  const getTaskUseCase = { execute: jest.fn() };
  const updateTaskUseCase = { execute: jest.fn() };
  const deleteTaskUseCase = { execute: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        { provide: CreateTaskUseCase, useValue: createTaskUseCase },
        { provide: GetTasksUseCase, useValue: getTasksUseCase },
        { provide: GetTaskUseCase, useValue: getTaskUseCase },
        { provide: UpdateTaskUseCase, useValue: updateTaskUseCase },
        { provide: DeleteTaskUseCase, useValue: deleteTaskUseCase },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  afterEach(() => jest.clearAllMocks());

  it('should create a task', async () => {
    createTaskUseCase.execute.mockResolvedValue(mockTask);

    const result = await controller.create({ title: 'Test', description: 'Test' });

    expect(createTaskUseCase.execute).toHaveBeenCalledWith({ title: 'Test', description: 'Test' });
    expect(result).toEqual(mockTask);
  });

  it('should return all tasks', async () => {
    getTasksUseCase.execute.mockResolvedValue([mockTask]);

    const result = await controller.findAll();

    expect(getTasksUseCase.execute).toHaveBeenCalled();
    expect(result).toEqual([mockTask]);
  });

  it('should return one task by id', async () => {
    getTaskUseCase.execute.mockResolvedValue(mockTask);

    const result = await controller.findOne('1');

    expect(getTaskUseCase.execute).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockTask);
  });

  it('should throw 404 when task not found on get', async () => {
    getTaskUseCase.execute.mockResolvedValue(null);

    await expect(controller.findOne('404')).rejects.toThrowError(
      new HttpException('Task not found', HttpStatus.NOT_FOUND),
    );
  });

  it('should update a task', async () => {
    updateTaskUseCase.execute.mockResolvedValue(mockTask);

    const result = await controller.update('1', { title: 'Updated Title' });

    expect(updateTaskUseCase.execute).toHaveBeenCalledWith({ id: '1', title: 'Updated Title' });
    expect(result).toEqual(mockTask);
  });

  it('should throw 404 when task not found on update', async () => {
    updateTaskUseCase.execute.mockResolvedValue(null);

    await expect(controller.update('1', { title: 'New' })).rejects.toThrowError(
      new HttpException('Task not found', HttpStatus.NOT_FOUND),
    );
  });

  it('should delete a task', async () => {
    deleteTaskUseCase.execute.mockResolvedValue(true);

    await expect(controller.delete('1')).resolves.toBeUndefined();
    expect(deleteTaskUseCase.execute).toHaveBeenCalledWith('1');
  });

  it('should throw 404 when task not found on delete', async () => {
    deleteTaskUseCase.execute.mockResolvedValue(false);

    await expect(controller.delete('1')).rejects.toThrowError(
      new HttpException('Task not found', HttpStatus.NOT_FOUND),
    );
  });
});
