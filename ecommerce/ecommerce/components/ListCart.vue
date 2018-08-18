<template>
    <div class="listCartContainer" v-if="!remove">
        <img v-bind:src="product.data.img" alt="" srcset="">
        <div class="itemDetail">
            <h3>{{product.data.name}}</h3>
            <p>{{product.data.alt}}</p>
        </div>
        <div class="itemPrice">
            <p>{{priceFormat}}</p>
        </div>
        <div class="itemAction">
            <button class="button-action" v-on:click="minus">-</button>
            <p>{{product.count}}</p>
            <button class="button-action" v-on:click="plus">+</button>
            <button class="button-action" v-on:click="trash"><i class="icon-trash"></i></button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:['product'],
    data () {
        return {
            remove : false
        }
    },
    methods : {
        ...mapActions([
            'addToCartState', 'minusToCartState','deleteItemOfCartState'
        ]),
        plus () {
        //    console.log(this.product.data, "================")
           this.addToCartState (this.product.data)
        },
        minus () {
            console.log(this.product.count)
            if(this.product.count > 0 ){
                this.minusToCartState (this.product.data)
            }
        },
        trash () {
            console.log(this.product.id)
            this.remove = true;
            this.deleteItemOfCartState(this.product.id)
        }
    },
    computed:{
        priceFormat () {
            return 'Rp' + this.product.total.toLocaleString() + ',-'
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.listCartContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 5px;
    margin-bottom: 5px;
    padding:2px;
    padding-top: 10px;
    background:white;
}
.itemDetail{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
    font-size: 10px;
    padding: 2px;
}
.itemPrice{
    width: 25%; 
    font-size: 13px;
    color:darkorange;
}
img{
    width: 10%;
    height: auto;
}

.itemAction{
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2px;
    padding-right: 8px;    
}

.button-action {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding :0;
    width:20px;
    height: auto;
    border-radius: 2px;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.itemAction p {
     border: 0.5px solid rgb(2, 94, 94);
     font-size: 10px;
     width:20px;
     text-align: center;
     padding: 2px;
}


</style>

