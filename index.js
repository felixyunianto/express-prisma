require('dotenv').config({});
const app = require('express')();
const bodyParser = require('body-parser');
const mainRouter = require('./src/routes');

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', mainRouter);