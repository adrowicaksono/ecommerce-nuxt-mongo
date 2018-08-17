<template>
    <div class="nav">
        <div class="search">
            <button type="submit" class="button-orange"> <i class="icon-magnifier"></i></button>
            <input type="text" name="" id="">
        </div>
        <div class="tool">
            <button type="submit" class="button-orange"> <i class="icon-magnifier"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            isMobile:false,
        }
    },
    methods:{
        toggleMenu () {
            if(this.isMobile){
                this.isMobile=false    
            }else{
                this.isMobile=true
            }
        },
    }
}
</script>


<style scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content:space-between;
}

.search {
      line-height: 25px;
      margin: 15px 15px ;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 2px;
      align-self:flex-end;
      width:75%;
}
.tool{
    margin: 15px;
}
.search input{
     padding: 0;
     line-height: 30px;
     width: 75%;
     border: none;
}

.search button{
     margin: 0 ;  
     padding: 0;
     line-height: 30px;
     width: 10%;
}

.button-orange {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding :0;
}

/* @media(max-width: 1000px){
     .search input{
     padding: 0;
     line-height: 55px;
     width: 20%;
    }

    .search button{
        margin: 1px ;  
        padding: 0;
        line-height: 55px;
        width: 20%;
    }
} */

@media(max-width: 786px) {

    .nav{
        background:  rgb(2, 94, 94);
        display: flex;
        justify-content: flex-start;
        width:80%
    }

    .search {
        position: fixed;
        top: 0;
        margin-top: 10px;
        display:flex;
        width:70%
    }


    .search input{
     padding: 0;
     line-height: 30px;
     width: 85%;
     align-self: flex-start
    }

    .search button{
        margin: 0 ;  
        padding: 0;
        line-height: 20px;
        width: 15%;
    }
    
    .tool{
        visibility: hidden;
    }

    
}

</style>
