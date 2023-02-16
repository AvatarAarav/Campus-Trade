var express= require('express');
var path=require('path')
const app=express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./views'));


const ads = [
    {
      title: "Samsung Galaxy S21 Ultra",
      price: "$900",
      description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
      title: "Macbook Pro 16 inch",
      price: "$1500",
      description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
      title: "Bose QuietComfort 35 II",
      price: "$350",
      description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    }
  ];

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/ad/:title',(req,res)=>{
    
    const temp=ads.filter((item)=>{
        return item.title==req.params.title;
    })
    var obj=temp[0];
    res.render('ad_details',obj)
})
var server = app.listen(3000, function(){
    console.log('listening to port 3000')
});