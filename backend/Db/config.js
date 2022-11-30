const mongoose = require('mongoose')
require('dotenv').config({path:"local.env"})
mongoose.connect(process.env.SERVER).then(()=>{
    console.log('server Connected Successfully')
})
module.exports = mongoose;