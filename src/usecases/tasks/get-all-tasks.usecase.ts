import { Injectable } from '@nestjs/common';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class GetAllTasksUseCase {
  private readonly tasks: Task[] = [
    new Task(1, 'Hacer prueba de NestJS', 'pending'),
    new Task(2, 'Revisar documentación', 'in-progress'),
    new Task(3, 'Enviar Pull Request', 'completed'),
  ];

  execute(): Task[] {
    return this.tasks;
  }
}
