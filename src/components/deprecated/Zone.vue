<template>
<div class="gfx-wrapper height-forty">
  <div class="one-hub" template v-if="type === 'one-zone'">
    <cosmos-hub hub-name="Zone"></cosmos-hub>
  </div>
  <div class="two-hubs" v-if="type === 'two-zones'">
    <cosmos-hub id="two-hubs-one" hub-name="Zone 1"></cosmos-hub>
    <data-bundle></data-bundle>
    <cosmos-hub id="two-hubs-two" hub-name="Zone 2"></cosmos-hub>
  </div>
  <div class="three-hubs" template v-if="type === 'three-zones'">
    <cosmos-hub id="three-hubs-one" hub-name="EVM 1.0"></cosmos-hub>
    <arrow></arrow>
    <cosmos-hub id="three-hubs-two" hub-name="EVM 2.0"></cosmos-hub>
    <cosmos-hub id="three-hubs-three" hub-name="EVM 3.0"></cosmos-hub>
  </div>
</div>
</template>

<script>
import CosmosHub from './CosmosHub.vue'
import DataBundle from './DataBundle.vue'
import Arrow from './Arrow.vue'

export default {
  components: {
    CosmosHub,
    DataBundle,
    Arrow
  },
  props: ['type']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

bdw = 0.4*s
bkw = 1.5*s

.two-hubs
  #two-hubs-one .hub
    left 21%

  #two-hubs-two .hub
    left 79%
    border-color lighten(mcolor, 50%)
    color lighten(mcolor, 33%)
    &:before
      border-color lighten(mcolor,33%)

  .data-bundle
    position absolute
    top 50%
    left 35%

.three-hubs
  hub-size = 24*s

  .hub
    width hub-size
    height hub-size
    margin-top -0.5*hub-size
    margin-left -0.5*hub-size
    border-radius 0.5*hub-size
    padding 0 x

    font-size 4*s
    line-height 1.0
    font-weight normal

    border-color eth-color

    &:before
      width hub-size
      height hub-size

      border-radius hub-size
      border-color eth-color

      margin-left -1 * bdw
      margin-top -1 * bdw

  #three-hubs-one .hub
    left 13%

  #three-hubs-two .hub
    left 50%

  #three-hubs-three .hub
    left 87%

  .data-bundle
    top 50%
    left 10%
</style>
