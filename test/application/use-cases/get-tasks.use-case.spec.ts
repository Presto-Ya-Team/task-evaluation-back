import { GetTasksUseCase } from '@src/application/use-cases/get-tasks.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

describe('GetTasksUseCase', () => {
  let getTasksUseCase: GetTasksUseCase;
  let taskRepository: jest.Mocked<TaskRepository>;

  const task1 = new Task('1', 'mock-title', 'mock-description', false, new Date(), new Date());
  const task2 = new Task('2', 'mock-title', 'mock-description', false, new Date(), new Date());

  const mockTasks: Task[] = [task1, task2];

  beforeEach(() => {
    taskRepository = {
      findAll: jest.fn(),
    } as unknown as jest.Mocked<TaskRepository>;

    getTasksUseCase = new GetTasksUseCase(taskRepository);
  });

  it('should return all tasks', async () => {
    taskRepository.findAll.mockResolvedValue(mockTasks);

    const result = await getTasksUseCase.execute();

    expect(taskRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockTasks);
  });

  it('should return an empty array when there are no tasks', async () => {
    taskRepository.findAll.mockResolvedValue([]);

    const result = await getTasksUseCase.execute();

    expect(taskRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
