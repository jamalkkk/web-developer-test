<template>
  <div class="b-layerpage">
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
        position: relative;
    }
</style>