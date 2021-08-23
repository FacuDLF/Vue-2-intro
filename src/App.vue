<template>
  <div class="div">

    <NavBar />
    <Products />

  </div>
</template>

<script>
import Vue from 'vue';
import NavBar from './components/NavBar.vue';
import Products from './components/Products.vue';

const Components = Vue.extend ({
  name: 'App',
  components: {
    NavBar,
    Products,
  }
});

export default Components
</script>

<style>
body {
  font-family: tahoma;
  color:#282828;
  margin: 0px;
}
</style>