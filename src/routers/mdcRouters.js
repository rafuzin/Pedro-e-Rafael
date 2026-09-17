import { Router } from "express";
import { materialServices } from '../services/mdcServices.js';

export const materialRouter = Router();

//SELECT
materialRouter.get("/material", async (req, res) => {
  try {
    const materiais = await materialServices.listarMateriais()
    res.json(materiais)
  }catch (error) {
    console.error(error);
  }
});
//SELECT ÚNICO
materialRouter.get("/material/:id", async (req, res) => {
  try {
    const materiais = await materialServices.buscarMateriaisPorId(req.params.id_material)
    res.json(materiais)
  }catch (error) {
    console.error(error);
  }
});
//INSERT
materialRouter.post("/material", async (req, res) => {
  try {
    const materiais = await materialServices.criarMaterial({
      nome: "Betoneira",
      tipo: "Ferramenta",
      disponibilidade: "Disponível",
      preco_kg: 150.99
    })
    res.json(materiais)
  }catch (error) {
    console.error(error);
  }
});
//UPDATE DISPONIVEL
materialRouter.patch("/material/:id/disponivel", async (req, res) => {
  try {
    const materiais = await materialServices.disponivel(req.params.id_material, req.body.disponibilidade)
    res.json(materiais)
  }catch (error) {
    console.error(error);
  }
});
//UPDATE INDISPONIVEL
materialRouter.patch("/material/:id/indisponivel", async (req, res) => {
  try {
    const materiais = await materialServices.indisponivel(req.params.id_material, req.body.disponibilidade)
    res.json(materiais)
  }catch (error) {
    console.error(error);
  }
});