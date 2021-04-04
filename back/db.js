const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db1',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log('connected to db'));

