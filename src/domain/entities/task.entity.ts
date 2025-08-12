export class Task{
    constructor(
        public id:number,
        public name: string,
        public duaDate: Date,
        public status: ''|'pending'|'in-progress'|'completed',
    ){}
}