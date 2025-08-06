import { TaskStatus } from "src/domain/enums/task-status.enum";

export class TaskUseCaseDto {
    id: string;
    name: string;
    dueDate: Date;
    status: TaskStatus;

}