<template>
    <div class="containerLayoutAdmin">
        <header>
            <Navbar class="navbar"/>
        </header>
        <div class="contentAdmin">
            <section>
                <nuxt/>
            </section>
            <aside>

            </aside>
        </div>
        <footer>

        </footer>
    </div>
</template>
<script>
import Navbar from '~/components/Navbar'
export default {
    components:{
        Navbar
    },
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}

.containerLayoutAdmin{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
   
    
}

header{
    width: 102%;
    margin: 0;
    padding: 0;
    margin-top: -10px;
    padding-left: 10;
}

.navbar{
    background-color: rgb(2, 94, 94);
    width: 100%;
}

.contentAdmin{
    width:100%;
    padding-left:20px;
}

</style>

