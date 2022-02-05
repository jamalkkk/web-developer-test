<!-- Please remove this file from your project -->
<template>
    <component
        :is="tag"
        :class="['b-headline', {
            'is-light': isLight,
            'is-inverted': isInverted,
        }]"
        v-html="text"
    >
    </component>
</template>

<script>
export default {
    name: 'AppsIconLink',
    props: {
        tag: { 
            type: String, 
            default: 'h1'
        },
        text: { 
            type: String, 
            default: ''
        },
        isLight: { 
            type: Boolean, 
            default: false
        },
        isInverted: { 
            type: Boolean, 
            default: false
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
        
        &.is-light {
            font-weight: 200;
        }

        &.is-inverted {
            color: #fff;
        }
    }
</style>
