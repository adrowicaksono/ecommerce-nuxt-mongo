<template>
    <div class="search-container">
        <div class="search-banner">
            <button class="button-orange"><i class="icon-magnifier"></i></button>
            <input type="text">
        </div>
        <ul>
            <li><a href="#!">abc</a></li>
            <li><a href="#!">abc</a></li>
            <li><a href="#!">abc</a></li>
        </ul>
    </div>
</template>

<style scoped>


*{
    margin: 0;
    padding: 0;
}

.button-orange {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
}

.search-container{
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:100%
}
.search-banner{
    margin: auto;
    align-self: center;
    margin-bottom: 2.5px;
    margin-top: 8px;
    width:75%
}

.search-banner input{
    line-height: 30px;
    width: 75%;
    border:none;
}

.search-banner button{
    line-height: 30px;
    width: 10%;
}

.search-container ul{
    margin-top:6px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    list-style: none;
    width:100%;
    background-color:  rgb(5, 110, 110);
    
}

.search-container ul li a{
    color:beige;
    font-size:12px;
    text-decoration-line: none;
}

@media(max-width: 786px) {
    .search-banner{
        margin: auto;
        align-self: center;
        margin-bottom: 0.2px;
        margin-top: 2px;
    }
    .search-container{
        padding: 1px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .search-banner input{
        line-height: 30px;
        width: 80%;
        border:none;
    }
    .search-banner button{
        line-height: 30px;
        width: 20%;
    }

    .search-container ul li{
        padding:1px;
        font-size: 13px;
    }

    .search-container ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-self: center;
        list-style: none;
        width:100%;
        background-color:  rgb(5, 110, 110);
        margin-top: 3.5px;
    }


}




</style>
