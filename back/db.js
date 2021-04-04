const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:rups1957@eg1.5ifzv.mongodb.net/db1?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log('connected to db'));

//mongodb+srv://admin:rups1957@eg1.5ifzv.mongodb.net/db1?retryWrites=true&w=majority
//mongodb://localhost:27017/db1