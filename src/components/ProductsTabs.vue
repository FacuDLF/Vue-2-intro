<template>
    <div>
        <span class="tab"
        :class="[{ activeTab: selectedTab === tab}]"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        >
        {{ tab }}
        </span>

        <product-tabs> 
            <div v-show="selectedTab === 'Reviews'">
                <p v-if="!reviews">There are no reviews yet.</p> 
                    <ul>
                        <li v-for="(reviews, index) in reviews" 
                            :key="index">
                            <p>{{ reviews.name }}</p>
                            <p>{{ reviews.review }}</p>
                            <p>Rating: {{ reviews.rating }}</p>
                        </li>
                    </ul>
            </div>

            <product-review  v-show="selectedTab === 'Make a Review'" >
                <p>
                Make a Review
                </p>
            </product-review>
            
        </product-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex';

const Components = Vue.extend ({
    name: 'Tabs',
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
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
