const Item = require('../models/item')

const uploadItem = function (req, res) {
    console.log(req.body, "upload")
    if(req.body.name != '' && req.body.category  != '' && req.body.alt != '' && req.body.img != '' && req.body.price != ''){
        Item
        .create({
            name : req.body.name,
            img : req.body.img,
            alt : req.body.alt,
            category : req.body.category,
            price : req.body.price,
        })
        .then( response => {
            res.status(200).json({msg:"succesfully added item"})
        })
        .catch(response => {
            res.status(400).json({msg:"your data is not valid!"})
        })
    }else{
        res.status(400).json({msg:"your data is not valid!"})
    }
}

const getItem = function(req, res){
    Item
    .find()
    .then(response=>{
        console.log(response)
        res.status(200).json({data:response})
    })
    .catch(err => {
        console.log(err, "getItems error !")

        res.status(400).json({
            msg:err
        })
    })

}

const getCategory = function(req,res){
    console.log(req.query.category, 'query====================================')
    Item
    .find({
        category: req.query.category
    })
    .then(response => {
        console.log(response)
        res.status(200).json({data:response})
    })
    .catch(err => {
        console.log(err, "get categories error ! ")
        res.status(400).json({
            msg:err.message
        })
    })
}


module.exports = {
    uploadItem,
    getItem,
    getCategory
}