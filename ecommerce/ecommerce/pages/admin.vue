<template>
    <div class="adminContainer">
        <div class="form">
            <h1>Admin's Page</h1>
            <div class="formItem">
                <h6 style="color:green" v-if="isSuccess">item was added</h6 >
                <h6 style="color:red" v-else>{{error}}</h6 >
                <input type="file" name="" id=""  v-on:change="handleFileUpload($event)">
                <button @click="submitFile()" class="button-orange">Submit</button>
            </div>
            <label for="" class="formItem"> url image
                <input type="text" disabled="disabled" v-model="img" placeholder="generated from your image link ">
            </label>
            <label for="" class="formItem"> Name
                <input type="ca" v-model="name" placeholder="note for your picture">
            </label>
            <label for="" class="formItem"> Description
                <input type="ca" v-model="alt" placeholder="note for your picture">
            </label>
            <label for="" class="formItem"> Category
                <input type="ca" v-model="category" placeholder="category">
            </label>
            <label for="" class="formItem"> Price
                <input type="ca" v-model="price" placeholder="price">
            </label>
            <br>
            <div class="button-group">
                <button @click="additem" class="button-orange">Save</button>
                <button @click="additem" class="button-orange">Cancel</button>
            </div>
        </div>
        <img v-bind:src="img" alt="your image will be here" srcset="">        
    </div>
</template>

<script>
import axios from 'axios'


export default {
    layout:'admin',
    data () {
        return{
            file:'',
            img: '',
            name : '',
            category : '',
            price : '',
            alt : '',
            isSuccess : false,
            error : ''
        }
    },
    methods: {
        additem (){
            let data = {
                img : this.img,
                name : this.name,
                category : this.category,
                price : this.price,
                alt : this.alt
            }
            console.log(data)
            axios.post('http://localhost:4000/', data)
            .then(response =>{
                console.log("succesfully added item",response)
                this.file = ''
                this.img = ''
                this.name = ''
                this.category =''
                this.price =''
                this.alt = ''
                this.isSuccess = true
                
            })
            .catch(err => {
                console.log(err.message)
                this.isSuccess = false
                this.error = err.response.data.msg
            })
        },
         handleFileUpload : function(e){
            this.file = e.target.files[0]
        },
        submitFile:function(){
            let formData = new FormData()
            formData.append('image', this.file)
            console.log(formData)
            axios
            .post('https://imageuploader.adrowicaksono.xyz/upload', formData)
            .then(link=>{
                console.log(link.data.link)
                this.img = link.data.link
            })   
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

img{
    width:100%;
    max-width: 300px;
    height: 300px;
    min-height: 400px;
    border-style:dotted;
    border-color:rgba(185, 174, 174, 0.945);
    border-radius: 10px;
    margin: 40px; 
}
.adminContainer{
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: row;
}

h1{
    margin:auto;
}
.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.formItem{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 40px;
    margin-top: 2px;
    margin-bottom: 2px;
}

input{
    line-height: 20px;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
    border: 0.5px solid rgb(2, 94, 94);
    margin-left: -5px;
}

.button-orange {
    background-color: rgb(255, 166, 0);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding :0;
    line-height: 30px;
    width: 20%;
    border-radius: 5px;
    margin-top:3px;
}
.button-group{
    width:100%;
    display: flex;
    justify-content: space-around;
}


</style>
