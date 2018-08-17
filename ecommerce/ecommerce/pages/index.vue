<template>
  <section class="sectionIndex">
    <div class="container">
        <div v-for="(i, idx) in 12" v-bind:key="{idx}" class="content">
          <Card/>
        </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Card from '~/components/Card.vue'
export default {
  layout:'main',
  components: {
    AppLogo,
    Card
  },
  // data () {
  //   return {
      
  //   }
  // },
  // mounted () {

  // },
  // methods:{
    
  // },
  // computed : {

  // } 
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
  background-color:antiquewhite;
  height: 200px;
  width:23%;
  padding:10px;
  align-items: flex-start;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left:1px;
  /* margin-bottom:-99px; */
}
</style>

