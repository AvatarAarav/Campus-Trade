import express from 'express';
import { getAllProducts } from './db/DB_Functions.js';
import apiRouter from './Router/apiRouter.js'
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./views'));

const ads =await getAllProducts();

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
  console.log('listening to port 3000')
});