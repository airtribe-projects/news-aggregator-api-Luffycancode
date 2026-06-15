const express = require('express');
const app = express();
const port=process.env.PORT;
const userroute=require("./routes/userroute")
const mongoose=require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/News_aggregator'; 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(['/','/home'],userroute)
app.use(['/register','/users/signup'],userroute)
app.use(['/login','/users/login'],userroute)
app.use('/users',userroute)
app.use('/v1',userroute)
app.use('/createnewuser',userroute)


async function connectDB() {
    try {
            await mongoose.connect(mongoURI)
            console.log('Successfully connected to MongoDB.');
    } catch (error) {
            console.error('Database connection failed:', error.message);
    }

}

connectDB()

module.exports = app;