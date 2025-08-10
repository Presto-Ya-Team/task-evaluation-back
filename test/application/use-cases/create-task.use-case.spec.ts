import { CreateTaskUseCase } from '@src/application/use-cases/create-task.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

jest.mock('uuid', () => ({
  v4: (): string => 'mock-uuid',
}));

describe('CreateTaskUseCase', () => {
  let createTaskUseCase: CreateTaskUseCase;
  let taskRepo: jest.Mocked<TaskRepository>;

  beforeEach(() => {
    taskRepo = {
      findAll: jest.fn(),
      findById: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    createTaskUseCase = new CreateTaskUseCase(taskRepo);
  });

  it('should create and save a new task', async () => {
    const input = { title: 'Test Task', description: 'Test description' };

    const expectedTask = new Task(
      'mock-uuid',
      input.title,
      input.description,
      false,
      expect.any(Date),
    );

    taskRepo.save.mockResolvedValue(expectedTask);

    const actual = await createTaskUseCase.execute(input);

    expect(taskRepo.save).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'mock-uuid',
        title: input.title,
        description: input.description,
        completed: false,
      }),
    );

    expect(actual).toMatchObject(expectedTask);
  });
});
