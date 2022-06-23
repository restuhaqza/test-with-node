const mongoose = require('mongoose')

async function connect(){
    return mongoose.connect("mongodb://root:passw0rd@localhost:27017/test_db?authSource=admin")
}

async function clean(){
    return mongoose.connection.db.dropDatabase()
}

module.exports = { connect, clean }