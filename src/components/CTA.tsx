import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-[#D9A9AA] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif text-[#3B2E2A] mb-8"
          >
            Seu corpo fala. É hora de ouvir.
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://wa.me/5513982009366"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D9A977] hover:bg-[#F2D3D4] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-lg font-medium"
          >
            Agendar pelo WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
