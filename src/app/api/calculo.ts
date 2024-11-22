import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { placas, area } = req.body;
    const grafico = [10, 20, 30, 40, 50, 60]; 
    res.status(200).json({ grafico });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
