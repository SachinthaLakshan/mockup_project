require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoute = require('./routes/userRoute.js');
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

//connect
// mongoose.connect(
//   process.env.MONGO_URI,
//   {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log('DB conneted!!');
//   }
// );

app.use('/', UserRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
