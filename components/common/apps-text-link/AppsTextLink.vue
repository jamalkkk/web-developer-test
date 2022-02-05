<template>
  <a
    :class="['b-apps-text-link', {
        'is-cta': isCta,
    }]"
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
        isCta: { 
            type: Boolean, 
            default: false,
        },
    },

}
</script>

<style lang="scss">
    .b-apps-text-link {
        color: #000;
        padding: .5rem 1.5rem 1.5rem;
        border-radius: 3px;
        text-transform: uppercase;
        transition: all .3s ease-in;

        &.is-cta {
            color: #fff;
            background-color: #448aff;

            &:hover {
                color: #fff;
            }
        }

        &:hover {
            color: #000;
            background-color: #ccc;
            text-decoration: none;
        }
    }     
</style>
