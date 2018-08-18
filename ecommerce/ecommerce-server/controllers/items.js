const Item = require('../models/item')

const uploadItem = function (req, res) {
    Item
    .create({
        name : req.body.name,
        url : req.body.url,
        alt : req.body.alt,
        category : req.body.category,
        price : req.body.price,
    })
    .then( response => {
        res.status(200).json({msg:"succesfully added item"})
    })
    .catch(response => {
        res.status(400).json({msg:"your request is not valid!"})
    })
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


module.exports = {
    uploadItem,
    getItem
}