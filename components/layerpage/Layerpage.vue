<!-- Please remove this file from your project -->
<template>
  <div
    class="b-layerpage"
  >
    <Header />

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