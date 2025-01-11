export default interface ITaskRepository<T> {
  add(file: T): T | void;
  delete(id: string): T | void;
  update(id: string, file: any): T | void;
  get(id: string | any): T;
}
