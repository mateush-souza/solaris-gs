import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full pt-[10vh] md:pt-[3vh] h-screen bg-gradient-to-b from-black via-[#001e1d] to-[#009688] overflow-hidden relative">
      <div className="text-white min-h-screen flex flex-col items-center justify-center space-y-5">
        <p className="text-sm uppercase text-gray-400">
          lorem lorem lorem lorem lorem lorem
        </p>
        <h1 className="text-center text-4xl sm:text-6xl font-bold">
          Lorem Ipsum Lorem <br /> Ipsum Lorem Ipsum Lorem
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center space-x-2 border border-gray-400 rounded-lg px-4 py-2 text-sm max-w-xs max-h-12">
            <Image
              src="/images/icones/reciclagem.svg"
              width={20}
              height={24}
              alt="Reciclagem Ícone"
            />
            <span>Reduzindo a emissão CO2</span>
          </div>
          <div className="flex items-center space-x-2 border border-gray-400 rounded-lg px-4 py-2 text-sm max-w-xs max-h-12">
            <Image
              src="/images/icones/predios.svg"
              width={20}
              height={24}
              alt="Reciclagem Ícone"
            />
            <span>Incentivo da energia solar</span>
          </div>
          <div className="flex items-center space-x-2 border border-gray-400 rounded-lg px-4 py-2 text-sm max-w-xs max-h-12">
            <Image
              src="/images/icones/sustentabilidade.svg"
              width={20}
              height={24}
              alt="Reciclagem Ícone"
            />
            <span>Veja estatísticas no gráfico</span>
          </div>
        </div>
        <Link href={'/login'}>
          <button className="mt-8 bg-gradient-to-r from-gradientStart to-gradientEnd hover:from-gradientEnd hover:to-gradientStart px-6 py-3 text-xs sm:text-base font-medium rounded-full shadow-lg flex items-center">
            Quero usar a calculadora!
            <Image
              src="/images/icones/arrow.svg"
              width={22}
              height={24}
              alt="Seta Ícone"
              className="ml-2"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
