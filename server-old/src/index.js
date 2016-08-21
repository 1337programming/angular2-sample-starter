import {TodosSchema} from './todos-schema';
import {UserSchema} from './user-schema';
import {ProductSchema} from './product-schema';
import {graphql} from 'graphql';
import bodyParser from 'body-parser';
import express from 'express';

const {
  PORT = "8080"
} = process.env;

function AllowCrossDomain (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:9000');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

const app = express();
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(AllowCrossDomain);
app.listen(PORT, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(`Listening at localhost:${PORT}`);
});
app.post('/users', (req, res) => {
  console.log(req.body);
  const {query, vars} = req.body;
  graphql(UserSchema, query, null, vars).then(result => {
    console.log('Result', result);
    res.send(result);
  });
});

app.post('/products', (req, res) => {
  console.log(req.body);
  const {query, vars} = req.body;
  graphql(ProductSchema, query, null, vars).then(result => {
    console.log('Result', result);
    res.send(result);
  });
});

app.post('/todos', (req, res) => {
  console.log('Request', req.body);
  const {query, vars} = req.body;
  graphql(TodosSchema, query, null, vars).then(result => {
    console.log(new Date(), result);
    res.send(result);
  });
});


app.post('/test', (req, res) => {
  console.log(req.body.name);

  /*
  var obj = JSON.parse(req.body);
  console.log(obj.name);
  */
  res.send('Connected');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});


