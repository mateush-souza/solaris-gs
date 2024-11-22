import Image from "next/image";

export default function Cards() {
  const participants = [
    {
      name: "Cauan Aranega S Passos",
      rm: "RM555466",
      imageSrc: "/images/members/cauan.png",
      github: "https://github.com/cashot01",
      linkedin: "https://www.linkedin.com/in/cauan-aranega/",
    },
    {
      name: "Mateus Henrique de Souza",
      rm: "RM558424",
      imageSrc: "/images/members/mateus.png",
      github: "https://github.com/mateush-souza",
      linkedin: "https://www.linkedin.com/in/mateus-henrique/",
    },
    {
      name: "Lucas de Assis Fialho",
      rm: "RM557884",
      imageSrc: "/images/members/lucas.png",
      github: "https://github.com/lucasdafialho",
      linkedin: "https://www.linkedin.com/in/lucas-assis/",
    },
  ];

  return (
    <section className="bg-black w-full pt-[10vh] md:pt-[3vh] text-center px-8 py-12">
      <div className="text-white min-h-screen flex flex-col items-center pt-[150px]">
        <h2 className="text-3xl font-light">Participantes</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Estamos muito contentes em estar fazendo parte dessa iniciativa
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
          {participants.map((participant) => (
            <div key={participant.rm} className="text-center">
              <Image
                src={participant.imageSrc}
                alt={participant.name}
                width={250}
                height={250}
                className="flex align-center justify-center"
              />
              <p className="mt-4 font-regular text-center">{participant.name}</p>
              <p className="text-gray-500">{participant.rm}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={participant.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline bg-gradientStart p-2 rounded-md"
                >
                  GitHub
                </a>
                <a
                  href={participant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline bg-gradientEnd p-2 rounded-md"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
