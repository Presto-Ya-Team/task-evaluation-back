import { UpdateTaskUseCase } from '@src/application/use-cases/update-task.use-case';
import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

describe('UpdateTaskUseCase', () => {
  let updateTaskUseCase: UpdateTaskUseCase;
  let taskRepository: jest.Mocked<TaskRepository>;

  let baseTask: Task;

  beforeEach(() => {
    jest.clearAllMocks();

    taskRepository = {
      findById: jest.fn(),
      update: jest.fn(),
    } as unknown as jest.Mocked<TaskRepository>;

    updateTaskUseCase = new UpdateTaskUseCase(taskRepository);

    baseTask = new Task('1', 'Old Title', 'Old Description', false, new Date());

    jest.spyOn(baseTask, 'updateTitle');
    jest.spyOn(baseTask, 'updateDescription');
    jest.spyOn(baseTask, 'markAsCompleted');
    jest.spyOn(baseTask, 'markAsIncompleted');
  });

  it('should return null if the task does not exist', async () => {
    taskRepository.findById.mockResolvedValue(null);

    const result = await updateTaskUseCase.execute({ id: 'not-found' });

    expect(taskRepository.findById).toHaveBeenCalledWith('not-found');
    expect(result).toBeNull();
  });

  it('should update the title and return the updated task', async () => {
    const updatedTask = new Task(
      baseTask.id,
      'new title',
      baseTask.description,
      baseTask.completed,
      baseTask.createdAt,
      new Date(),
    );

    taskRepository.findById.mockResolvedValue(baseTask);
    taskRepository.update.mockResolvedValue(updatedTask);

    const result = await updateTaskUseCase.execute({ id: '1', title: 'New Title' });

    expect(baseTask.updateTitle).toHaveBeenCalledWith('New Title');
    expect(taskRepository.update).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'New Title' }),
    );
    expect(result).toEqual(updatedTask);
  });

  it('should update the description and return the updated task', async () => {
    const updatedTask = { ...baseTask, description: 'New Desc' };

    taskRepository.findById.mockResolvedValue(baseTask);
    taskRepository.update.mockResolvedValue(updatedTask as Task);

    const result = await updateTaskUseCase.execute({ id: '1', description: 'New Desc' });

    expect(baseTask.updateDescription).toHaveBeenCalledWith('New Desc');
    expect(taskRepository.update).toHaveBeenCalledWith(
      expect.objectContaining({ description: 'New Desc' }),
    );
    expect(result).toEqual(updatedTask);
  });

  it('should mark the task as completed and return the updated task', async () => {
    const updatedTask = { ...baseTask, completed: true };

    taskRepository.findById.mockResolvedValue(baseTask);
    taskRepository.update.mockResolvedValue(updatedTask as Task);

    const result = await updateTaskUseCase.execute({ id: '1', completed: true });

    expect(baseTask.markAsCompleted).toHaveBeenCalled();
    expect(taskRepository.update).toHaveBeenCalledWith(
      expect.objectContaining({ completed: true }),
    );
    expect(result).toEqual(updatedTask);
  });

  it('should mark the task as incomplete and return the updated task', async () => {
    const updatedTask = { ...baseTask, completed: false };

    taskRepository.findById.mockResolvedValue(baseTask);
    taskRepository.update.mockResolvedValue(updatedTask as Task);

    const result = await updateTaskUseCase.execute({ id: '1', completed: false });

    expect(baseTask.markAsIncompleted).toHaveBeenCalled();
    expect(taskRepository.update).toHaveBeenCalledWith(
      expect.objectContaining({ completed: false }),
    );
    expect(result).toEqual(updatedTask);
  });
});
