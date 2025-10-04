import { Coffee, ICoffee } from "./Coffee";

export interface IDecorator extends ICoffee {
    addOn(): void;
}

export class WhippedCreamDecorator implements IDecorator {
    private plainCoffee: Coffee;

    constructor(plainCoffee: Coffee) {
        this.plainCoffee = plainCoffee;
    }

    addOn(): void {
        console.log('adding whipped cream');
    }
    prepare(): void {
        this.plainCoffee.prepare();
        this.addOn();
        console.log("Prepared with whipped cream on top");
    }
}

export class ChocolatePowderDecorator implements IDecorator {
    private plainCoffee: Coffee;

    constructor(plainCoffee: Coffee) {
        this.plainCoffee = plainCoffee;
    }

    addOn(): void {
        console.log('adding chocolate power');
    }

    prepare(): void {
        this.plainCoffee.prepare();
        this.addOn();
        console.log('Prepared with chocolate powder on top');
    }

}

const coffee: Coffee = new Coffee();
const whippedCreamCoffee = new WhippedCreamDecorator(coffee);
const chocolatePowerCoffee = new ChocolatePowderDecorator(whippedCreamCoffee);
chocolatePowerCoffee.prepare();