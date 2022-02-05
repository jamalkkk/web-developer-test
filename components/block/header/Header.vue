<template>
  <div
    class="b-header"
  >
    <div class="header-logo">
        <apps-logo />
    </div>
    <div class="header-navbar">
        <apps-text-link
            class="header-link"
            text="PRODUCTS"
            link="/products"
        />
        <apps-text-link
            class="header-link"
            text="NEWS"
            link="/news"
        />
        <apps-text-link
            class="header-link"
            text="CONTACT"
            link="/contact"
        />
        <apps-icon-link
            class="header-link"
            icon="cart"
            link="/checkout"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
      text: '',
  },
}
</script>

<style lang="scss">
    .b-header {
        position: relative;
        display: flex;
        width: 100%;
        height: 11rem;
        padding: 0 4.5rem;
        align-items: center;
        justify-content: space-between;

        .header-link:not(:first-of-type) {
            margin-left: 1rem;
        }
    }
</style>