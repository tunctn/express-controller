export declare class Controller {
    build(): void;
    extend<P extends {}>(this: this & P, plugins: Array<(base: this) => this & P>): this & P;
}
