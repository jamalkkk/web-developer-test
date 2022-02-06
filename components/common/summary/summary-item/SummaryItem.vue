<template>
    <div class="b-summary-item row no-gutters">
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="text"
            class="summary-item-column col-md-3 mb-0"
        />
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="amount"
            class="summary-item-column col-md-2 text-right mb-0"
        />
        <div class="summary-item-column col-md-4">
            <quantity 
                :value="quantity"
                :max="stockLevel"
                :add="addItem"
                :reduce="reduceItem"
            />
        </div>
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="total"
            class="summary-item-column col-md-2 text-right mb-0"
        />
        <apps-icon-cta
            :is-button="true"
            icon="delete"
            :on-click="removeItem"
            class="summary-item-column col-md-1"
        />
    </div>
</template>

<script>
export default {
    name: 'SummaryItem',
    data () {
        return {
            number: this.quantity,
        };
    },
    props: {
        index: { 
            type: Number, 
            default: 0,
        },
        name: { 
            type: String, 
            default: 'Item',
        },
        price: { 
            type: Number, 
            default: 10.00,
        },
        size: { 
            type: String, 
            default: 'one size',
        },
        quantity: { 
            type: Number, 
            default: 0,
        },
        stockLevel: { 
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
        remove: { 
            type: Function, 
            default: function() {
                return null;
            }
        },
    },
    computed: {
        text () {
            return `${this.name}, ${this.size}`;
        },
        amount () {
            return `£${this.price}`;
        },
        total () {
            const total = (Math.round((this.price * this.quantity) * 100) / 100).toFixed(2);
            return `£${total}`;
        },
    },
    methods: {
        addItem () {
            this.add(this.index);
        },
        reduceItem () {
            this.reduce(this.index);
        },
        removeItem () {
            this.remove(this.index);
        },
    }
}
</script>

<style lang="scss">
    .b-summary-item {
        display: flex;
        width: 100%;
        margin: 1.5rem 0;
        align-items: center;
    }
</style>