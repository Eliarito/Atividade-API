
import dotenv from "dotenv";
import express from "express";
dotenv.config();
import routerUsuario from "./routes/usuario";

const app = express(); 
const port = 3000; 

app.use(express.json());
app.use(routerUsuario);
app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Eliarito Junio", 
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
