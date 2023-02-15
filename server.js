var express= require('express');
var path=require('path')
const app=express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./views'));
app.get('/',(req,res)=>{
    res.render("index")

})
var server = app.listen(3000, function(){
    console.log('listening to port 4000')
});