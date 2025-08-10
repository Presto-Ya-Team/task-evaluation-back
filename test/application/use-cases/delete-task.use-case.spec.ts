import { DeleteTaskUseCase } from '@src/application/use-cases/delete-task.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

describe('DeleteTaskUseCase', () => {
  let deleteTaskUseCase: DeleteTaskUseCase;
  let taskRepo: jest.Mocked<TaskRepository>;

  beforeEach(() => {
    taskRepo = {
      findById: jest.fn(),
      delete: jest.fn(),
    } as unknown as jest.Mocked<TaskRepository>;

    deleteTaskUseCase = new DeleteTaskUseCase(taskRepo);
  });

  it('should return false if task does not exist', async () => {
    taskRepo.findById.mockResolvedValue(null);

    const result = await deleteTaskUseCase.execute('1');

    expect(result).toBe(false);
    expect(taskRepo.findById).toHaveBeenCalledWith('1');
    expect(taskRepo.delete).not.toHaveBeenCalled();
  });

  it('should delete the task and return true if task exists', async () => {
    taskRepo.findById.mockResolvedValue({ id: '1' } as Task);
    taskRepo.delete.mockResolvedValue(undefined);

    const result = await deleteTaskUseCase.execute('1');

    expect(result).toBe(true);
    expect(taskRepo.findById).toHaveBeenCalledWith('1');
    expect(taskRepo.delete).toHaveBeenCalledWith('1');
  });
});
