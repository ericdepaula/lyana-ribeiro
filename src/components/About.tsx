import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/lyana-about.webp"
              alt="Lyana Ribeiro - Massoterapeuta"
              className="rounded-2xl shadow-lg object-full w-full h-[400px] md:h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#3B2E2A] mb-6">
              Sobre mim
            </h2>
            <p className="text-lg text-[#3B2E2A] leading-relaxed">
              Sou Lyana Ribeiro, massoterapeuta especializada em terapias
              corporais e relaxamento. Minha missão é proporcionar alívio,
              equilíbrio e reconexão através do toque consciente e do cuidado
              personalizado.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
