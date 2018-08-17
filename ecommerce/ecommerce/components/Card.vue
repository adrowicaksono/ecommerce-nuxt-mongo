<template>
    <div class="cardContainer">
        <div class="cardImg">
            <img v-bind:src="item.img" alt="" srcset="">
        </div>
         <div class="cardTitle">
            <h1>{{item.name}}</h1>
        </div>
        <div class="cardBody">
            <p>{{item.alt}}</p>
            <p class="price">{{item.price}}</p>
        </div>
        <div class="divider"></div>
        <div class="cardFooter">
            <button class="button-orange" @click="addToCart"> add to cart </button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props:['item'],
    methods : {
        ...mapActions([
            'addToCartState','getItem'
        ]), 
        addToCart () {
            console.log(JSON.stringify(this.item), "dibelii")
            this.addToCartState (this.item)
            this.getItem()
        }
    },
}
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
}
.cardContainer{
    width:100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border-radius: 2px;
}

.cardImg img{
    width:100%;
    height:auto;
    max-height: 300px;
    padding: 0.5px;
}
.cardTitle{
    font-size: 10px;
}
.cardBody{
    font-size: 8px;
}
.divider{
    width:100%;
    background-color: rgb(29, 39, 29, 0.5);
    margin: 0;
    padding: 0;
    height: 0.5px;
}

.button-orange {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding :0;
    line-height: 30px;
    width: 80%;
    border-radius: 5px;
    margin:3px;
    margin-top:5px;
}
</style>
