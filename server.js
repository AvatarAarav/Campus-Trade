import express from 'express';
import apiRouter from './Router/apiRouter.js'
import bodyParser from 'body-parser';
import createTable from './db/create.js';
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()) //For checking api's with postman
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./views'));


app.use('/api',apiRouter)
app.get('/', (req, res) => {
  res.render("index")
})
app.get('/ad/:title', (req, res) => {

  const temp = ads.filter((item) => {
    return item.title == req.params.title;
  })
  var obj = temp[0];
  res.render('ad_details', obj)
})
var server = app.listen(3000, function () {
  createTable()
  console.log('listening to port 3000')
});