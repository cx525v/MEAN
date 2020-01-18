var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/myapp');
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb')
})

mongoose.connection.on('error', (error) => {
    if (error) {
        console.log('error connecting to mongodb')
    }
   
})

const port = 3000;
app.use(cors());
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);

app.get('/', (req, res) => {
      res.send('foobar');
});
app.listen(port, () => {
    console.log('server connected');
})