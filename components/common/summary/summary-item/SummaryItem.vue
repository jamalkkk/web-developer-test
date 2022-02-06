<template>
    <div class="b-summary-item row no-gutters">
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="text"
            class="summary-item-column col-md-4"
        />
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="amount"
            class="summary-item-column col-md-2"
        />
        <div class="summary-item-column col-md-3">
            <quantity 
                :value="number"
                :add="addItem"
                :reduce="reduceItem"
            />
        </div>
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="total"
            class="summary-item-column col-md-3"
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
            default: 'small',
        },
        quantity: { 
            type: Number, 
            default: 2,
        },
        stockLevel: { 
            type: Number, 
            default: 2,
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
            this.number += 1;
            console.log('add');
            this.add();
        },
        reduceItem () {
            this.number -= 1;
            console.log('reduce');
            this.reduce();
        },
    }
}
</script>

<style lang="scss">
    .b-summary-item {
        width: 100%;
        margin: 1.5rem 0;
    }
</style>