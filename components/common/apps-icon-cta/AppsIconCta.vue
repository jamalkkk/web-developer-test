<template>
  <component
    :is="type"
    v-html="html"
    :class="['b-apps-icon-cta', {
        'is-button': isButton,
        'is-big': isBig,
        'is-small': isSmall,
    }]"
    :disabled="isDisabled"
    :href="link"
    @click="onClick"
  />
</template>

<script>
export default {
    name: 'AppsIconCta',
    props: {
        isButton: { 
            type: Boolean, 
            default: false
        },
        isBig: { 
            type: Boolean, 
            default: false
        },
        isSmall: { 
            type: Boolean, 
            default: false
        },
        isDisabled: { 
            type: Boolean, 
            default: false
        },
        link: { 
            type: String, 
            default: ''
        },
        icon: { 
            tyape: String, 
            default: 'cart'
        },
        onClick: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
    },
    computed: {
        type () {
            return this.isButton ? 'button' : 'a';
        },
        html () {
            return require(`~/assets/img/svg/${this.icon}.svg?raw`);
        },
    },
}
</script>

<style lang="scss">
    .b-apps-icon-cta {
        display: inline-flex;
        width: 4rem;
        height: 4rem;
        border: 0;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        background: unset;
        
        &.is-big {
            width: 5rem;
            height: 5rem;
        }
        
        &.is-small {
            width: .7rem;
            height: .7rem;
        }

        &:disabled {
            cursor: not-allowed;

            svg {
                fill: #ccc;
            }
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
