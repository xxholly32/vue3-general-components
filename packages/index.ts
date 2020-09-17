import { App } from "vue";

import HelloWorld from './HelloWorld/HelloWorld'

const components = [HelloWorld];

const install = (app: App, ...options: unknown[]): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default { install };
