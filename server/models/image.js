const mongoose = require('mongoose');

let imageSchema = new Schema({
  img:{
    type: Array
  }
})
module.exports = mongoose.model('Image', imageSchema);
