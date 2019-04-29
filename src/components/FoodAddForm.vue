<template>
<v-container pa-0>
  <v-layout column>
    <v-flex>
      <v-text-field
            v-model="form.name"
            label="Name"
            placeholder="ชื่ออาหาร"
            outline
      ></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field
            v-model="form.price"
            label="Price"
            placeholder="ราคาอาหาร"
            outline
      ></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field
            v-model="form.image_url"
            label="Image URL"
            placeholder="URL"
            outline
      ></v-text-field>
    </v-flex>
    <v-flex>
       <v-btn @click="save" block color="primary" dark>เพิ่ม</v-btn>
    </v-flex>
   </v-layout>
</v-container>

</template>

<script>
    import axios from 'axios';
    import {sync,call} from 'vuex-pathify';

    export default {
    name : "food-add-form",
    computed : {
      form : sync("food/addForm") 
    },
    data: () =>({
    }),
    methods : {
      save : call('food/saveAddForm')
    },
  }
</script>

<style>

</style>
