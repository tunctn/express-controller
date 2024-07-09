export class Controller {
  build(): void {
    console.log('Controller!');
  }

  extend<P extends {}>(this: this & P, plugins: Array<(base: this) => this & P>): this & P {
    plugins.forEach((plugin) => {
      plugin(this);
    });
    return this;
  }
}
