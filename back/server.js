const express = require('express');
const app = express();
require('./db.js')
const nms = require('./sch_mod');

const port = process.env.PORT || 8000;

app.use(express.json());

app.post('/new',async(req,res)=>{
    const whoami = new nms(req.body)
    await nms.insertMany([whoami])
    .then(()=>{
        console.log('sending successful')
    })
    .catch((e)=>{console.log(e)})
})

app.get('/new',async(req,res)=>{
    const fnd = await nms.find().select({name:1,_id:0})
    res.send(fnd)
})

app.listen(port,()=>{
    console.log('connected backend')
})