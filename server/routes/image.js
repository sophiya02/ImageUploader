const express= require('express');
const { uploadImage, getImage } = require('../controller/image');
const router= express.Router();
const upload= require('../multer/multer')


router.route('/').post(upload.single('image'), uploadImage);

module.exports= router;
