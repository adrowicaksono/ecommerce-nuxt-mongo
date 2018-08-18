import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      items:'',
    },
    mutations: {
      setItem (state, data) {
        // state.items.push(data)
        state.items = data
        console.log(data, "===========================")
      },
    },
    actions: {
     addItem ({commit}, payload) {
        // commit('setItem', payload)
            console.log("==================")
     },
     getItem({commit}, payload){
        console.log('action broooo')
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
    // async getItem ({ commit }) {
    //   const { data } = await axios.get('http://localhost:4000/')
    //   commit('setItem', data)
    // }
    },
  })
}

export default createStore