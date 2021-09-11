const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando o template engine
server.set('view engine', 'ejs')

// configura e muda a localização da pasta view 
server.set('views', path.join(__dirname, 'views'))

// Habilita os arquivos da pasta public
server.use(express.static("public"))

// 
server.use(routes)

server.listen(3000, () => console.log("rodando"))