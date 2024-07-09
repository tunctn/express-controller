import { Greeting } from '@express-controller/core';

export interface FarewellPlugin {
  farewell(): void;
}

declare module '@express-controller/core' {
  interface Greeting {
    farewell(): void;
  }
}

export const farewellPlugin = <T extends Greeting>(base: T): T & FarewellPlugin => {
  (base as T & FarewellPlugin).farewell = function (): void {
    console.log('Farewell, Node user!');
  };
  return base as T & FarewellPlugin;
};
