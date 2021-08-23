<template>
    <div class="cart">
        <p>Cart({{cart}})</p>
    </div>
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex';

const Components = Vue.extend ({
    name: 'Cart',
        computed: {
            ...mapState ({
                cart: state => state.cart 
            })
        }
});

export default Components

</script>

<style scoped>
.cart {
margin-right: 25px;
float: right;
border: 1px solid #d8d8d8;
padding: 5px 20px;
}
</style>
