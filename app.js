const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const bodyparser = require('body-parser')
var request = require('request')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(__dirname + '/public'));

app.get('/results',(req,res)=>{
    var query = req.query.search
    console.log(query)
request('https://api.themoviedb.org/3/search/movie?api_key=73c807ca58d4a7afa37e21cb44295dd1&query='+query,(error,response,body)=>{
    if(error)
    {
        console.log(error)
    }
    var data = JSON.parse(body)
    res.render("movies",{data:data,  searchquery:query})
});

})

app.get('/search',(req,res)=>{
    res.render("form")
    })


app.listen(4000,()=>{
    console.log("listening to port 3000")
})

