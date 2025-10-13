import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-4xl"
        >
          Redescubra o equilíbrio do seu corpo e mente.
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="https://wa.me/5513982009366"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-[#D9A977] transition-colors underline underline-offset-4"
        >
          Agende seu momento agora.
        </motion.a>
      </div>

      <LuMouse
        size={30}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-scroll text-white"
      ></LuMouse>
    </section>
  );
};

export default Hero;
