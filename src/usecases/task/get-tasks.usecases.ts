import { TaskModel } from '../../domain/model/task.model';

export class GetTasksUseCases {
  constructor() {}

  getTasks(): TaskModel[] {
    return [
      {
        name: 'create new tasks',
        due_date: new Date(),
        id: 1,
        status: false,
      },
      {
        name: 'review project documentation',
        due_date: new Date(),
        id: 2,
        status: false,
      },
      {
        name: 'implement user login',
        due_date: new Date(),
        id: 3,
        status: true,
      },
      {
        name: 'test API endpoints',
        due_date: new Date(),
        id: 4,
        status: false,
      },
      {
        name: 'finalize UI design',
        due_date: new Date(),
        id: 5,
        status: true,
      },
      {
        name: 'prepare presentation',
        due_date: new Date(),
        id: 6,
        status: false,
      },
      {
        name: 'deploy staging environment',
        due_date: new Date(),
        id: 7,
        status: true,
      },
      {
        name: 'update dependencies',
        due_date: new Date(),
        id: 8,
        status: false,
      },
      {
        name: 'code review with team',
        due_date: new Date(),
        id: 9,
        status: false,
      },
      {
        name: 'optimize database queries',
        due_date: new Date(),
        id: 10,
        status: false,
      },
    ];
  }
}