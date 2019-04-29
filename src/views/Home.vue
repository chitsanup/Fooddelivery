<template>
  <v-container pa-0>
    <v-layout column="hidden-sm-and-up">
      <v-flex mb-2>
        <app-cover/>
      </v-flex>
    </v-layout>
    
    <v-layout column>
       <v-flex ml-2>
        <my-headline label="เพิ่มอาหาร"/>
      </v-flex>
       <v-flex ml-2>
        <food-add-form/>
      </v-flex>  
      <v-flex ml-2>
        <my-headline label="รายการแนะนำ"/>
      </v-flex>
      <v-flex pa-2>
        <list-food-recommend/>
      </v-flex>
       <v-flex ml-2>
        <my-headline label="หมวดหมู่"/>
      </v-flex>
      <v-flex pa-2>
        <list-category/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AppCover from "@/components/AppCover"
  import AppHeadline from "@/components/AppHeadline"
  import ListFoodRecommend from "@/components/ListFoodRecommend"
  import ListCategory from "@/components/ListCategory"
  import FoodAddForm from "@/components/FoodAddForm"

  export default {
    components: {
      AppCover,
      "my-headline" : AppHeadline,
      ListFoodRecommend,
      ListCategory,
      FoodAddForm
    }
  }
</script>