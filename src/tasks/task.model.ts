export class Task {
    id: string;
    name: string;
    due_date: string;
    status: 'pending' | 'in-progress' | 'completed';
}