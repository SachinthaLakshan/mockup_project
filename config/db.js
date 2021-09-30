const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log('MongoDB Connection Success 👍');
  } catch (error) {
    console.log(error);
    console.log('MongoDB Connection Failed 💥');
    process.exit(1);
  }
};

module.exports = connectDB;
