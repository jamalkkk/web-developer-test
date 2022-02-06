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
                    :name="item.name"
                    :price="item.price"
                    :size="item.size"
                    :stock-level="item.stockLevel"
                    :quantity="item.quantity"
                    :add="add"
                    :reduce="reduce"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Summary',
    data () {
        return {
            headings: [
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
            ],
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
    computed: {
        allItems() {
            this.boughtProducts.forEach(boughtProduct=> {
                if(this.itemExists(boughtProduct.sku)) {
                    this.items.push()
                }
            })
        },
    },
    methods: {
        add() {
            console.log('add');
        },
        reduce() {
            console.log('reduce');
        },
        setItems() {
            this.boughtProducts.forEach((a) => {
                this.allProducts.forEach((b) => {
                    if (a.sku === b.sku) {
                         this.items.push({
                             ...a,
                             ...b,
                         });
                    }
                });
            });
        },
    },
    mounted() {
        console.log(this.allProducts);
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
    }
</style>