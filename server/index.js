const express= require('express');
const multer = require('multer');
const cors= require('cors');
const bodyParser = require('body-parser');
const PATH = '../src/assets/images'
let storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, PATH)
  },
  filename: (req, file, cb) =>{
    cb(null, file.fieldname + '_' + Date.now())
  }
});

let upload = multer({
  storage: storage
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.get('/', (req, res)=>{
  res.end('File Catcher');
})
// app.get('/api', (req, res)=>{
//   res.end('File Catcher');
// })
app.post('/api/v1/image', upload.single('image'), (req, res)=>{
  // console.log("req", req);
  if(!req.file) {
    console.log("no file is available");
    return res.send({
      success: false
    })
  } else {
    console.log('file is available');
    // const uploadedImageUrl= `${req.protocol}://${req.hostname}:3000/uploads/${req.file.filename}`;
    const filename= `${req.file.filename}`;
    res.json({filename})
  }
})

const server = app.listen(3000, ()=>{
  console.log('connected to port 3000...')
})

// app.use((req, res, next) =>{
//   next(createError(404));
// })

// app.use((err, req, res, next) =>{
//   console.error(err.message);
//   if(!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });










