import { IsEnum, IsISO8601, IsNotEmpty, IsString } from "class-validator";
import { TaskStatus } from "src/domain/enums/task-status.enum";

export class TaskDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsISO8601()
    dueDate: Date;

    @IsEnum(TaskStatus)
    status: TaskStatus;
}