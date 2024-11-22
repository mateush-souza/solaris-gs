import React from 'react';
// import Image from 'next/image';

const Footer = () => {
  // Dados das seções do footer
  const sections = [
    {
      title: 'Institucional',
      links: [
        'Faça parte da comunidade',
        'Ajude os desenvolvedores',
        'Conheça o time',
        'Indique para amigos',
      ],
    },
    {
      title: 'Institucional',
      links: [
        'Faça parte da comunidade',
        'Ajude os desenvolvedores',
        'Conheça o time',
        'Indique para amigos',
      ],
    },
    {
      title: 'Institucional',
      links: [
        'Faça parte da comunidade',
        'Ajude os desenvolvedores',
        'Conheça o time',
        'Indique para amigos',
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
          <h4 className="text-white font-semibold mb-4">Conheça nossas redes sociais</h4>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('/images/social-icons.png')",
                  backgroundPosition: icon.position,
                }}
                aria-label={icon.name}
              ></div>
            ))}
          </div>
          {/* <div className="flex space-x-4">
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/images/googleplay.png"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
