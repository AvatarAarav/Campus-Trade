import express from 'express';
import apiRouter from './Router/apiRouter.js'
import bodyParser from 'body-parser';
import createTable from './db/create.js';

const app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json()) //for post requests
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static('./views'));


app.use('/api',apiRouter)
app.get('/', (req, res) => {
  res.render("index",{user:undefined})
})
app.get('/ad/:title', (req, res) => {

  const temp = ads.filter((item) => {
    return item.title == req.params.title;
  })
  var obj = temp[0];
  res.render('ad_details', obj)
})
app.get('/user/:id',(req,res)=>{
  const id=req.params.id;
  // res.render()
})
var server = app.listen(3000, function () {
  createTable()
  console.log('listening to port 3000')
});