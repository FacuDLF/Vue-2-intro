<template>
    <button @click="REMOVE_FROM_CART"
        :disabled="cart === 0"
        :class="[{disabledButton: cart === 0}]"
    >
      Remove from cart
      </button>
</template>

<script>
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';

const Components = Vue.extend ({
    name: 'RemoveFromCart',
    methods: {
        ...mapActions ([
            'REMOVE_FROM_CART'
        ]),
    },
    actions: {

    },
    computed: {
        ...mapState ({
            cart: state => state.cart 
        })
    }
});

export default Components

</script>

<style scoped>
button {
  margin-top: 30px;
  border: 2px solid #40ddd5;
  background-color: white;
  color: #40ddd5;
  height: 40px;
  width: 150px;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
    background-color: #40ddd5;
    color: white;
}

.disabledButton {
    border: 0px solid black;
    background-color: lightgray;
    color: grey;
}
.disabledButton:hover {
    border: 0px solid black;
    background-color: lightgray;
    color: grey;
    cursor: not-allowed;
}
</style>