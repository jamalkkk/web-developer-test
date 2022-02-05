<!-- Please remove this file from your project -->
<template>
  <a
    class="b-apps-text-link"
    :href=link
  >
    {{ text }}
  </a>
</template>

<script>
export default {
    name: 'AppsTextLink',
    props: {
        text: { 
            type: String, 
            default: ''
        },
        link: { 
            type: String, 
            default: ''
        },
    },

}
</script>

<style lang="scss">
    .b-apps-text-link {
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
