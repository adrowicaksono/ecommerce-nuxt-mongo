import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      items:'',
      carts: {},
    },
    mutations: {
      setItem (state, data) {
        // state.items.push(data)
        state.items = data
      },
      setCart (state, data){
        if(state.carts.hasOwnProperty(data._id)){
          state.carts[data._id].total += data.price
          state.carts[data._id].count++
        }else{
          
          let obj = {
            id : data._id,
            data,
            count : 1,
            total : data.price,
          }
          state.carts[data._id] = obj
        }
      },
      minusCart (state, data) {
          state.carts[data._id].total -= data.price
          state.carts[data._id].count--
        
      },
      deleteItem ( state, data ) {
          delete state.carts[data]
      },
      emptyCart ( state ){
        state.carts = {}
      }
    },
    actions: {
     addToCartState ({commit}, payload) {
            commit ( 'setCart' , payload)
     },
     minusToCartState({commit}, payload){
            commit ( 'minusCart' , payload)
     },
     deleteItemOfCartState({commit}, payload){
            commit ( 'deleteItem', payload )
     },
     emptyCartsState ( {commit} ) {
            commit ( 'emptyCart')
     },
     getItem({commit}, payload){
        let url = `http://localhost:4000/`
        axios.get(url)
        .then(response => {
          commit('setItem',response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
     },
    },
  })
}

export default createStore