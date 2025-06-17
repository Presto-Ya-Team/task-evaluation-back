import { TaskStatus } from "../enums/task-status.enum";

export class TaskModel {
    id:number;
    name: string;
    status: TaskStatus;
}