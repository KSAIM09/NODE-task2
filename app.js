require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./Routes/indexRouter'); 
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
