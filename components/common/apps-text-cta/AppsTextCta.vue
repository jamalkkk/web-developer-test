<template>
    <component
        :is="tag"
        :class="['b-apps-text-cta', {
            'is-blue': isBlue,
            'is-button': isButton,
            'is-disabled': isDisabled,
            'is-loading': isLoading,
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
        isLoading: { 
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
        color: $color-black;
        padding: .5rem 1.5rem 1.5rem;
        border-radius: 3px;
        text-transform: uppercase;
        transition: $base-transition;
        border: 0;

        &.is-blue {
            color: $color-white;
            background-color: $color-blue;

            &:hover {
                color: $color-white;
            }
        }

        &.is-loading {
            background-color: $color-grey-light;
            cursor: progress;
        }

        &:disabled {
            background-color: $color-grey-light;
            cursor: not-allowed;
        }

        &:hover {
            color: $color-black;
            background-color: $color-grey-light;
            text-decoration: none;
        }
    }     
</style>
