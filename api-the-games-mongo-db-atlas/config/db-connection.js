// Importando o mongoose
import mongoose from "mongoose";
// Usuário e senha do banco
const dbUser = "vitorFerro";
const dbPassword = "qQ1EcGMbW89D5W6D";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.og7j6o2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;