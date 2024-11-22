"use client"
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Modal } from "@/app/components/Helper/Modal";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Calculator = () => {
  const [historico, setHistorico] = useState<any[]>([]);
  const [graficoData, setGraficoData] = useState<number[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [placas, setPlacas] = useState<number>(0);
  const [area, setArea] = useState<number>(0);
  const [exposicao, setExposicao] = useState<number>(0);

  const calcular = () => {
    const reducaoCO2 = placas * area * exposicao * 0.8;
    const novoHistorico = {
      id: Date.now(),
      totalCO2: reducaoCO2.toFixed(2),
      placas,
      area,
      exposicao,
    };

    const novoGrafico = [reducaoCO2, reducaoCO2 * 1.1, reducaoCO2 * 1.2, reducaoCO2 * 1.3, reducaoCO2 * 1.4, reducaoCO2 * 1.5];

    setHistorico([...historico, novoHistorico]);
    setGraficoData(novoGrafico);
  };

  const deletarItem = () => {
    if (deleteId) {
      setHistorico(historico.filter((item) => item.id !== deleteId));
      setShowDeleteModal(false);
      setShowSuccessModal(true);
    }
  };

  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Redução de CO₂ (Kg)",
        data: graficoData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Crescimento em Redução de CO₂",
      },
    },
  };

  return (
    <div className="pt-[150px] bg-black text-white min-h-screen flex flex-col items-center p-8">
      <Bar data={data} options={options} className="w-full max-w-4xl mb-8" />

      <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-4xl">
        <div className="flex flex-col">
          <label>Placas:</label>
          <input
            type="number"
            placeholder="Placas"
            className="flex-1 border p-2 rounded text-black"
            value={placas}
            onChange={(e) => setPlacas(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Area em m2</label>
          <input
            type="number"
            placeholder="Área"
            className="flex-1 border p-2 rounded text-black"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Exposição em horas p/dia</label>
          <input
            type="number"
            placeholder="Exposição"
            className="flex-1 border p-2 rounded text-black"
            value={exposicao}
            onChange={(e) => setExposicao(Number(e.target.value))}
          />
        </div>
        <button
          onClick={calcular}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
        >
          Calcular
        </button>
      </div>

      <h2 className="text-lg font-bold mb-4">Histórico de Cálculos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {historico.map((item) => (
          <div
            key={item.id}
            className="border border-gray-700 p-4 rounded flex flex-col items-start"
          >
            <p>Total de CO₂: {item.totalCO2} KG</p>
            <p>Placas: {item.placas}</p>
            <p>Área: {item.area}</p>
            <p>Exposição: {item.exposicao}</p>
            <div className="mt-2 flex gap-2">
              <button
                className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                onClick={() => {
                  setDeleteId(item.id);
                  setShowDeleteModal(true);
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <Modal
          title="Confirmar Exclusão"
          onConfirm={deletarItem}
          onCancel={() => setShowDeleteModal(false)}
          confirmText="Sim, excluir"
          cancelText="Cancelar"
        />
      )}

      {showSuccessModal && (
        <Modal
          title="Sucesso!"
          onConfirm={() => setShowSuccessModal(false)}
          confirmText="Fechar"
          content="O item foi deletado com sucesso."
        />
      )}
    </div>

  );
};

export default Calculator;
