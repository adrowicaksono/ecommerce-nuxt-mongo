<template>
  <section class="sectionIndex">
    <div class="container">
        <div v-for="(i, idx) in dataItems" v-bind:key="{idx}" class="content">
          <Card v-bind:item="i"/>
        </div>
    </div>
  </section>
</template>

<script>
// import Vue from 'vue'
// import Vuex from 'vuex'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
import Card from '~/components/Card.vue'
export default {
  // async fetch ({ store, params }) {
  //   await store.dispatch('getItem');
  // },
  layout:'main',
  components: {
    AppLogo,
    Card
  },
  data () {
    return {
      items:[]      
    }
  },
  mounted () {
    this.getItem ()
  },
  methods:{
    ...mapActions([
      'getItem',
    ]),  
  },
  computed : {
    dataItems(){
        console.log(this.$store.state.items)
        console.log()
        return this.$store.state.items
    },
  } 
}
</script>

<style>


.sectionIndex{
  width: 100%;
  margin: 0;

}
.container {
  /* border-style: solid;
  border-color:red; */
  margin-top:5px;
  margin-bottom:2px;
  margin-left: 10px;
  margin-right: 20px;

  background-color:rgba(255, 254, 254, 0.945);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction:row;
  width: 98%;
  flex-flow: row wrap;
  padding:2px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(126, 119, 119, 0.753);
}

.content{
  display: flex;
  /* border-style: solid;
  border-color:red; */
  /* height: 50vh; */
  width:23%;
  align-items: flex-start;
  margin-top: 3px;
  margin-bottom: 1px;
  margin-left:1px;
  overflow: hidden;
  /* margin-bottom:-99px; */
}
.content:hover{
   border: 0.3px solid rgb(2, 94, 94);
   padding-bottom: 2px;
   margin-right: 0px;
   box-shadow: 2px 2px rgba(126, 119, 119, 0.753);
}
</style>

