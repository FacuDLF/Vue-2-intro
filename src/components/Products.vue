<template>
    <div class="product">
        <div class="product-image">
            <img :src="require(`../assets/${image}.jpg`)" alt="">
        </div>
        
        <div class="product-info">

            <Cart />

            <h1>{{ title }}</h1>

            <ul>
                <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)">
            </div>

            <AddToCartButton /> <RemoveFromCart />
            <Tabs />
            <Reviews />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import AddToCartButton from './AddToCartButton.vue';
import RemoveFromCart from './RemoveFromCart';
import Cart from './Cart.vue';
import Reviews from './ProductsReviews.vue';
import Tabs from './ProductsTabs.vue';

const Components = Vue.extend ({
  name: 'Products',
  data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: 'greenSocks',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: 'blueSocks',
                    variantQuantity: 0
                }
            ],
            reviews: []
        }
    },
    methods: {        
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    },
    components: {
        AddToCartButton,
        RemoveFromCart,
        Cart,
        Reviews,
        Tabs
    }
});

export default Components

</script>

<style>
.product {
  display: flex;
  flex-flow: row;
  padding: 1rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 50%;
  margin: 40px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

.product-image {
  width: 50%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 80%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}


</style>
