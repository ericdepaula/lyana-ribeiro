import { motion } from "framer-motion";

const services = [
  {
    title: "Massagem Relaxante Terapêutica",
    description:
      "Permita-se uma pausa merecida. Com toques suaves e profundos, esta massagem alivia o estresse, reduz a ansiedade e promove um relaxamento completo do corpo e da mente. Uma experiência de cuidado e bem-estar.",
    image:
      "https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-massagem-relaxante.webp",
  },
  {
    title: "Drenagem Linfática Manual",
    description:
      "Leveza que se sente no corpo e na alma. Essa técnica delicada estimula o sistema linfático, ajudando a eliminar toxinas, reduzir o inchaço e melhorar a circulação. Ideal para quem busca equilíbrio e bem-estar.",
    image:
      "https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-drenagem-linfatica.webp",
  },
  {
    title: "Termoterapia com Pedras Quentes",
    description:
      "Aqueça seu corpo e acalme sua mente. As pedras aquecidas são colocadas em pontos estratégicos para aliviar tensões, dores musculares e promover uma sensação profunda de conforto e renovação.",
    image:
      "https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-termoterapia.webp",
  },
  {
    title: "Escalda-pés Revitalizante",
    description:
      "Um carinho para os seus pés e para o seu dia. Essa técnica combina água morna, sais e ervas aromáticas para aliviar o cansaço, ativar a circulação e proporcionar um momento de relaxamento genuíno.",
    image:
      "https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-escalda-pes.webp",
  },
  {
    title: "Ventosaterapia",
    description:
      "Uma técnica milenar para renovar suas energias. A ventosaterapia ajuda a aliviar dores musculares, melhorar a circulação sanguínea e liberar tensões acumuladas, promovendo equilíbrio e bem-estar.",
    image:
      "https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-ventosa.webp",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-[#FDF8F4] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-[#3B2E2A] text-center mb-16"
        >
          Serviços
        </motion.h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-3xl font-serif text-[#3B2E2A] mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-[#3B2E2A] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
