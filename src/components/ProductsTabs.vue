<template>
    <div>
        <span class="tab"
        :class="{ activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        >
        {{ tabs }}
        </span>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet.</p> 
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
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
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex';

const Components = Vue.extend ({
    name: 'Tabs',
    computed: {
        ...mapState ({
            name: state => state.name,
            review: state => state.review,
            rating: state => state.rating 
        })
    }
});

export default Components

</script>

<style scoped>
.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16C0B0;
  text-decoration: underline;
}
</style>
