import ITaskRepository from './task.service';
import generateUUID from '../../utils/uuid';

export class Task {
  private id: number;
  public title: string;
  public description: string;
  public status: string;

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

export class TaskRepository implements ITaskRepository<Task> {
  private tasks: Map<any, Task> = new Map();

  add(file: Task): void | Task {
    let genId = generateUUID();
    const { title, description, status }: Task = file;
    this.tasks.set(genId, new Task(title, description, status));
    return this.get(genId);
  }

  delete(id: string): void | Task {
    this.tasks.delete(id);
  }

  get(id: number | any): Task {
    let findTask: Task | undefined = this.tasks.get(id);
    if (!findTask) {
      throw new Error(`Task with id ${id} not found`);
    }
    return findTask;
  }

  update(id: string, file: Task): Task | void {
    if (!this.tasks.has(id)) {
      throw new Error(`Task ${id} doesn't exist in hashmap`);
    }
    const { title, description, status }: Task = file;
    this.tasks.set(id, new Task(title, description, status));
  }
}
