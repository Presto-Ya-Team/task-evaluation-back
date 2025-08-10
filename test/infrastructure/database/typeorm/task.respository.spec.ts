import { Repository } from 'typeorm';

import { Task } from '@src/domain/entities/task.entity';
import { TaskOrmEntity } from '@src/infrastructure/database/typeorm/entities/task.orm-entity';
import { TypeOrmTaskRepository } from '@src/infrastructure/database/typeorm/task.repository';

describe('TypeOrmTaskRepository', () => {
  let repository: TypeOrmTaskRepository;
  let ormRepo: jest.Mocked<Repository<TaskOrmEntity>>;

  const mockOrmTask: TaskOrmEntity = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-02'),
  };

  const mockDomainTask = new Task(
    '1',
    'Test Task',
    'Test Description',
    false,
    new Date('2023-01-01'),
    new Date('2023-01-02'),
  );

  beforeEach(() => {
    ormRepo = {
      find: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    } as unknown as jest.Mocked<Repository<TaskOrmEntity>>;

    repository = new TypeOrmTaskRepository(ormRepo);
  });

  it('should return all tasks as domain models', async () => {
    ormRepo.find.mockResolvedValue([mockOrmTask]);

    const result = await repository.findAll();

    expect(ormRepo.find).toHaveBeenCalled();
    expect(result).toEqual([mockDomainTask]);
  });

  it('should return task by id if found', async () => {
    ormRepo.findOne.mockResolvedValue(mockOrmTask);

    const result = await repository.findById('1');

    expect(ormRepo.findOne).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toEqual(mockDomainTask);
  });

  it('should return null if task not found by id', async () => {
    ormRepo.findOne.mockResolvedValue(null);

    const result = await repository.findById('not-found');

    expect(result).toBeNull();
  });

  it('should save a task and return the saved task', async () => {
    ormRepo.save.mockResolvedValue(mockOrmTask);

    const result = await repository.save(mockDomainTask);

    expect(ormRepo.save).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
    expect(result).toEqual(mockDomainTask);
  });

  it('should update a task and return the updated task', async () => {
    ormRepo.save.mockResolvedValue(mockOrmTask);

    const result = await repository.update(mockDomainTask);

    expect(ormRepo.save).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
    expect(result).toEqual(mockDomainTask);
  });

  it('should delete a task by id', async () => {
    ormRepo.delete.mockResolvedValue(undefined);

    await repository.delete('1');

    expect(ormRepo.delete).toHaveBeenCalledWith('1');
  });
});
