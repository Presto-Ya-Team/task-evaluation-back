import { Injectable } from '@nestjs/common';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class TaskRepository {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Completar prueba técnica',
      due_date: new Date('2024-03-20'),
      status: 'pending',
    },
    {
      id: 2,
      name: 'Enviar Pull Request',
      due_date: new Date('2024-03-21'),
      status: 'pending',
    },
    {
      id: 3,
      name: 'Revisar Documentación',
      due_date: new Date('2024-04-05'),
      status: 'completed'
    },
    {
      id: 4,
      name: 'Planificar Sprint',
      due_date: new Date('2024-04-18'),
      status: 'pending'
    },
    {
      id: 5,
      name: 'Reunión de Sincronización',
      due_date: new Date('2024-05-10'),
      status: 'completed'
    },
    {
      id: 6,
      name: 'Subir Cambios al Repo',
      due_date: new Date('2024-06-03'),
      status: 'pending'
    },
    {
      id: 7,
      name: 'Desplegar a Producción',
      due_date: new Date('2024-06-28'),
      status: 'completed'
    },
    {
      id: 8,
      name: 'Evaluar Progreso del Proyecto',
      due_date: new Date('2024-07-15'),
      status: 'completed'
    },
    {
      id: 9,
      name: 'Actualizar Dependencias',
      due_date: new Date('2024-08-02'),
      status: 'pending'
    },
    {
      id: 10,
      name: 'Optimizar Código',
      due_date: new Date('2024-08-25'),
      status: 'completed'
    },
    {
      id: 11,
      name: 'Preparar Demo',
      due_date: new Date('2024-09-10'),
      status: 'pending'
    },
    {
      id: 12,
      name: 'Crear Backups',
      due_date: new Date('2024-10-01'),
      status: 'pending'
    }
  ];

  findAll(): Task[] {
    return this.tasks;
  }
}