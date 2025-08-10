export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string | null = null,
    public completed: boolean = false,
    public readonly createdAt: Date = new Date(),
    public updatedAt?: Date,
  ) {}

  markAsCompleted(): void {
    this.completed = true;
    this.updatedAt = new Date();
  }

  markAsIncompleted(): void {
    this.completed = false;
    this.updatedAt = new Date();
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
    this.updatedAt = new Date();
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
    this.updatedAt = new Date();
  }
}
