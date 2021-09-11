const express = require("express")
const routes = express.Router()

// caso ejs engine nao esteja instalado é assim que se cria uma rota
// const basePath = __dirname + "/view"
// routes.get("/", (request, response) => response.sendfile(basePath + "/index.html"))

routes.get('/', (req, res) => res.render("index"))
routes.get('/animes', (req, res) => res.render("animes"))
routes.get('/series', (req, res) => res.render("series"))
routes.get('/filmes', (req, res) => res.render("filmes"))

module.exports = routes