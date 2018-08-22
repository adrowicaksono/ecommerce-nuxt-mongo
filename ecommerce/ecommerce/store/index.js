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
      setItemBySearch(state, data) {
        let list = [...new Set(state.items)]
        console.log(list, '<-- new list', data, '<---data')
        let newList = null
        if(Number(data)){
          console.log("number nih")
          newList =  list.filter(function(x){
                            return x.price >= Number(data)
                      })
        }else{
          let word = data.toLowerCase()
          newList =  list.filter(function(x){
            let name = x.name.toLowerCase()
            let category = x.category.toLowerCase()
            let alt = x.category.toLowerCase()
            return name.includes(word) || category.includes(word) || alt.includes(word) 
          })
        }
        console.log('by search :',newList)
        state.items = newList
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
     getCategory({commit}, payload){
       console.log('store get category',payload)
       let url = `http://localhost:4000/category?category=${payload}`
       axios.get(url)
       .then(response => {
         console.log(response.data.data)
         commit('setItem', response.data.data )
       })
       .catch( err => {
         console.log(err)
       })
     },
     getBySearch({commit}, payload){
       console.log('action search :',payload)
       commit('setItemBySearch', payload)
        // let list = [...new Set(this.filterCategory)]
        // let limit = this.rangePrice
        // if(list.length > 0 ){
        //     return this.stocks.filter(function(stock){
        //         // console.log(limit)
        //         // console.log(app.rangePrice)
        //         // console.log(stock.price)
        //         return list.indexOf(stock.category) != -1  && Number(stock.price) >= limit
        //     })
     }
    },
  })
}

export default createStore