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
        text: { 
            type: String, 
            default: ''
        },
        onClick: { 
            type: Function, 
            default: null,
        },
    },

}
</script>

<style lang="scss">
    .b-apps-button {
        color: #000;
        padding: .5rem 1.5rem 1.5rem;
        border-radius: 3px;
        transition: all .3s ease-in;

        &:hover {
            color: #000;
            background-color: #ccc;
            text-decoration: none;
        }
    }     
</style>