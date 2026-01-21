import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Autoplay prevented: ", error);
      });
    }
  }, []);

return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Overlay com cor fixa */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Vídeo com efeito fixo usando a classe 'fixed' ou mantendo 'absolute' num pai relativo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/hero-image-fallback.webp"
        className="fixed inset-0 w-full h-full object-cover -z-10" // Adicionado -z-10 e fixed
      >
        <source
          src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/Hero-Video.webm"
          type="video/webm"
        />
      </video>

      {/* Conteúdo que rola por cima */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          // ... (mantenha as animações do Framer Motion)
          className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-4xl"
        >
          Redescubra o equilíbrio do seu corpo e mente.
        </motion.h1>
        
        {/* Link para agendamento */}
        <motion.a
          // ...
          href="https://wa.me/5513982009366"
          className="text-white text-xl hover:text-[#D9A977] transition-colors underline underline-offset-4"
        >
          Agende seu momento agora.
        </motion.a>
      </div>

      <LuMouse
        size={30}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-scroll text-white"
      />
    </section>
  );
};

export default Hero;
