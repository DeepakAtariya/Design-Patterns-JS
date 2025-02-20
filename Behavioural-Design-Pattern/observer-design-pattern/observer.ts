import { randomUUID } from "crypto";

interface Publisher {
    subscribe(sub: Subscriber): void;
    unsubscribe(sub: Subscriber): void;
    notify(): void;
    getState(): number;
    setState(): void;
}

class ConcretePublisher implements Publisher {
    private activeSubs: Record<string, Subscriber> = {};
    private publisherState: number = 0;

    subscribe(sub: Subscriber): void {
        this.activeSubs[sub.$name] = sub;
    }

    unsubscribe(sub: Subscriber): void {
        delete this.activeSubs[sub.$name];
    }

    notify(): void {
        for (const key in this.activeSubs) {
            const sub: Subscriber = this.activeSubs[key];
            const eventId: string = randomUUID();
            sub.callback(eventId);
        }
        
        this.setState();
    }

    getSubscribers(): void {
        Object.keys(this.activeSubs).forEach(key => console.log(key));
    }

    public getState(): number {
        return this.publisherState;
    }

    public setState(): void {
        this.publisherState++;
    }
}

interface Subscriber {
    updateState(publisher: Publisher) : void;
}

class ConcreteSubscriber implements Subscriber {
    private name: string;
    private subscriberState: number;
    callback(eventId: string): void {
        console.log(` Event received for ${this.name} and ID is ${eventId}`);
    };

    public get $name(): string {
        return this.name as string;
    }

    public set $name(value: string) : void{
        this.name = value as string;
    }
    
    public updateState (publisher: Publisher) : void {
        this.subscriberState = publisher.getState();
    }
}

const sub1: Subscriber = new ConcreteSubscriber();
sub1.$name = "s1";
const sub2: Subscriber = new ConcreteSubscriber();
sub2.$name = "s2";

const pub: Publisher = new ConcretePublisher();
pub.subscribe(sub1);
pub.subscribe(sub2);

// Subscriber 1 is updating the state because of some updates are missed by subscriber from publishers.
sub1.updateState(pub);

pub.notify();


