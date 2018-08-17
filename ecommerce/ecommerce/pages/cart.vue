<template>
    <div class="cartContainer" v-if="!empty">
        <div class="itemlist"  >
            <div class="detail">
                <ListCart v-for="(product, i) in cartsCollection"
                v-bind:key="{i}" 
                v-bind:product="product"
                />
            </div>
        </div>
        <div class="cartInfo">
            <p style="color:black">Ringkasan Pesanan</p>
            <label>
                <p>Sub total ({{getTotalItem}})</p> 
                <h4><strong>{{getPrice}}</strong></h4>
            </label>
            <button class="button-checkout" @click="checkout"> Checkout </button>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import ListCart from '~/components/ListCart.vue'
export default {
    layout:'admin',
    components :{
        ListCart,
    },
    data () {
        return {
            cartsCollection : [],
            empty:false,
        }
    },
    mounted (){
        this.cartsCollection = this.getCartsCollection
    },
    methods:{
        ...mapActions([
            'emptyCartsState'
        ]),
        checkout () {
            this.empty = true;
            this.emptyCartsState()
        }

    },
    computed:{
        ...mapState([
            'carts'
        ]),
        getCartsCollection () {
            let arrCartsCollection = []
            
            for(let i in this.carts){
                arrCartsCollection.push(this.carts[i])
            }
            return arrCartsCollection
        },
        getTotalItem () {
            let count = 0
            for(let i in this.carts){
                count += this.carts[i].count
            }
            return count
        },
        getPrice () {
            let price = 0
            for(let i in this.carts){
                price += this.carts[i].total
            }
            return 'Rp' + price.toLocaleString() + ',-'
        }
    }

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.cartContainer{
    margin-top: 2px;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* padding: 10px; */
}

.itemlist{
    margin-top: 5px;
    width: 66%;
    height: auto;
   
    /* border: 0.5px solid rgb(2, 94, 94); */
    margin-right:1%;
    margin-left:3%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;

}

.cartInfo{
    width: 26%;
    /* height: auto; */
    background:white;
    margin-left: 1%;
    margin-right: 3%;
    margin-top: 5px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-size: 15px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.cartInfo p{
    color: rgb(105, 105, 105);
}

.cartInfo label{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px 
}

.button-checkout {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    border-radius: 2px;
    text-align: center;
    text-decoration: none;
    width: 100%;
    align-self: flex-end;
    line-height: 50px;
}

</style>







