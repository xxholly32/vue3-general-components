import { h, renderSlot, defineComponent } from "vue";

export const VgcButton = defineComponent({
  name: "vgc-button",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  setup(props) {},
  render() {
    const { $slots, type, size } = this;
    return (
      <button
        class={["vgc-button", `vgc-button--${type}`, `vgc-button--${size}`]}
      >
        <span>{renderSlot($slots, "default")}</span>
      </button>
    );
  },
});
