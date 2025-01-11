import { Task } from './task.class';

export default interface ITaskRepository<T> {
  addTask(file: T): Task;
  deleteTask(id: number): Task | void;
  updateTask(): Task;
  getTask(id: number): Task;
}
