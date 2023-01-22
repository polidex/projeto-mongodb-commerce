db.produtos.find({ nome: { $nin: ["Big Mac", "McChicken"] } },
  { _id: 0, nome: 1, curtidas: true, vendidos: true });