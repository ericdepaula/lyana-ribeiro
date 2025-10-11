import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-[#00695C] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif text-[#FDF8F4] mb-4"
          >
            Permita-se uma pausa para se reconectar com você mesma.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#FDF8F4] mb-8"
          >
            Sua jornada de bem-estar começa com um toque.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="https://wa.me/5513982009366"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FBC02D] hover:bg-[#F9A825] text-[#3B2E2A] px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-xl font-medium"
          >
            Agende seu momento de paz
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
