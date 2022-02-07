<template>
    <div 
        :class="['b-summary-item', {
            'is-removed': isRemoved,
        }]"
    >
    <div class="row no-gutters"></div>
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="text"
            class="summary-item-product col-md-3 mb-1"
        />
        <div class="col-md-2 d-flex my-2 my-md-0 d-md-block justify-content-between align-items-center">
            <apps-headline 
                :is-dark="true"
                tag="h5"
                text="Price"
                class="d-md-none mb-0 text-left"
            />
            <apps-headline 
                :is-dark="true"
                :is-font-light="true"
                tag="p"
                :text="amount"
                class="mb-0 text-right"
            />
        </div>
        <div class="col-md-4 d-flex my-2 my-md-0 d-md-block justify-content-between align-items-center">
            <apps-headline 
                :is-dark="true"
                tag="h5"
                text="Quantity"
                class="d-md-none mb-0 text-left"
            /> 
            <quantity 
                :value="quantity"
                :index="index"
                :max="stockLevel"
                :add="addItem"
                :reduce="reduceItem"
                :set-quantity="setQuantity"
                class="mx-md-auto"
            />
        </div>
        <div class="col-md-2 d-flex my-2 my-md-0 d-md-block justify-content-between align-items-center">
            <apps-headline 
                :is-dark="true"
                tag="h5"
                text="Cost"
                class="d-md-none mb-0 text-left"
            />
            <apps-headline 
                :is-dark="true"
                :is-font-light="true"
                tag="p"
                :text="total"
                class="text-right mb-0"
            />
        </div>
        <div class="col-md-1 d-flex my-2 my-md-0 d-md-block justify-content-end align-items-center text-right">
            <apps-icon-cta
                :is-button="true"
                icon="delete"
                :on-click="removeItem"
                class="summary-item-delete "
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SummaryItem',
    data () {
        return {
            number: this.quantity,
            isRemoved: false,
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
        setQuantity: { 
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
            this.isRemoved = true;
            setTimeout(() => {
                this.remove(this.index);
                this.isRemoved = false;
            }, 300);
        },
    }
}
</script>

<style lang="scss">
    .b-summary-item {
        display: flex;
        width: 100%;
        margin: 2rem 0;
        align-items: center;
        overflow: hidden;
        height: auto;

        @include md {
            margin: 1.5rem 0;
        }

        &.is-removed {
            animation: $fade-out-animation;
        }

        .summary-item-product {
            padding-bottom: 1.5rem;
            border-bottom: $grey-border;

            @include md {
                padding-bottom: 0;
                border-bottom: none;
            }
        }

        .summary-item-delete {
            justify-content: flex-end;
            
            svg {
                width: auto;
            }
        }
    }
</style>