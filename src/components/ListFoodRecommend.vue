<template>
<!-- -->
  <v-container pa-0 grid-list-md>
          <v-layout row wrap>
            <v-flex xs6 v-for="i in foods" v-bind:key="i.id">
              <food-recommend :item="i"/>
              </v-flex>
            </v-layout>
  </v-container>
</template>

<script>
import FoodRecommend from "@/components/FoodRecommend"
import axios from 'axios';

import {sync,call} from 'vuex-pathify';

  export default {
    name : "list-food-recommend",
    components:{
      FoodRecommend,
    },
    computed:{
      foods : sync('food/foods')
    },
    methods : {
      ...call('food/*')
    },
    async created() {},
    async mounted() {
      this.load()
    },
    data: () => ({
      
    })

  }
</script>

<style>
 
</style>
