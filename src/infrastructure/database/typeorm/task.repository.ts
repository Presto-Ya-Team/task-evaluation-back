import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

import { TaskOrmEntity } from './entities/task.orm-entity';

@Injectable()
export class TypeOrmTaskRepository implements TaskRepository {
  constructor(
    @InjectRepository(TaskOrmEntity)
    private readonly ormRepo: Repository<TaskOrmEntity>,
  ) {}

  async findAll(): Promise<Task[]> {
    const entities = await this.ormRepo.find();

    return entities.map(this.toDomain);
  }

  async findById(id: string): Promise<Task | null> {
    const entity = await this.ormRepo.findOne({ where: { id } });

    return entity ? this.toDomain(entity) : null;
  }

  async save(task: Task): Promise<Task> {
    const entity = this.toOrm(task);
    const savedEntity = await this.ormRepo.save(entity);

    return this.toDomain(savedEntity);
  }

  async update(task: Task): Promise<Task> {
    const entity = this.toOrm(task);
    const savedEntity = await this.ormRepo.save(entity);

    return this.toDomain(savedEntity);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  private toDomain = (entity: TaskOrmEntity): Task => {
    return new Task(
      entity.id,
      entity.title,
      entity.description,
      entity.completed,
      entity.createdAt,
      entity.updatedAt,
    );
  };

  private toOrm = (task: Task): TaskOrmEntity => {
    const entity = new TaskOrmEntity();
    entity.id = task.id;
    entity.title = task.title;
    entity.description = task.description;
    entity.completed = task.completed;
    entity.createdAt = task.createdAt;
    entity.updatedAt = task.updatedAt;

    return entity;
  };
}
