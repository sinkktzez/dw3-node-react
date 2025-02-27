import express from "express";
import mongoose from "mongoose";
import Games from "./models/Games.js";
const app = express();

// Importando as rotas (endpoints) de Games
import gameRoutes from "./routes/gameRoutes.js";

// Configuração do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);

// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

// Rota Principal
app.get("/", (req, res) => {
  //  res.send("API iniciado com sucesso!");
  const games = [
    {
      tittle: "game 1",
      year: 2020,
      platform: "PC",
      price: 20,
    },
    {
      tittle: "game 2",
      year: 2024,
      platform: "XBOX SERIES X",
      price: 200,
    },
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
