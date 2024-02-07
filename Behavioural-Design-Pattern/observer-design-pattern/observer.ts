import { randomUUID } from "crypto";

class Publisher {
    private activeSubs: Record<string, Subscriber> = {};

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
    }

    getSubscribers(): void {
        Object.keys(this.activeSubs).forEach(key => console.log(key));
    }
}


class Subscriber {
    private name: string | undefined = undefined;
    callback(eventId: string): void {
        console.log(` Event received for ${this.name} and ID is ${eventId}`);
    };

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {

        return this.name as string;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value as string;
    }
}

const sub1: Subscriber = new Subscriber();
sub1.$name = "s1";
const sub2: Subscriber = new Subscriber();
sub2.$name = "s2";

const pub: Publisher = new Publisher();
pub.subscribe(sub1);
pub.subscribe(sub2);

pub.notify();


