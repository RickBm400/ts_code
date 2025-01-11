import ITaskRepository from './task.service';

export class Task {
  private id: number;
  private title: string;
  private description: string;
  private status: string;

  constructor(title: string, description: string, status: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }
}

// export class TaskRepository implements ITaskRepository<Task> {
//   //   private tasks: Task[];
//   //   addTask(file: Task): Task {}
//   //   deleteTask(id: number): Task | void {}
//   //   getTask(id: number): Task {}
//   //   updateTask(): Task {}
// }
