var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'assets/greenSocks.jpg',
        inventory: true,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/greenSocks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'assets/blueSocks.jpg'
            }
        ],
        cart: 0 
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }

})