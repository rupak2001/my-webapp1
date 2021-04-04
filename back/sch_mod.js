const mongoose = require('mongoose');

const sc = mongoose.Schema({
    name:String
})

const mod = new mongoose.model("mod",sc);

module.exports = mod;