import { NextApiRequest, NextApiResponse } from "next";

let historico = [
  { id: 1, totalCO2: 222, placas: 4, area: 5, exposicao: 6 },
  { id: 2, totalCO2: 200, placas: 3, area: 4, exposicao: 5 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(historico);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    historico = historico.filter((item) => item.id !== Number(id));
    res.status(200).json({ message: "Item deletado com sucesso" });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
