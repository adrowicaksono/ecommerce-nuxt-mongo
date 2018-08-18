const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itemschema = new Schema({
  name  :  String,
  img   : String,
  alt   :   String,
  category: String,
  price: Number,
  views: Number,
}, {
    timestamps : true
});

const Item = mongoose.model('Item', Itemschema);

module.exports = Item

