export default class Car {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount
    }

    getAmount(): number {
        return this.amount
    }
}