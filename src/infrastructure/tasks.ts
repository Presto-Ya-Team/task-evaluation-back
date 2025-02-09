import { Task } from '../domain/task.entity';

export const tasksData: Task[] = [
  {
    id: "1",
    name: "Empezar nuevo proyecto",
    status: "Pendiente",
    due_date: new Date("2025-02-08T10:00:00"),
  },
  {
    id: "2",
    name: "Prueba Dev PrestaYa",
    status: "En progreso",
    due_date: new Date("2025-02-09T14:00:00"),
  },
  {
    id: "3",
    name: "Postular Pasantía",
    status: "Completada",
    due_date: new Date("2025-02-10T16:00:00"),
  },
];
