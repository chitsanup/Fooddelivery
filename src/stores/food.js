import axios from 'axios';
import{make} from 'vuex-pathify'
import { async } from 'q';
const state = {
    addForm : {},
    foods :  [
        {
        id : 1,
        name : "ข้าวมันไก่",
        price : 100,
        image_url : "https://unsplash.it/150/300?image=1"
      },
       {
        id : 2,
        name : "ข้าวหน้าเป็ด",
        price : 50,
        image_url : "https://unsplash.it/150/300?image=2"
      },
       {
        id : 3,
        name : "ข้าวหมูแดง",
        price : 25,
        image_url : "https://unsplash.it/150/300?image=3"
      },
       {
        id : 4,
        name : "ข้าวหมูกรอบ",
        price : 75,
        image_url : "https://unsplash.it/150/300?image=4"
      },
      ]
}
const mutations = make.mutations(state) 


const actions = {
    load : async function({state}){
        let result = await axios.get('http://10.94.2.82:8000/api/food')
        state.foods = result.data
    },
    saveAddForm : async function({state,dispatch}){
       let result = await axios.post('http://10.94.2.82:8000/api/food',state.addForm)
       state.addForm = {}
       dispatch('load')
    },
    remove : async function({state,dispatch},item){
        let result = await axios.delete('http://10.94.2.82:8000/api/food/'+item.id)
        dispatch('load')
    } 
}

export default {
  namespaced : true,
  modules : {},
  state : state,
  actions : actions,
  mutations : mutations,

}