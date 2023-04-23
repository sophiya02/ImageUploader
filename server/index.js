const express= require('express');

const cors= require('cors');
const bodyParser = require('body-parser');
const imageRouter = require('./routes/image')
const connect = require('./db/connect')
require('dotenv').config();

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
app.use('/api/v1/image', imageRouter)
const PORT= process.env.port || 3000;
const start = async () =>{
  try{
    await connect(process.env.MONGO_URI);
    app.listen(PORT, ()=>{
      console.log(`app listening on port ${PORT}`)
    })
  }
  catch(err){
    console.log(`unable to listen on ${PORT}`);
  }
}

start();









