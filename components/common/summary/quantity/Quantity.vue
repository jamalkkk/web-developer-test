<template>
    <div class="b-quantity">
        <apps-icon-cta
            :is-button="true"
            :is-small="true"
            class="p-0"
            icon="minus"
            :on-click="reduce"
        />
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="`${value}`"
            class="mb-0"
        />
        <apps-icon-cta
            :is-button="true"
            :is-small="true"
            class="p-0"
            icon="plus"
            :on-click="add"
        />
    </div>
</template>

<script>
export default {
    name: 'Quantity',
    data () {
        return {
            headings: [],
        };
    },
    props: {
        value: { 
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
    },
    computed: {},
}
</script>

<style lang="scss">
    .b-quantity {
        display: flex;
        width: 7.5rem;
        height: 3rem;
        border: 1px solid #448AFF;
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