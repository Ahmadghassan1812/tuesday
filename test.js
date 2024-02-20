const express = require('express')
var app= express();
app.get('/',function(req,res)
{
    res.send("start server")
})
app.get('/fact/:num',function(req,res)
{
    var fact =fact1(req.params.num)
   res.json(fact)
    
})
function fact1(n){
    let f=1
    for(let i=1;i<=n;i++)
    {
        f=f*i
    }
    return f;
}
app.get('/multi/:num',function(req,res)
{
    var multi =multi1(req.params.num)
    res.json(multi)
})
function multi1(n){
    let f=n

    let c =[]
    for(let i=1;i<=10;i++)
    {
        c.push(f*i)
    }
    return c;
}
app.get('/fib/:num',function(req,res)
{
    var fib = fib1(req.params.num)
    res.json(fib)
})
function fib1(n)
{
    let a=0
    const seq=[1,1]
    for(let i=2;i<=n;i++)
    {
        a= (i-1)+(i-2);
    }
    return a
}
app.get('/com/:num',function(req,res)
{
    
    var com = com1 (req.params.num)
    res.json(com)
})
function com1(n){
    let f=0
    for(let i=0;i<=n;i++)
    {
        f=f+i
    }
    return f;
}
app.get('/string/:ahmad',function(req,res)
{
    var string = string1 (req.params.num)
    res.json(string)
})
function string1(name){
    
}

var server=app.listen(9000,function()
{
    var host = server.address().address
    var port = server.address().port
})