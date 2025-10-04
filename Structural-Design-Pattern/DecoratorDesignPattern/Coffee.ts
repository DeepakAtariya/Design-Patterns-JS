export interface ICoffee {
    prepare(): void;
}

export class Coffee implements ICoffee {
    prepare(): void {
        console.log('preparing coffee with milk and sugar');
    }
}
