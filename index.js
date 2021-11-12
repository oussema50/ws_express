let date = new Date(); 
const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

let dayWeek = date.getDate();
let hour = date.getHours();

//use templat engine EJS
app.set('view engine','ejs')
app.set('views');

let services = {
    seo:{
        img:"https://www.eweb2pro.com/wp-content/uploads/2020/02/optimiser-le-seo.jpg",
        service:"seo"
    },
    webDisign:{
        img:"https://www.b2b.tn/file/2019/11/webdesign-mosaique-web.jpg",
        service:"web design"
    },
    webDevelpment:{
        img:"https://quedulourd.com/wp-content/uploads/2020/08/The-Complete-2020-PHP-Full-Stack-Web-Developer-Bootcamp-udemy-course-free-download-freetutorialsus.com_.jpg",
        service:"web development"
    }
}
app.use(express.static(path.join(__dirname,'assets')))
app.use(express.static(path.join(__dirname,'img')))

app.get('/',(req,res,next)=>{
    if(dayWeek === 0 || dayWeek === 6 || hour >= 17 || hour < 8 ){
        res.send("<h1> welcome The web application is only available during working hours(Monday to Friday,  from 9AM to 5PM)</h1>");
    }
    next();
},(req,res,next)=>{
    res.render('index')
});

app.get('/services',(req,res,next)=>{
    if(dayWeek === 0 || dayWeek === 6 || hour >= 17 || hour < 8 ){
        res.send("<h1> welcome The web application is only available during working hours(Monday to Friday,  from 9AM to 5PM)</h1>");
    }
    next();
},(req,res,next)=>{
    
    res.render('service',{services})
});
app.get('/contact',(req,res,next)=>{
    if(dayWeek === 0 || dayWeek === 6 || hour >= 17 || hour < 8 ){
        res.send("<h1> welcome The web application is only available during working hours(Monday to Friday,  from 9AM to 5PM)</h1>");
    }
    next();
},(req,res,next)=>{
    res.render('contact')
});

app.listen(port,()=>console.log('server run on port' + port));
  

 


