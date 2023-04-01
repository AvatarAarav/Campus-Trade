import express from 'express';   //module to make requests
import apiRouter from './Router/apiRouter.js'
import bodyParser from 'body-parser';   //module to read the body of post request
import mongoose from 'mongoose';
const app = express();  //function to handle requests , app is an object to handle requests
import { dirname } from 'path';  //function to get directory name
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url)); //saving the directory name

app.use(bodyParser.urlencoded({extended:false}));//decoding the data in body
app.use(bodyParser.json()) //for post requests //decoding the data in body
app.set('view engine', 'ejs');   //setting tmplating engine
app.set('views', __dirname+'/views'); //setting  the folder to look for .ejs files
app.use(express.static('./views')); //making views folder public


app.use('/api',apiRouter)  // calling /api calls different from different file
app.get('/', (req, res) => {
  res.render("index",{user:undefined}) //rendering the first request
})

const PORT=3000
mongoose.connect("mongodb://127.0.0.1/CampusTradeDB")
        .then(() => {
                app.listen(PORT, () => {
                        console.log(`Server is listening at port ${PORT}`)
                })
        })
        .catch((err) => { console.log(`${err} !!! Can't Connect !!!`) })
