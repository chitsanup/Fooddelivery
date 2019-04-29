<template>
<v-container pa-0>
  <v-layout>
    <v-flex>
      <v-img :src="item.image_url" aspect-ratio="1">
        <v-layout ma-0 column fill-height pl-1
        class="lightbox white--text">
        <v-flex align-self-end>
          <v-btn @click="remove(item)" fab dark color="red">
             <v-icon dark>delete</v-icon>
          </v-btn>
        </v-flex>

        <v-spacer></v-spacer>
        <v-flex shrink>
          <div class="title">{{item.name}}</div>
          <div class="subheading">{{item.price}} บาท</div>
        </v-flex>
        </v-layout>
      </v-img>
    </v-flex>
   </v-layout>
</v-container>
</template>

<script>
import {sync,call} from 'vuex-pathify';
  export default {
    name : "food-recommend",
    methods : {
      remove : call('food/remove')
    },
    props :{
      item : {
        type : Object,
        default : function(){
          return{
            id: 0,
            name : "test",
            price : 12,
            image_url : "https://clib.psu.ac.th/southerninfo/storages/pictures/Food/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B316.jpg"
          }
        }
      }
    },
    data: () => ({})
  }
</script>

<style scope>
 .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 72px);
  }
</style>
