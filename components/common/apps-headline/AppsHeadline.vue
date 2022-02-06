<!-- Please remove this file from your project -->
<template>
    <component
        :is="tag"
        :class="['b-headline', {
            'is-font-light': isFontLight,
            'is-inverted': isInverted,
            'is-dark': isDark,
        }]"
        v-html="text"
    >
    </component>
</template>

<script>
export default {
    name: 'AppsIconLink',
    props: {
        isFontLight: { 
            type: Boolean, 
            default: false
        },
        isInverted: { 
            type: Boolean, 
            default: false
        },
        isDark: { 
            type: Boolean, 
            default: false
        },
        tag: { 
            type: String, 
            default: 'h1'
        },
        text: { 
            type: String, 
            default: ''
        },
    },
    computed: {
        withBrTags: function() {
            const doc = this.text;
            return doc.replace(/(\\r)*\\n/g, '<br>')
        },
    },
}
</script>

<style lang="scss">
    .b-headline {
        color: #0009;
        
        &.is-font-light {
            font-weight: 200;
        }

        &.is-inverted {
            color: #fff;
        }

        &.is-dark {
            color: #000;
        }
    }
</style>
