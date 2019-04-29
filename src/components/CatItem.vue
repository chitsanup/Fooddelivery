<template>
<v-container pa-0>
  <v-layout>
    <v-flex>
      <v-img :src="src" aspect-ratio="3">
        <v-layout ma-0 column fill-height pl-1
        class="lightbox white--text">
        <v-spacer></v-spacer>
        <v-flex shrink>
          <div class="title">{{label}}</div>
        </v-flex>
        </v-layout>
      </v-img>
    </v-flex>
   </v-layout>
</v-container>
</template>

<script>
  export default {
    name : "cat-item",
    props :{
      label :{
        type : String,
        default : "Category"
      },
      src :{
        type : String,
        default : "https://cdn.vox-cdn.com/thumbor/_73Mw9kZ1ZdH1M7IUusMGQNf4TA=/0x0:960x768/1200x800/filters:focal(424x378:576x530)/cdn.vox-cdn.com/uploads/chorus_image/image/56732615/ubereatsFB.0.jpg", 
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
