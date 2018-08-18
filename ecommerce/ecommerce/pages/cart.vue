<template>
    <div class="cartContainer">
        <div class="itemlist"  >
            <ListCart v-for="(product, i) in cartsCollection"
            v-bind:key="{i}" 
            v-bind:product="product"
            />
        </div>
        <div class="cartInfo">

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
        }
    },
    mounted (){
        this.cartsCollection = this.getCartsCollection
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
    background:white;
    /* border: 0.5px solid rgb(2, 94, 94); */
    margin-right:1%;
    margin-left:3%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;

}

.cartInfo{
    width: 26%;
    height: auto;
    background:white;
    margin-left: 1%;
    margin-right: 3%;
    margin-top: 5px;
    border-radius: 2px;

}

</style>

