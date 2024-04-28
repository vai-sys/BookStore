



const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const bookRoute = require("./route/book.route");
const userRoute = require("./route/user.route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/bookStore';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB server');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});



app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// const express = require('express');
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const bookRoute=require("./route/book.route")
// const userRoute =require("./route/user.route");
//  const cors= require("cors");

// const app = express();
// app.use(cors());

// dotenv.config();
// const port = process.env.PORT || 3000;
// const MONGODB_URI =  'mongodb://localhost:27017/bookStore';

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('connected', () => {
//   console.log('Connected to MongoDB server');
// });
// db.on('error', (err) => {
//   console.error('Error in connection to MongoDB server:', err);
// });
// db.on('disconnected', () => {
//   console.log('Disconnected from MongoDB server');
// });

// app.get('/', (req, res) => {
//   console.log(`Server listening on port ${port}`);
//   res.send('Hello!');
// });

// app.use('/book',bookRoute);
// app.use('/user',userRoute);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

