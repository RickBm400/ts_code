import { Task, TaskRepository } from './Classes/SOLID_task/task.class';

let newTask = new Task('Repeat', 'Solo', 'ACTIVE');
let newTask2 = new Task('Repeat', 'Solo', 'DELETED');
let AllRepo = new TaskRepository();
console.log(newTask.getDescription());

AllRepo.add(newTask);
AllRepo.add(newTask2);
console.log(AllRepo.getAllTask());
