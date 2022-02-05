<template>
  <div
    class="b-layerpage"
  >
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Layerpage',
  props: {
      text: 'Blah',
  },
}
</script>

<style lang="scss">
    .b-layerpage {
        position: relative;
    }
</style>