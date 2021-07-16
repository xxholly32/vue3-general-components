import HelloWorld from "./components/HelloWorld.vue";
import Bar from "./components/Bar/index.vue";
import Foo from "./components/Foo/index.vue";
const components = [HelloWorld, Bar, Foo];

const install = function (Vue, opts = {}) {
  if (Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }

  return components;
};

export default { install };
