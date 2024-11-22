import React from "react";
import Image from "next/image";

const Community = () => {
  const cards = [
    {
      id: 1,
      title: "Cálculos Rápidos e Confiáveis",
      description: "Obtenha resultados precisos em poucos segundos",
      icon: "/images/icones/time.svg",
    },
    {
      id: 2,
      title: "Calculadora Personalizada",
      description: "Preencha os dados e veja como seus painéis solares podem transformar o meio ambiente.",
      icon: "/images/icones/calculator.svg",
    },
    {
      id: 3,
      title: "Contribua para o Planeta",
      description: "Descubra como adotar energia solar pode reduzir emissões e criar um futuro mais verde.",
      icon: "/images/icones/globe.svg",
    },
  ];

  return (
    <div className="relative bg-black text-white py-10 pb-[200px]">
      <h2 className="text-center text-3xl font-light mb-12">
        Conecte-se e faça parte dessa comunidade
      </h2>

      {/* Linha central: visível apenas em telas médias ou maiores */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-5 bg-gradient-to-r from-cyan-500 to-green-500 z-0"></div>

      {/* Cards */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center text-center bg-gradient-to-b from-cyan-500 to-green-500 text-black p-4 rounded-lg shadow-lg w-52 min-h-[268px] z-10"
          >
            <div className="w-16 h-16 mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={86}
                height={86}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
