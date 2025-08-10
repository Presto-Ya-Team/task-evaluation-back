import { GetTaskUseCase } from '@src/application/use-cases/get-task.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

describe('GetTaskUseCase', () => {
  let getTaskUseCase: GetTaskUseCase;
  let taskRepository: jest.Mocked<TaskRepository>;

  const mockTask = new Task('1', 'mock-title', 'mock-description', false, new Date(), new Date());

  beforeEach(() => {
    taskRepository = {
      findById: jest.fn(),
    } as unknown as jest.Mocked<TaskRepository>;

    getTaskUseCase = new GetTaskUseCase(taskRepository);
  });

  it('should return a task if found', async () => {
    taskRepository.findById.mockResolvedValue(mockTask);

    const result = await getTaskUseCase.execute('1');

    expect(taskRepository.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockTask);
  });

  it('should return null if task not found', async () => {
    taskRepository.findById.mockResolvedValue(null);

    const result = await getTaskUseCase.execute('2');

    expect(taskRepository.findById).toHaveBeenCalledWith('2');
    expect(result).toBeNull();
  });
});
