import { motion } from "framer-motion";
import { LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Nayara Schneider",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUXc7oS2EbF1zlh9b0YF8DiJoQgFi5S4HF0F7UKNMl9sl_LqCHp=w72-h72-p-rp-mo-br100?auto=compress&cs=tinysrgb&w=200",
    comment:
      "Experiência incrível. Ganhei algumas sessões de massagem de aniversário e não consegui mais largar. Ambiente pensando em cada detalhe, com músicas calmas e clima relaxante. A massagem com pedras quentes é maravilhosa e a Lyana, profissional, é muito atenciosa e cuidadosa.",
    rating: 5,
  },
  {
    name: "Fernanda Pimenta Pacheco",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV2JeN4ExmSGuE7RgN4v-Q6grDT_HI2HVGq5TlQnPDib0rzHtVmrw=w72-h72-p-rp-mo-ba3-br100?auto=compress&cs=tinysrgb&w=200",
    comment:
      "Experiência incrível! Lugar aconchegante, relaxante ..a Lyana é um amor de pessoa,transmite muita paz e tranquilidade. Amei o day spa,saí renovada e muito relaxada. Voltarei mais vezes, com certeza.",
    rating: 5,
  },
  {
    name: "Adriana Monteiro",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWkX0IeKM04dXPbKaw1kOaPKVEXilcnbFqJBbunGvT1DQsnaJwNnQ=w72-h72-p-rp-mo-br100?auto=compress&cs=tinysrgb&w=200",
    comment:
      "Umas das melhores massagens que ja fiz! Super indico esta profissional incrível 🤩 E o espaço dela é encantador tbm. Voltarei com certeza. 😘",
    rating: 5,
  },
  {
    name: "Geovanna Depieri Maldonado Pereira",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVmNpXv7IUOpAtvBe_lJtzuHMpB3Km76OC28wZWYBlAym1Xqy3=w72-h72-p-rp-mo-ba2-br100?auto=compress&cs=tinysrgb&w=200",
    comment:
      "Profissional querida que confio muito!!! Executa com excelência o trabalho e além disso, faz você se sentir em casa e acolhida. 🥰",
    rating: 5,
  },
  {
    name: "Kerly Shoji",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWnGpuWo0hQiFnHyf4Su2BcompQswA4ZsK2xtDvlA7j2h4IknUu=w72-h72-p-rp-mo-ba3-br100?auto=compress&cs=tinysrgb&w=200",
    comment:
      "A Lyana é muito simpática e atenciosa. Explicou os procedimentos para que eu não tivesse dúvidas sobre qual era o mais adequado para mim. O espaço trás toda a tranquilidade para termos a melhor experiência. Eu fiz o escalda-pés com reflexologia e a termo terapia. Saí renovada.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-[#3B2E2A] text-center mb-16"
        >
          O que dizem sobre mim
        </motion.h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FDF8F4] p-5 mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 duration-300 h-full min-h-[400px]">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />

                  <h3 className="text-xl font-serif text-[#3B2E2A] mb-2">
                    {testimonial.name}
                  </h3>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <LuStar
                        key={i}
                        size={20}
                        fill="#D9A977"
                        className="text-[#D9A977]"
                      />
                    ))}
                  </div>

                  <p className="text-[#3B2E2A] leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;