<template>
    <div class="b-summary">
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="h3"
            :text="!isSubmitted ? title : 'Congratulation!'"
            class="mb-4"
        />
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="!isSubmitted ? subtitle : 'You have successfully placed your order.'"
        />
        <div 
            :class="['summary-table container mx-0 mw-100', {
                'd-none': isSubmitted,
            }]"
        >
            <div class="summary-headings row no-gutters pb-3 d-none d-md-flex">
                <apps-headline 
                    :is-dark="true"
                    tag="h5"
                    text="Product"
                    class="summary-heading col-3"
                />
                <apps-headline 
                    :is-dark="true"
                    tag="h5"
                    text="Price"
                    class="summary-heading col-2 text-right"
                />
                <apps-headline 
                    :is-dark="true"
                    tag="h5"
                    text="Product"
                    class="summary-heading col-4 text-center"
                />
                <apps-headline 
                    :is-dark="true"
                    tag="h5"
                    text="Cost"
                    class="summary-heading col-2 text-right"
                />
            </div>
            <div class="summary-items">
                <summary-item 
                    v-for="(item, index) in items" :key="index"
                    :index="index"
                    :name="item.name"
                    :price="item.price"
                    :size="item.size"
                    :stock-level="item.stockLevel"
                    :quantity="item.quantity"
                    :add="add"
                    :reduce="reduce"
                    :remove="remove"
                    :set-quantity="setQuantity"

                />
            </div>
            <div class="summary-total row no-gutters mb-2">
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    text="Subtotal"
                    class="col col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    :text="`£${subtotal}`"
                    class="col-2 text-right"
                />
            </div>
            <div class="summary-total row no-gutters mb-2">
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    text="VAT at 20%"
                    class="col col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    :text="`£${vat}`"
                    class="col-2 text-right"
                />
            </div>
            <div class="summary-total row no-gutters">
                <apps-headline 
                    :is-dark="true"
                    tag="p"
                    text="Total"
                    class="col col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    tag="p"
                    :text="`£${total}`"
                    class="col-2 text-right"
                />
            </div>
            <form 
                class="summary-form"
                @submit.prevent="submitForm"
            >
                <div class="summary-cta col-md-11 text-right p-0">
                    <apps-text-cta
                        :is-blue="true"
                        :is-button="true"
                        :is-disabled="total === '0.00'"
                        :is-loading="isSubmitting"
                        type="submit"
                        text="Buy Now"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>

const Headings = [
    {
        name: 'Product',
        size: '4',
    },
    {
        name: 'Price',
        size: '2',
    },
    {
        name: 'Quantity',
        size: '3',
    },
    {
        name: 'Cost',
        size: '3',
    },
];
export default {
    name: 'Summary',
    data () {
        return {
            isSubmitted: false,
            isSubmitting: false,
            vatPercentage: 0.2,
            subtotal: '0',
            vat: '0',
            total: '0',
            headings: Headings,
            items: [],
        };
    },
    props: {
        title: { 
            type: String, 
            default: ''
        },
        subtitle: { 
            type: String, 
            default: ''
        },
        ctaText: { 
            type: String, 
            default: ''
        },
        ctaLink: { 
            type: String, 
            default: '',
        },
        allProducts: { 
            type: Array, 
            default: () => [],
        },
        boughtProducts: { 
            type: Array, 
            default: () => [],
        },
    },
    watch: {
        items() {
            let subtotal = 0;

            this.items.forEach(({ price, quantity }) => {
                subtotal += price * quantity;
            });

            this.subtotal = this.twoDecimals(subtotal);
            this.vat = this.twoDecimals(subtotal * this.vatPercentage);
            this.total = this.twoDecimals(subtotal + subtotal * this.vatPercentage);
        },
    },
    methods: {
        add(index) {
            this.setItem(index, 1);
        },
        reduce(index) {
            this.setItem(index, -1);
        },
        remove(index) {
            this.setItem(index, 0);
        },
        setItem(index, value) {
            if (!!value) {
                this.items[index].quantity += value;
            } else {
                this.items.splice(index, 1);
            }

            this.items = [ ...this.items ];
        },
        setQuantity(index, value) {
            this.items[index].quantity = value;

            this.items = [ ...this.items ];
        },
        setItems() {
            this.boughtProducts.forEach((bProduct) => {
                this.allProducts.forEach((aProduct) => {
                    if (bProduct.sku === aProduct.sku) {
                         this.items.push({
                             ...bProduct,
                             ...aProduct,
                         });
                    }
                });
            });
        },
        twoDecimals(amount) {
            return (Math.round(amount * 100) / 100).toFixed(2)
        },
        async submitForm() {
            this.isSubmitting = true;

            const products = [];

            this.items.forEach( ({ sku, quantity }) => {
                products.push({
                    sku,
                    quantity,
                });
            });

            await fetch('/submit-order', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    products: products,
                    final: this.total,
                }),
            })
            .then(data => {
                setTimeout(() => {
                    this.isSubmitted = true;
                }, 1000);
            });
        },
    },
    mounted() {
        this.setItems();
    }
}
</script>

<style lang="scss">
    .b-summary {
        width: 100%;
        max-width: 69rem;
        margin: 4.5rem auto;
        padding: 0 1.5rem;
        
        @include md {
            margin: 12rem auto;
        }

        .summary-table {
            margin-top: 4.5rem;
            padding: 0;
        }

        .summary-headings {
            border-bottom: $grey-border;
        }

        .summary-items {
            margin-bottom: 4.5rem;
        }

        .summary-form {
            margin-top: 4.5rem;
        }
    }
</style>