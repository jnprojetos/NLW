const express = require("express");
const server = express();

// importando o banco de dados
const db = require("./database/db.js");

// configurar pasta publica
server.use(express.static("public"));

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

// configurar caminhos da aplicação
// pagina inicial
// req: Requisição
// res: Resposta

// Rota para o index
server.get("/" , (req, res) => {
   return res.render("index.html", {title: "Teste NUNJUCKS"});
});

// Rota para o create-ponint
server.get("/create-point" , (req, res) => {
    return res.render("create-point.html");
});

// Rota para o search
server.get("/search" , (req, res) => {

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM  places`,  function(err, rows) {
       if(err) {
            return console.log(err);
       }

       // variável para mostrar o total do registro encontrados dinamicamente
       const total = rows.length;

       return res.render("search-results.html", { places: rows, total });
    });
});


// Iniciar o servidor

server.listen(3000);
