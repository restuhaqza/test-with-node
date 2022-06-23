const container = require('./app/container')

const run = async()=>{
    const app = await container.load()

    app.listen("3000", ()=>{
        console.log("server started on port 3000")
    })
}

run()