import React from "react";
import Image from "next/image";

const LearnMore = () => {
  return (
    <section id="about-us" className="w-full h-auto bg-black text-white flex flex-col md:flex-row items-center justify-center px-8 py-16 space-y-8 md:space-y-0 md:space-x-8 pb-[150px] pt-[150px]">
      <div className="relative">
        <Image
          src="/images/home-img.png"
          alt="Gráfico mostrando eficiência de energia"
          width={550}
          height={600}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-2 right-2">
          <div className="relative group">
            <div className="bg-white text-black text-xs font-bold p-1 rounded-full cursor-pointer w-6 h-6 flex items-center justify-center">
              ?
            </div>
            <div className="absolute hidden group-hover:block bg-gray-900 text-xs text-white p-[5px] rounded-lg shadow-lg top-8 right-3 min-w-[200px]">
              Esta imagem mostra o impacto das energias renováveis.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md text-center md:text-left relative">
        <p className="text-lg leading-relaxed">
          Faça cálculos realistas para descobrir quanto você contribui para a
          diminuição de CO2 usando placas solares. O meio ambiente vem em
          primeiro lugar!
        </p>
        <div className="flex justify-center md:justify-start mt-4 md:mt-0">
          <Image
            src="/images/icones/arrow.svg"
            width={24}
            height={28}
            alt="Seta"
            className="w-8 h-8 md:w-9 md:h-14"
          />
        </div>
        <div className="mt-4 border-b-2 border-gradientEnd w-22"></div>
      </div>
    </section>
  );
};

export default LearnMore;
