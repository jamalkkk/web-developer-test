<template>
  <div class="b-header p-relative d-flex w-100 justify-content-between align-items-center">
    <a 
        class="header-logo"
        href="/"
    >
        <apps-logo />
    </a>
    <overlay 
        v-show="isMenuActive"
        :on-click="toggleMenu"
    />
    <div 
        :class="['header-navbar d-md-block', {
            'is-active': isMenuActive,
        }]"
    >
        <apps-text-cta
            class="header-link"
            text="PRODUCTS"
            link="/products"
        />
        <apps-text-cta
            class="header-link"
            text="NEWS"
            link="/news"
        />
        <apps-text-cta
            class="header-link"
            text="CONTACT"
            link="/contact"
        />
        <apps-icon-cta
            class="header-link"
            icon="cart"
            link="/checkout"
        />
    </div>
    <div class="header-navbar-menu d-md-none">
        <apps-icon-cta
            :is-button="true"
            class="header-link"
            icon="menu"
            :on-click="toggleMenu"
        />
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        hasShadow: { 
            type: Boolean, 
            default: false,
        },
    },
    data () {
        return {
            isMenuActive: false,
        };
    },
    methods: {
        toggleMenu() {
            console.log('heeheh');
            this.isMenuActive = !this.isMenuActive;
        },
    },
    watch: {
        isMenuActive () {
            document.documentElement.style.overflow = this.isMenuActive ? 'hidden' : 'unset';
        },
    },
}
</script>

<style lang="scss">
    .b-header {
        z-index: 1;
        height: 11rem;
        padding: 0 4.5rem;
        box-shadow: 0 0 1rem .5rem $color-grey-light;

        .header-navbar {
            z-index: 1;
            position: absolute;
            display: none;
            flex-direction: column;
            top: 1rem;
            right: 1rem;
            padding: 1rem;
            border-radius: 3px;
            align-self: flex-start;
            box-shadow: 0 0 10rem 10rem transparent;
            opacity: 0;
            background: transparent;
            transition: $base-transition;

            @include md {
                position: static;
                display: block;
                padding: 0;
                align-self: unset;
                box-shadow: unset;
                opacity: 1;
            }

            &.is-active {
                display: flex;
                box-shadow: 0 0 1rem .5rem #1115;
                animation: $menu-fade-in-animation;
            }
        }

        .header-link:not(:first-of-type) {
             @include md {
                margin-left: 1rem;
            }
        }
        
    }
</style>