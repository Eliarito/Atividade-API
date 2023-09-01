
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express(); 
const port = 3000; 

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Eliarito Junio", 
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
