import { defineComponent, ref } from "vue";
import './style/index.css';

export interface HelloWorldProps {
  msg?: string;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup(props: HelloWorldProps) {
    const count = ref(0);

    return () => (
      <div class="demo-box">
        <h1>{props.msg}</h1>
        <button onClick={() => count.value++}>count is: {count.value}</button>
        <p>
          Edit <code>components/HelloWorld.vue</code> to test hot module
          replacement.
        </p>
      </div>
    );
  },
});
