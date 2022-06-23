const database = require('../db')
const express = require('express')

const routes = require('../routes')

async function load() {
    await database.connect().
    then(()=>{
        console.log("database connected")
    })
    .catch((error)=>{
        console.log(error)
        console.log("database error")
    })

    const app = express()

    // body parser
    app.use(express.json())

    app.use(routes)
    

    return app
}

module.exports = {
    load
}