require('dotenv').config({});
const app = require('express')();
const bodyParser = require('body-parser');
const mainRouter = require('./src/routes');
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', mainRouter);