import { TaskStatus } from "src/domain/enums/task-status.enum"
import { Task } from "src/domain/model/task.model"
import { TaskUseCaseDto } from "./dto/task-usecase.dto";

export class GetTaskUseCase {
    execute(): TaskUseCaseDto[] {
        const tasks: Task[] = [
            new Task('1', 'Actualizar Tablero de Jira Antes Del Daily', new Date('2025-08-08'),TaskStatus.IN_PROGRESS),
            new Task('2', 'Terminar de hacer el backend', new Date('2025-08-07'),TaskStatus.PENDING),
            new Task('3', 'Culmina de hacer el frontend', new Date('2025-08-06'),TaskStatus.DONE),
            new Task('4', 'Subir los repositorios', new Date('2025-08-09'),TaskStatus.PENDING),
            new Task('5', 'Tener buenas practicas', new Date('2025-08-10'),TaskStatus.IN_PROGRESS),
        ];

        return tasks.map(task => ({
            id: task.id,
            name: task.name,
            dueDate: task.dueDate,
            status: task.status
        }));
    }
}