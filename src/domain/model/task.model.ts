import { TaskStatus } from "../enums/task-status.enum";

export class Task {
    constructor(
        public id: number,
        public name: string,
        public due_date: Date,
        public status: TaskStatus
    ) {}
}