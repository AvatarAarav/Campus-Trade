import express from 'express';   //module to make requests
import apiRouter from './Router/apiRouter.js'
import bodyParser from 'body-parser';   //module to read the body of post request
import createTable from './db/create.js';

const app = express();  //function to handle requests , app is an object to handle requests
import { dirname } from 'path';  //function to get directory name
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url)); //saving the directory

app.use(bodyParser.urlencoded({extended:false}));//decoding the data in body
app.use(bodyParser.json()) //for post requests //decoding the data in body
app.set('view engine', 'ejs');   //setting tmplating engine
app.set('views', __dirname+'/views'); //setting  the folder to look for .ejs files
app.use(express.static('./views')); //making views folder public


app.use('/api',apiRouter)  // calling /api calls different from different file
app.get('/', (req, res) => {
  res.render("index",{user:undefined}) //rendering the first request
})

var server = app.listen(3000, function () { //starting the server
  createTable()
  console.log('listening to port 3000')
});