var eventBus = new Vue()

const store = new.VuexStore({
    el: '#app',
    state: {
        product: [{
            variantId:{ 2234},
            variantColor: {'green'},
            variantImage: {'assets/greenSocks.jpg'},
            variantQuantity: 10,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: {"80% cotton", "20% polyester", "Gender neutral"},
            shipping: 0
        },
        { variantId: 2235,
            variantColor: {'blue'},
            variantImage: {'assets/blueSocks.jpg'},
            variantQuantity: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: {"80% cotton", "20% polyester", "Gender neutral"},
            shipping: 2.99
        }],
        premium: true,
        cart: []
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {

    }
})

Vue.component('product', {
props: {
    premium: {
        type: Boolean,
        required: false
    }
},

    template: `
    <div class="product">

    <div class="prodcut-image">
        <img v-bind:src=image alt="">
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inventory">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping Cost: {{ $store.state.product.shipping }}</p>
        
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)">
        </div>

        <button v-on:click="addToCart" 
        :disabled="!inventory"
        :class="{ disabledButton: !inventory }"
        >Add to Cart</button>

        <product-tabs :reviews="reviews"></product-tabs>
        
    </div>

</div>
    `,
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
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
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
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }
})

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
        </p>
        
        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                </select>
        </p>
        
        <p>
            <input type="submit" value="Submit">
        </p>

    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating) {
                let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
            } 
            else {
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
            }
        }
    }
})

Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
    <div>
        <span class="tab"
        :class="{ activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab">
        {{ tab }}</span>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet.</p> 
            <ul>
            <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>{{ review.review }}</p>
            <p>Rating: {{ review.rating }}</p>
            </li>
            </ul>
        </div>

        <product-tabs></product-tabs>

        <product-review  v-show="selectedTab === 'Make a Review'" >
        </product-review>

    </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})