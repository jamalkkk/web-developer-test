<template>
    <div class="b-summary">
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="h3"
            :text="title"
            class="mb-4"
        />
        <apps-headline 
            :is-dark="true"
            :is-font-light="true"
            tag="p"
            :text="subtitle"
        />
        <div class="summary-table container">
            <div class="summary-headings row no-gutters pb-3">
                <apps-headline 
                    v-for="(heading, index) in headings" :key="index"
                    :is-dark="true"
                    tag="h5"
                    :text="heading.name"
                    :class="`summary-heading col-${heading.size}`"
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
                />
            </div>
            <div class="summary-total row no-gutters mb-2">
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    text="Subtotal"
                    class="col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    :text="subtotal"
                    class="col-md-2 text-right"
                />
            </div>
            <div class="summary-total row no-gutters mb-2">
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    text="VAT at 20%"
                    class="col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    :is-font-light="true"
                    tag="p"
                    :text="vat"
                    class="col-md-2 text-right"
                />
            </div>
            <div class="summary-total row no-gutters">
                <apps-headline 
                    :is-dark="true"
                    tag="p"
                    text="Total"
                    class="col-md-9"
                />
                <apps-headline 
                    :is-dark="true"
                    tag="p"
                    :text="total"
                    class="col-md-2 text-right"
                />
            </div>
            <form 
                class="summary-form"
                :action="submit"
            >
                <div class="summary-cta col-md-11 text-right p-0">
                    <apps-text-cta
                        :is-blue="true"
                        :is-button="true"
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
            headings: Headings,
            items: [],
            subtotal: '',
            vat: '',
            total: '',
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

            this.subtotal = `£${this.twoDecimals(subtotal)}`;
            this.vat = `£${this.twoDecimals(subtotal * 0.2)}`;
            this.total = `£${this.twoDecimals(subtotal + subtotal * 0.2)}`;
        },
    },
    methods: {
        add(index) {
            this.items[index].quantity ++;

            this.items = [ ...this.items ];
        },
        reduce(index) {
            this.items[index].quantity --;

            this.items = [ ...this.items ];
        },
        remove(index) {
            this.items.splice(index, 1);

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
        margin: 12rem auto;
        padding: 0 1.5rem;
        

        .summary-table {
            margin-top: 4.5rem;
            padding: 0;
        }

        .summary-headings {
            border-bottom: 2px solid #efefef;
        }

        .summary-items {
            margin-bottom: 4.5rem;
        }

        .summary-form {
            margin-top: 4.5rem;
        }
    }
</style>