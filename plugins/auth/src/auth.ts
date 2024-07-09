import { Controller } from '@express-controller/core';

export interface AuthPlugin {
  withAuth(): void;
}

declare module '@express-controller/core' {
  interface Controller {
    withAuth(): void;
  }
}

export const authPlugin = <T extends Controller>(base: T): T & AuthPlugin => {
  (base as T & AuthPlugin).withAuth = function (): void {
    console.log('Auth plugin!');
  };
  return base as T & AuthPlugin;
};
