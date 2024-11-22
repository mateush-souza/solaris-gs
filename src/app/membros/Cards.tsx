import Image from "next/image";

export default function Cards() {
  const participants = [
    {
      name: "Cauan Aranega S Passos",
      rm: "RM555466",
      imageSrc: "/images/members/cauan.png",
    },
    {
      name: "Mateus Henrique de Souza",
      rm: "RM558424",
      imageSrc: "/images/members/mateus.png",
    },
    {
      name: "Lucas de Assis Fialho",
      rm: "RM557884",
      imageSrc: "/images/members/lucas.png",
    },
  ];
  return (
    <section className="bg-black w-full pt-[10vh] md:pt-[3vh] h-[100vh] text-center px-8 py-12">
      <div className="text-white min-h-screen flex flex-col items-center justify-center space-y-5">
        <h2 className="text-3xl font-light">Participantes</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Estamos muito contente em estar fazendo parte dessa iniciativa
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
