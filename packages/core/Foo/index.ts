import { h, defineComponent } from "vue";

export const Foo = defineComponent({
  name: "Foo",
  render() {
    return h("h1", {}, "this is foo");
  },
});
