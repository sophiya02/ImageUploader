const cloudinary= require('cloudinary').v2;
cloudinary.config({
  // cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  // api_key:process.env.API_KEY,
  // api_secret:process.env.API_SECRET
  cloud_name: 'dqbddiy4p',
  api_key: '967698582128398',
  api_secret: 'YoFVyO1-YM0aVuIc419v7dEmHWg'
})

module.exports = cloudinary;
