<template>
    <form class="review-form" @submit.prevent="handleSubmit">

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
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
            <input type="submit" value="Submit" 
            v-if="{name,review,rating}.length !== 0"
            :disabled="{name,review,rating}.length === 0"
            :class="[{disabledButton}]"
            >
        </p>    

    </form>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

const Components = Vue.extend ({
    name: 'Reviews',
    data() {
        return {
            name: "",
            review: "",
            rating: null
        }
    },
    computed: ({
        ...mapState({
            errors: state => state.errors,
            productReviews: state => state.productReviews
        })
    }),
    methods: {
        ...mapActions([
            'SUBMIT_REVIEW'
        ]),
        handleSubmit() {
            this['SUBMIT_REVIEW']({name: this.name, review: this.review, rating: this.rating})
            this.name = "";
            this.review = "";
            this.rating = null;
        }
    }
});

export default Components

</script>

<style scoped>
.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;  
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
.disabledButton {
    border: 0px solid black;
    background-color: whitesmoke;
    color: grey;
}
.disabledButton:hover {
    border: 0px solid black;
    background-color: whitesmoke;
    color: grey;
    cursor: not-allowed;
}
</style>