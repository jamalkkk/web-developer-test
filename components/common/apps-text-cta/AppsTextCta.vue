<template>
    <component
        :is="tag"
        :class="['b-apps-text-cta', {
            'is-blue': isBlue,
            'is-button': isButton,
        }]"
        :disabled="isDisabled"
        :href="link"
        :type="type"
        @click="onClick"
    >
        {{ text }}
    </component>
</template>

<script>
export default {
    name: 'AppsTextCta',
    props: {
        isButton: { 
            type: Boolean, 
            default: false
        },
        isBlue: { 
            type: Boolean, 
            default: false
        },
        isDisabled: { 
            type: Boolean, 
            default: false
        },
        type: { 
            type: String, 
            default: null,
        },
        link: { 
            type: String, 
            default: null,
        },
        text: { 
            tyape: String, 
            default: ''
        },
        onClick: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
    },
    computed: {
        tag () {
            return this.isButton ? 'button' : 'a';
        },
    },
}
</script>

<style lang="scss">
    .b-apps-text-cta {
        color: #000;
        padding: .5rem 1.5rem 1.5rem;
        border-radius: 3px;
        text-transform: uppercase;
        transition: all .3s ease-in;
        border: 0;

        &.is-blue {
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
