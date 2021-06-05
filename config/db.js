const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = ()=>{
    mongoose.connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology:true,
        useFindAndModify: false         //To avoid some warnings
    }).then(()=>console.log('MongoDB connected'))
    .catch(err=>{
        console.error(err.message,"aaa");
        process.exit(1);                //exit with failure
    });
};

module.exports = connectDB;