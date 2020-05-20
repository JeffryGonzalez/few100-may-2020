import { Person } from './person';
import { IProvideInformation } from './interfaces';


export class Employee extends Person implements IProvideInformation {

    department: string;

    constructor(private salary: number) {
        super();
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is a ${this.department}`;
    }

    get currentSalary() {
        return this.salary;
    }

    giveRaise(amount: number) {
        this.salary += amount;
    }
    // set currentSalary(newVal:number) {
    //     this.salary = newVal;
    // }
}

