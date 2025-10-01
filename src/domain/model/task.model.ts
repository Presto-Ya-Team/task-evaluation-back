export class Task {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly due_date: Date,
    public readonly status: 'pendiente' | 'en progreso' | 'completado',
  ) {}
}