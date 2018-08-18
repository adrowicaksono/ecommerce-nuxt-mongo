var express = require('express');
var router = express.Router();
const controllerItem = require('../controllers/items')
/* GET home page. */
router.post('/', controllerItem.uploadItem)
      .get('/', controllerItem.getItem)

module.exports = router;
