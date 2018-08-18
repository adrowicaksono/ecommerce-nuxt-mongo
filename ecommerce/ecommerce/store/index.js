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
        
      }
    },
    actions: {
     addToCartState ({commit}, payload) {
        // commit('setItem', payload)
            console.log(payload._id, "actions++++++++++")
            commit('setCart', payload)
     },
     minusToCartState({commit}, payload){
            console.log(payload._id, "actions----------")
            commit('minusCart', payload)
     },
     getItem({commit}, payload){
        let url = `http://localhost:4000/`
        axios.get(url)
        .then(response => {
          // console.log(response.data.data)
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