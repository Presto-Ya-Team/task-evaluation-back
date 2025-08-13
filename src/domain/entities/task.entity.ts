export class Task{
    constructor(
        public id:number,
        public name: string,
        public status: ''|'pending'|'in-progress'|'completed',
    ){}
}