<!-- Please remove this file from your project -->
<template>
  <a
    v-html="require(`~/assets/img/svg/${icon}.svg?raw`)"
    class="b-apps-icon-link"
    :href=link
  />
</template>

<script>
export default {
    name: 'AppsIconLink',
    props: {
        color: { 
            type: String, 
            default: ''
        },
        size: { 
            type: String, 
            default: '1'
        },
        link: { 
            type: String, 
            default: ''
        },
        icon: { 
            type: String, 
            default: 'cart'
        },
    },

}
</script>

<style lang="scss">
    .b-apps-icon-link {
        display: inline-flex;
        padding: 1rem;

        svg {
            transition: all .3s ease-in;

            &:hover {
                text-decoration: none;
                fill: #ccc;
            }
        }
    }
</style>
