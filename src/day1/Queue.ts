interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.tail = this.head = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = this.tail = { value: item };
            return;
        }

        // @ts-ignore
        this.tail.next = { value: item };

        // @ts-ignore
        this.tail = this.tail.next;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const value = this.head.value;
        this.head = this.head.next;

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
