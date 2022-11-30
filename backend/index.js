let express = require('express');
let app = express();
let cors = require('cors')
app.use(express.json())
app.use(cors());
require('dotenv').config({path:"local.env"});
require("./Db/config");

// Routes
app.use('/user',require('./routes/userRotes'));
app.use('/note',require('./routes/notesRoutes.js'));

// ======> just to understand how to .toSting() works (which we using in Upadte Note Function)
// const obj = new Object ("Deep")
// console.log(obj.toString(),obj)

app.listen(process.env.PORT)