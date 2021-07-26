// getting-started.js
const mongoose = require('mongoose');


const connectdb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/contactdb',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('successfully connceted')
    } catch (error) {
        console.log('cannot conncet '+ error)
    }
}

module.exports=connectdb