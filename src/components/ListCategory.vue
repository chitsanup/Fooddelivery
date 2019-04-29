<template>
<!-- -->
  <v-container pa-0 grid-list-md>
          <v-layout row wrap>
            <v-flex xs6 v-for="i in category" v-bind:key="i.id">
              <cat-item
              :src="i.image" :label="i.name"
              />
              </v-flex>
            </v-layout>
  </v-container>
</template>

<script>
import CatItem from "@/components/CatItem"
  
  export default {
    name : "list-category",
    components:{
      CatItem,
    },
    data: () => ({
      category : [
        {
        id : 1,
        name : "ออเดิฟ",
        image : "https://unsplash.it/150/300?image=11"
      },
       {
        id : 2,
        name : "ทอด",
        image : "https://unsplash.it/150/300?image=12"
      },
       {
        id : 3,
        name : "ต้ม & นึ่ง",
        image : "https://unsplash.it/150/300?image=13"
      },
       {
        id : 4,
        name : "ผัด",
        image : "https://unsplash.it/150/300?image=14"
      },
      {
        id : 5,
        name : "ของหวาน",
        image : "https://unsplash.it/150/300?image=15"
      },
      {
        id : 6,
        name : "อาหารว่าง",
        image : "https://unsplash.it/150/300?image=16"
      },
      ]
    })

  }
</script>

<style>
 
</style>
