<template>
    <layerpage :has-footer="false"> 
        <Summary 
            title="Your Basket"
            subtitle="Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase."
            :all-products="products.items"
            :bought-products="boughtProducts"
        />
    </layerpage>
</template>

<script>
import products from '~/api/products/index.json'

export default {
  head() {
    return {
      title: "APPS | Checkout"
    };
  },
  data() {
      return {
          products: [],
          boughtProducts: [
              {
                  sku: "AWDT0001-M",
                  quantity: 1,
              },
              {
                  sku: "AWDT0002",
                  quantity: 2,
              },
              {
                  sku: "AWDT0003-M",
                  quantity: 1,
              },
          ],
      };
  },
  asyncData ({ params }) {
    return { products }
  },
}
</script>
