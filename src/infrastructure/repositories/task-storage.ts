import { Injectable } from '@nestjs/common';
import { Task } from '../../domain/model/task.model';
import { ITaskRepository } from '../../domain/repositories/task-repository.interface';
import { TaskStatus } from '../../domain/enums/task-status.enum';
import { TaskPriority } from '../../domain/enums/task-priority.enum';

@Injectable()
export class InMemoryTaskRepository implements ITaskRepository {
  private tasks: Map<string, Task> = new Map();

  constructor() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const sampleTasks = [
      new Task(
        'Implementar funcionalidad de tareas',
        'Desarrollar el módulo completo de gestión de tareas',
        nextWeek,
        TaskStatus.IN_PROGRESS,
        TaskPriority.HIGH,
        8,
        'task-1'
      ),
      new Task(
        'Revisar documentación',
        'Revisar la documentación del proyecto',
        tomorrow,
        TaskStatus.PENDING,
        TaskPriority.MEDIUM,
        2,
        'task-2'
      ),
      new Task(
        'Preparar presentación',
        'Preparar la presentación para la reunión del equipo',
        tomorrow,
        TaskStatus.PENDING,
        TaskPriority.LOW,
        4,
        'task-3'
      )
    ];

    sampleTasks.forEach(task => this.tasks.set(task.id, task));
  }

  async findAll(): Promise<Task[]> {
    return Array.from(this.tasks.values());
  }

  async create(task: Task): Promise<Task> {
    this.tasks.set(task.id, task);
    return task;
  }

  async delete(id: string): Promise<boolean> {
    if (!this.tasks.has(id)) {
      return false;
    }
    this.tasks.delete(id);
    return true;
  }

  async updateStatus(id: string, status: TaskStatus): Promise<Task | null> {
    const task = this.tasks.get(id);
    if (!task) {
      return null;
    }
    
    task.updateStatus(status);
    
    this.tasks.set(id, task);
    
    return task;
  }
}
