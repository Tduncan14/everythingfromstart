import express from "express";
// import {createServer} from "http";


const app = express()


// const server = createServer(app)


app.listen(8000,() => {

    console.log("Our server is running !")
})