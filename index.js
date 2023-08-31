
import dotenv from "dotenv";
import express from "express";
import { selectUsuarios, selectUsuario, insertUsuario } from "./bd.js";
app.use(express.json());

dotenv.config();

const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Eliarito Junio", 
  });
});


app.post("/usuario", async (req, res) => {
  console.log("Rota POST /usuario solicitada");
  try {
    await insertUsuario(req.body);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }

  console.log("Rota GET/usuarios solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
