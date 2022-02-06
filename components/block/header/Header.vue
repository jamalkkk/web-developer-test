<template>
  <div
    :class="['b-header', {
        'has-shadow': hasShadow,
    }]"
  >
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
        :class="['header-navbar d-lg-block', {
            'is-active': isMenuActive,
        }]"
    >
        <apps-text-link
            class="header-link"
            text="PRODUCTS"
            link="/products"
        />
        <apps-text-link
            class="header-link"
            text="NEWS"
            link="/news"
        />
        <apps-text-link
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
    <div class="header-navbar-menu d-lg-none">
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
import Overlay from '../../common/overlay/Overlay.vue';
export default {
    components: { Overlay },
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
        position: relative;
        display: flex;
        width: 100%;
        height: 11rem;
        padding: 0 4.5rem;
        align-items: center;
        justify-content: space-between;

        &.has-shadow {
            box-shadow: 0 0 1rem .5rem #ccc;
        }

        .header-navbar {
            z-index: 1;
            position: absolute;
            display: none;
            flex-direction: column;
            top: 1rem;
            right: -15rem;
            padding: 1rem;
            border-radius: 3px;
            align-self: flex-start;
            background: #fff;
            box-shadow: 0 0 10rem 10rem transparent;
            transition: $base-transition;

            @include lg {
                position: static;
                display: block;
                padding: 0;
                align-self: unset;
                box-shadow: unset;
            }

            &.is-active {
                display: flex;
                right: 1rem;
                box-shadow: 0 0 1rem .5rem #1115;
            }
        }

        .header-link:not(:first-of-type) {
             @include lg {
                margin-left: 1rem;
            }
        }
        
    }
</style>