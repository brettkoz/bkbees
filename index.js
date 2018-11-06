const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const sales = require('./routes/api/sales');
const courses = require('./routes/api/courses');
const content = require('./routes/api/content');
const app = express();
const db = require('./config/database').mongoURI;
mongoose.connect(db)
    .then(() => {console.log('mongoose connected,bitch')})
    .catch((err) => {console.log('errors you stupid bitch' + err)});
app.get('/', (req,res) => res.send('really, fuck off, mate'));

const port = process.env.PORT || 3000;
// app.use('/api/content', content);
// app.use('/api/courses',courses);
// app.use('/api/sales', sales);
app.use('/api/users', users);
app.listen(port, () => { console.log(`Server Started On Port ${port}`)});