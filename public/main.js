var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/greenSocks.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'assets/blueSocks.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0 
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
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
        }
    }

})