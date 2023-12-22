// console.log("Hi! Learning to deploy backend code....") 


// Creating server using express

require('dotenv').config()
const express=require('express')

const app=express()

const port=4000 // Port where you want the server to listen

app.get('/', (req,res) => {
    res.send('Hello World...')
})

app.get('/login', (req,res) => res.send('<h1>Please Login </h1'))

app.listen(process.env.PORT, () =>{ // Here we are returning a callback
    console.log(`Listening on port ${port}.`)
})