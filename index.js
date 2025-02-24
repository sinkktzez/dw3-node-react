import express from "express";
const app = express();

// Configuração do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rota Principal
app.get("/", (req, res) => {
//  res.send("API iniciado com sucesso!");
const games = [
    {
        tittle: "game 1",
        year: 2020,
        platform: "PC",
        price: 20
    },
    {
        tittle: "game 2",
        year: 2024,
        platform: "XBOX SERIES X",
        price: 200
    }
];
res.json(games);
});


// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
