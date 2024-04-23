// const express = require('express')
// const mongoose=require("mongoose")
// const dotenv=require("dotenv");
// const app = express()
// dotenv.config();
// const port =process.env.PORT || 3000; 

// const MongodbURL=process.env.MongodbURL

// try{
// mongoose.connect(MongodbURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
// console.log("Coonected to mongoDB");
// }catch(err){
// console.log("ERROR",err);
// }

// app.get('/', (req, res) => {
//   console.log(` listening on port ${port}`)
//   res.send('Hello !')
// })

// app.listen(port, () => {
//   console.log(` listening on port ${port}`)
// })

const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const bookRoute=require("./route/book.route")
 const cors= require("cors");

const app = express();
app.use(cors());

dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URI =  'mongodb://localhost:27017/bookStore';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
  console.error('Error in connection to MongoDB server:', err);
});
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

app.get('/', (req, res) => {
  console.log(`Server listening on port ${port}`);
  res.send('Hello!');
});

app.use('/book',bookRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

