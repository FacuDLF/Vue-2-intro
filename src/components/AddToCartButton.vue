<template>
    <button @click="ADD_TO_CART">
        <!-- :disabled="!inventory":class="{ disabledButton: !inventory }" -->
      Add to cart
      </button>
</template>

<script>
import Vue from 'vue';
import {mapActions} from 'vuex';

const Components = Vue.extend ({
  name: 'AddToCartButton',
  methods: {
    ...mapActions ([
      'ADD_TO_CART'
    ]),
  },
});

export default Components

</script>

<style scoped>
button {
  margin-top: 30px;
  border: none;
  background-color: #40ddd5;
  color: white;
  height: 40px;
  width: 150px;
  font-size: 14px;
  cursor: pointer;
} 

button:hover {
    background-color: lightseagreen;
}

.disabledButton {
  background-color: #d8d8d8;
}
</style>
