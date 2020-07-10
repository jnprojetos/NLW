// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

// criar o objeto que irá realizar as operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

// exportar o banco de dados para ser utilizado em outro lugar
module.exports = db;

// utilizar o objeto de banco de dados, para nossa operações
//db.serialize(() => {
    // Criando a tabela places
  //  db.run(`
   //     CREATE TABLE IF NOT EXISTS places (
   //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
   //         name TEXT,
    //        adress TEXT,
    //        adress2 TEXT,
    //        state TEXT,
    //        city TEXT,
    //        items TEXT
     //   );
    
   // `);

    // inserir dados na tabela
   // const query = `
      //  INSERT INTO places (
      //      image,
      //      name,
      //      adress,
      //      adress2,
     //       state,
     //       city,
     //       items
    //    ) VALUES (?,?,?,?,?,?,?);
  //  `
  //  const values = [
        //"https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
       // "Colectoria",
        //"Guilherme Gemballa, Jardim América",
       // "N° 260",
       // "Santa Catarina",
       // "Rio do Sul",
       // "Resíduos Eletrônicos, Lâmpadas"
    //];

   // function afterInsertData(err) {
     //   if(err) {
     //       return console.log(err);
     //   }

     //   console.log("Cadastro Realizado com Sucesso");
    //    console.log(this);
    //}

    //db.run(query, values, afterInsertData);

    // consultar os dados da tabela
    //db.all(`SELECT * FROM  places`,  function(err, rows) {
    //    if(err) {
     //       return console.log(err);
    //    }
    //    console.log("Relação dos registros encontrados");
    //    console.log(rows);
    //})

    // deletar registros da tabela
   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //    if(err) {
    //        return console.log(err);
   //     }
    //    console.log("Registro deletado com sucesso");
   // });
//});