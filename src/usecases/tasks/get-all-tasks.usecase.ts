import { Injectable } from '@nestjs/common';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class GetAllTasksUseCase {
  private readonly tasks: Task[] = [
    new Task(1, 'Hacer prueba de NestJS', new Date('2025-08-15'), 'pending'),
    new Task(2, 'Revisar documentación', new Date('2025-08-20'), 'in-progress'),
    new Task(3, 'Enviar Pull Request', new Date('2025-08-12'), 'completed'),
  ];

  execute(): Task[] {
    return this.tasks;
  }
}
