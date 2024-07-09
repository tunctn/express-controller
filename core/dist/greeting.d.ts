export declare class Greeting {
    greet(): void;
    extend<P extends {}>(this: this & P, plugin: (base: this) => this & P): this & P;
}
