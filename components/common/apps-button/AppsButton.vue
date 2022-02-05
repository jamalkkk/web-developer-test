<!-- Please remove this file from your project -->
<template>
  <button
    class="b-apps-button"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppsButton',
  props: {
      text: '',
  },
}
</script>
