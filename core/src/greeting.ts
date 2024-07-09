export class Greeting {
  greet(): void {
    console.log('Greeting, Node user!');
  }

  extend<P extends {}>(this: this & P, plugin: (base: this) => this & P): this & P {
    return plugin(this);
  }
}
