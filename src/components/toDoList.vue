<template>
  <div>
    <a href="#modal"><i class="fas fa-shopping-cart carro"></i></a>
    <div id="modal" class="modal">
      <div class="modal-contenido">
        <a class="cross" href="#">X</a>

        <div>
          <span
            class="sections"
            :class="{ selected: avtiveSection === section }"
            v-for="(section, index) in sections"
            :key="index"
            @click="activeSection = section"
            >{{ section }}</span
          >
        </div>
        <div v-show="activeSection === 'Products'">
          <h2>Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit reiciendis neque fugiat aspernatur nam dolorum assumenda eveniet aperiam, optio similique? Sequi architecto doloribus laudantium accusamus non corporis distinctio molestiae?</p>
        </div>
        <div v-show="activeSection === 'To-do list'">
          <Todos />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Todos from "./Todos.vue";

const Component = Vue.extend({
  name: "Modal",
  components: {
    Todos,
  },
  data() {
    return {
      sections: ["Products", "To-do list"],
      activeSection: "Products",
    };
  },
});

export default Component;
</script>

<style scoped>
.modal-contenido {
  background-color: #f8f8f8;
  width: 50%;
  padding: 10px 20px;
  margin: 9% 0 0 20%;
  border-radius: 3px;
}
.carro {
  margin-right: 5px;
}
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 1s;
}
.cross {
  color: black;
  font-size: 10px;
  cursor: default;
  text-decoration: none;
  right: 0;
}
#modal:target {
  opacity: 1;
  pointer-events: auto;
}
.section {
  margin-left: 10px;
  cursor: pointer;
}
.selected {
  color: #16c0b0;
  text-decoration: underline;
}
</style>