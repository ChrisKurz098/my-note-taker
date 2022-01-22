const path = require('path');
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const router = require('express').Router();
const app = express();
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});




app.listen(PORT, () => {
    console.log(`server now on port ${PORT}`);
});