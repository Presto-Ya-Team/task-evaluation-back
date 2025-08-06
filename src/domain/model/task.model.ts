import { TaskStatus } from "../enums/task-status.enum";

export class Task {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly dueDate: Date,
        public readonly status: TaskStatus

    ) {}
}

