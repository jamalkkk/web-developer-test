<template>
    <div class="b-quantity">
        <apps-icon-cta
            :is-button="true"
            :is-small="true"
            :is-disabled="!value"
            class="p-0"
            icon="minus"
            :on-click="reduce"
        />
        <apps-input 
            :value="value"
            :max="max"
            :index="index"
            :set-value="setQuantity"
        />
        <apps-icon-cta
            :is-button="true"
            :is-small="true"
            :is-disabled="value === max"
            class="p-0"
            icon="plus"
            :on-click="add"
        />
    </div>
</template>

<script>
import AppsInput from '../../apps-input/AppsInput.vue';
export default {
  components: { AppsInput },
    name: 'Quantity',
    data () {
        return {
            headings: [],
        };
    },
    props: {
        index: { 
            type: Number, 
            default: 0,
        },
        value: { 
            type: Number, 
            default: 1,
        },
        max: { 
            type: Number, 
            default: 1,
        },
        add: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
        reduce: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
        setQuantity: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
    },
}
</script>

<style lang="scss">
    .b-quantity {
        display: flex;
        width: 7.5rem;
        height: 3rem;
        border: 1px solid $color-blue;
        border-radius: 3px;
        align-items: center;
        justify-content: space-around;

        .quantity-button {
            display: inline-flex;
            width: .7rem;
            height: .7rem;
            border: 0;
            padding: 0;
            background: none;
            align-items: center;
            transition: $base-transition;
            

            &:hover {
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>