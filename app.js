const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const indexRouter = require("./Routes/indexRouter");


const app = express();
dotenv.config({ path:'./.env' });

app.use(logger("combined"));


app.use('/', indexRouter); 


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

