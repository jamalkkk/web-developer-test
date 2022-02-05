<template>
  <a
    v-html="require(`~/assets/img/svg/${icon}.svg?raw`)"
    :class="['b-apps-icon-link', {
        'is-big': isBig,
    }]"
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
        isBig: { 
            type: Boolean, 
            default: false
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
        width: 4rem;
        height: 4rem;
        padding: 1rem;
        align-items: center;
        justify-content: center;

        &.is-big {
            width: 5rem;
            height: 5rem;
        }

        svg {
            width: 100%;
            height: 100%;
            transition: all .3s ease-in;

            &:hover {
                text-decoration: none;
                fill: #ccc;
            }
        }
    }
</style>
