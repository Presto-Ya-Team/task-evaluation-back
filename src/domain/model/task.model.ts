import { TaskTypes } from "../enums/task-status.enum";

export class TaskModel {
    constructor(
      public id: number,
      public name: string,
      public dueDate: Date,
      public status: TaskTypes
    ) {}
  }