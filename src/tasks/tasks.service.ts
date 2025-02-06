import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        { id: '1', name: 'Test Task', due_date: '1/1/2026', status: 'pending'}
    ];

    getAllTasks():Task[] {
        return this.tasks;
    }
}
