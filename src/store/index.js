import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    el: '#app',
    state: {
        product: [{
            variantId:2234,
            variantColor: 'green',
            variantImage: 'assets/greenSocks.jpg',
            inventory: 10,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender neutral"],
            shipping: 0,
        },
        {   variantId: 2235,
            variantColor: 'blue',
            variantImage: 'assets/blueSocks.jpg',
            inventory: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender neutral"],
            shipping: 2.99
        }],
        premium: true,
        cart: 0,
        productReviews: [],
        errors: []
    },
    mutations: {
        SET_CART(state, value) {
            state.cart = value
        },
        PUSH_PRODUCT_REVIEW(state, value) {
            state.productReviews.push(value);
        },
        PUSH_ERROR(state, value) {
            state.errors.push(value);
        },
        SET_ERRORS(state, value) {
            state.errors = value;
        }
    },
    actions: { 
        ADD_TO_CART({commit, state}) {
            commit('SET_CART', state.cart += 1)
        },
        REMOVE_FROM_CART({commit, state}) {
            if(state.cart > 0) {
                commit('SET_CART', state.cart -= 1)
            }
        },
        SUBMIT_REVIEW({commit}, review) {
            if(!this.name) {
                commit("PUSH_ERROR", "Name required.")
            }
            if(!this.review) {
                commit("PUSH_ERROR", "Review required.")
            }
            if(!this.rating) {
                commit("PUSH_ERROR", "Rating required.")
            }
            if(review.name && review.rating && review.review) {
                commit('PUSH_PRODUCT_REVIEW', review);
                commit('SET_ERRORS', []);
            }
            
    },
},
});

export default store;
