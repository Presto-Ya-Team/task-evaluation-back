import { TaskStatus } from "../enums/task-status.enum"
export interface Task{
    id : number;
    name : string;
    status : TaskStatus;
}