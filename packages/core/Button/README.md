# Bar

<div id="button-demo">
  <h1>不同类型</h1>
  <div>
    <vgc-button>DEFAULT</vgc-button>
    <vgc-button type="primary">PRIMARY</vgc-button>
  </div>
  <h1>不同大小</h1>
  <div>
    <vgc-button size="small">SMALL</vgc-button>
    <vgc-button size="medium">MEDIUM</vgc-button>
    <vgc-button size="large">LARGE</vgc-button>
  </div>
</div>

<script setup lang="ts">
import { VgcButton } from '#/components'
</script>

<style lang="scss">
@import '#/core/Button/style/index.scss';

[id=button-demo] .vgc-button {
  margin: 8px;
}
</style>
