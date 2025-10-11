import { motion } from 'framer-motion';

const services = [
  {
    title: 'Massagem Relaxante Terapêutica',
    description: 'Uma massagem profunda e suave, ideal para aliviar o estresse do dia a dia, reduzir a ansiedade e promover um relaxamento completo da mente e do corpo. Sinta a tranquilidade em cada toque.',
    image: 'https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-massagem-relaxante.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Drenagem Linfática Manual',
    description: 'Técnica especializada que estimula o sistema linfático, ajudando a eliminar toxinas, reduzir o inchaço e melhorar a circulação. Ideal para quem busca bem-estar e um corpo mais leve e saudável.',
    image: 'https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-drenagem-linfatica.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Termoterapia com Pedras Quentes',
    description: 'Sinta o poder do calor terapêutico. Esta técnica utiliza pedras aquecidas para relaxar a musculatura, aliviar dores crônicas e proporcionar uma sensação profunda de conforto e revitalização.',
    image: 'https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-termoterapia.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Escalda-pés Revitalizante',
    description: 'Um ritual de cuidado que começa pelos pés. Mergulhe em uma combinação de água morna, sais e ervas aromáticas para aliviar o cansaço, melhorar a circulação e preparar o corpo para um relaxamento profundo.',
    image: 'https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/service-escalda-pes.jpg?auto=compress&cs=tinysrgb&w=800'
  }
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
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
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
