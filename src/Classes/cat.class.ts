export default class Cat {
    public name: string;
    public gender?: string;
    public age: number;
    public weight: number;
    public color: string;

    constructor(name: string, age: number, weight: number, color: string, gender?: string) {
        this.name = name
        this.gender = gender
        this.age = age
        this.weight = weight
        this.color = color
    }

}