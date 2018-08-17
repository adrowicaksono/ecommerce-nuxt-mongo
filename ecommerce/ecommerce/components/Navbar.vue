<template>
    <nav >
        <div v-bind:class="{menuIcon:true }"  v-on:click="toggleMenu">
            <a>menu</a>
        </div>
        <div class="logo">
                LOGO
        </div>
        <div class="menu">
                <ul v-bind:class="{showing: isMobile}">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>     
        </div>
    </nav>
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

.logo {
      line-height: 25px;
      position: fixed;
      float: left;
      margin: 16px 46px;
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: 2px;
}



nav ul {
      line-height: 25px;
      list-style: none;
      /* background: rgba(0, 0, 0, 0); */
      background:rgba(5, 110, 110, 0.308);
      overflow: hidden;
      color: #fff;
      padding: 0;
      text-align: right;
      margin: 0;
      padding-right: 40px;
      transition: 1s;
}

nav.black ul {
      background:rgba(5, 110, 110, 0.308);
}

nav ul li {
      display: inline-block;
      padding: 16px 40px;;
}

nav ul li a {
      text-decoration: none;
      color: #fff;
      font-size: 10px;
}



.menuIcon {
      line-height: 25px;
      width: 100%;
      background:rgb(2, 94, 94);
      text-align: right;
      box-sizing: border-box;
      padding: 15px 24px;
      cursor: pointer;
      color: #fff;
      display: none;
}



@media(max-width: 786px) {

      .logo {
            position: fixed;
            top: 0;
            margin-top: 16px;
      }

      nav ul {
            max-height: 0px;
            background:  rgba(5, 110, 110, 0.308);
            z-index: 100;
      }

      nav.black ul {
           background:  rgba(5, 110, 110, 0.308);

      }

      .showing {
            max-height: 34em;
            margin: 0;
            padding: 0;
            background:  rgb(2, 94, 94);
      }

      nav ul li {
            box-sizing: border-box;
            width: 100%;
            padding: 24px;
            text-align: center;
      }

      .menuIcon {
            display: block;
            background:  rgba(2, 94, 94) 
      }

      
}

</style>
