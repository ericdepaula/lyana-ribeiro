import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp} from 'react-icons/fa';
import { LuMapPin} from 'react-icons/lu';

const Contact = () => {
  return (
    <section id="contato" className="bg-[#FDF8F4] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-[#3B2E2A] text-center mb-16"
        >
          Entre em Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://instagram.com/lyanamasso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaInstagram size={48} className="text-[#D9A977]" />
            <h3 className="text-xl font-serif text-[#3B2E2A]">Instagram</h3>
            <p className="text-[#3B2E2A]">@lyanamasso</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://wa.me/5513982009366"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaWhatsapp size={48} className="text-[#D9A977]" />
            <h3 className="text-xl font-serif text-[#3B2E2A]">WhatsApp</h3>
            <p className="text-[#3B2E2A]">Entrar em contato</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://maps.app.goo.gl/ZeegX4BPXn2NMHFN8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg"
          >
            <LuMapPin size={48} className="text-[#D9A977]" />
            <h3 className="text-xl font-serif text-[#3B2E2A]">Localização</h3>
            <p className="text-[#3B2E2A]">Itanhaém, SP</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.551898118025!2d-46.78991912465492!3d-24.01166717849495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d21f3a53215c7b%3A0x9fe1c30b95f8c44b!2sR.%20Zeferino%20Soares%2C%2019%20-%20sala%2018%20-%20Centro%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1716312531037!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização - R. Zeferino Soares, n° 19 - Sala 18 - Centro, Itanhaém - SP"
          ></iframe>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-[#3B2E2A] mt-12"
        >
          Atendimento com hora marcada. Agende seu momento de cuidado e bem-estar.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
