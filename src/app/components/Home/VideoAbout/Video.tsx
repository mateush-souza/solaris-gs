import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Video = () => {
    return (
        <div className="bg-black text-white h-auto flex items-center justify-center relative overflow-hidden px-4 sm:px-8 lg:px-12 py-16 space-y-16 pb-[150px]">
            <div className="w-full max-w-8xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-12 px-2 sm:px-6 lg:px-12">
                <div className="flex flex-col items-end space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-right max-w-xs sm:max-w-sm lg:max-w-md">
                        No vídeo ao lado explicamos como usar a calculadora e suas vantagens
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-[90%] sm:w-[80%] lg:w-[600px] aspect-video bg-gray-800 rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 w-full flex justify-start space-x-2 p-3">
                            <span className="w-3 sm:w-4 lg:w-4 h-3 sm:h-4 lg:h-4 bg-red-500 rounded-full"></span>
                            <span className="w-3 sm:w-4 lg:w-4 h-3 sm:h-4 lg:h-4 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 sm:w-4 lg:w-4 h-3 sm:h-4 lg:h-4 bg-green-500 rounded-full"></span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                        <iframe width="520" height="250" src="https://www.youtube.com/embed/wxWrCoTfYIc?si=4msY9XIPoDz7NUbu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md">
                        Conheça o projeto e mergulhe fundo em um planeta mais limpo!
                    </p>
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
        </div>
    );
};

export default Video;
