import express from "express";


const app = express();


const PORT = 3000;


function loggerMiddleware(req, res, next) {
    console.log('This is logger middle ware')
    

    next()
}

function secondMiddleware(req, res, next) {
    console.log(req.method)

    console.log(req.url)

    next()
}

//app.use(secondMiddleware)
//app.use(loggerMiddleware)

app.get('/user',loggerMiddleware,secondMiddleware,(req, res) => {

    console.log('This is main logics')
    res.json({
        message: 'This is user page'    
    })
})    

app.get('/about', (req, res) => {
    console.log('This is about page')

    res.json({
        message: 'This is about page'
    })
})

app.listen(PORT, () => {
  console.log('Server had started at port', PORT);
})