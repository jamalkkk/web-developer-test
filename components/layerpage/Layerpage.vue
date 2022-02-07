<template>
  <div class="b-layerpage p-relative">
    <Header hasShadow/>
    <slot></slot>
    <Footer v-show="hasFooter"/>
  </div>
</template>

<script>
export default {
  name: 'Layerpage',
  props: {
      hasShadow: { 
          type: Boolean, 
          default: false,
      },
      hasFooter: { 
          type: Boolean, 
          default: true,
      },
  },
}
</script>

<style lang="scss">
    .b-layerpage {
        overflow-x: hidden;
    }
</style>