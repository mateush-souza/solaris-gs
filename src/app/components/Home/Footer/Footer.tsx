import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const Footer = () => {
  // Dados das seções do footer
  const sections = [
    {
      title: 'Institucional',
      links: [
        'Sobre Nós',
        'Nossa Missão',
        'Valores e Compromisso',
        'Contato',
      ],
    },
    {
      title: 'Apoie o Projeto',
      links: [
        'Faça Parte da Comunidade',
        'Ajude a Divulgar',
        'Conheça o time',
        'Seja um Colaborador',
      ],
    },
    {
      title: 'Recursos',
      links: [
        'Blog de Sustentabilidade',
        'FAQ - Perguntas Frequentes',
        'Termos de Uso',
        'Política de Privacidade',
      ],
    },
  ];

  // Dados das redes sociais
  const socialIcons = [
    { name: 'Instagram', position: '0 0' },
    { name: 'WhatsApp', position: '-32px 0' },
    { name: 'Facebook', position: '-64px 0' },
  ];

  return (
    <footer className="bg-supportBlack text-gray-300 py-10 px-5">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-semibold mb-4">Conheça nosso código</h4>
          <Link href={'https://github.com/mateush-souza/solaris-gs'}>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('/images/icones/GitHub.svg')",
                  backgroundPosition: icon.position,
                }}
                aria-label={icon.name}
              ></div>
            ))}
          </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
