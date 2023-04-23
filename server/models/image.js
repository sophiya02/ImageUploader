const mongoose = require('mongoose');

let imageSchema = new mongoose.Schema({
  cloudinary_id:{
    type: String,
    required: true
  },
  url:{
    type:String,
    required: true
  }
})
module.exports = mongoose.model('Image', imageSchema);
