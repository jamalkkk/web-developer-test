<template>
    <div 
        class="b-overlay"
        @click="onClick"
        >
    </div>
</template>

<script>
export default {
    name: 'Overlay',
    props: {
        onClick: { 
            type: Function, 
            default: function() {
                return null;
            },
        },
    },
}
</script>

<style lang="scss">
    .b-overlay {
        z-index: 1;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000000e0;
        opacity: 0;
        animation: $overlay-fade-in-animation;
    }
</style>