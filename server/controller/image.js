const cloudinary = require('../cloudinary/cloudinary');
const Image= require('../models/image');
const uploadImage = async(req, res)=>{
    // console.log("req", req);
    // console.log('uploadImage')
    // res.json({msg: "image uploader"})
    // console.log('req', req);
    if(!req.file) {
      console.log("no file is available");
      return res.send({
        success: false
      })
    } else {
      // console.log('file is available');
      // console.log('cloudinary', cloudinary);
      const result = await cloudinary.uploader.upload(req.file.path);
      // console.log('result',result);
      // const uploadedImageUrl= `${req.protocol}://${req.hostname}:3000/uploads/${req.file.filename}`;
      // const filename= `${req.file.filename}`;
      // res.json({filename})
      const image = await Image.create({cloudinary_id: result.public_id, url: result.secure_url});
      // console.log(image);
      res.json({image})

    }
}

module.exports={
  uploadImage
}
