import { Controller } from '@express-controller/core';
export interface AuthPlugin {
    withAuth(): void;
}
declare module '@express-controller/core' {
    interface Controller {
        withAuth(): void;
    }
}
export declare const authPlugin: <T extends Controller>(base: T) => T & AuthPlugin;
