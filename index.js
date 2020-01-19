const app = require('express')();
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postRoute = require('./routes/post');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to database...'))
.catch(()=>console.log('Could not connect to database...'));

//Middleware
app.use(require('express').json());

app.use('/api/user', authRoute);
app.use('/ap/posts', postRoute);

app.listen(process.env.PORT_NUMBER, () => console.log(`Server up and running on port ${process.env.PORT_NUMBER}`));