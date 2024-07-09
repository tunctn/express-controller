import { Greeting } from '@express-controller/core';
export interface FarewellPlugin {
    farewell(): void;
}
declare module '@express-controller/core' {
    interface Greeting {
        farewell(): void;
    }
}
export declare const farewellPlugin: <T extends Greeting>(base: T) => T & FarewellPlugin;
