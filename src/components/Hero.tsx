import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Tenta forçar o play para navegadores que suspendem o autoplay
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented: ", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Overlay Escuro - Z-Index 10 */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Vídeo Background - Z-Index 0 */}
      {/* Alterado de 'fixed' para 'absolute' para evitar bugs visuais no mobile */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline // Essencial para o vídeo não abrir em tela cheia no iOS
        poster="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/hero-image-fallback.webp"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* IMPORTANTE: Para funcionar 100% em iPhones, você deve adicionar uma versão .mp4 */}
        {/* <source src="SEU_LINK_AQUI.mp4" type="video/mp4" /> */}
        
        <source
          src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/Hero-Video.webm"
          type="video/webm"
        />
        {/* Fallback de imagem caso o vídeo falhe completamente */}
        <img 
          src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/hero-image-fallback.webp" 
          alt="Imagem de fundo relaxante"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Conteúdo - Z-Index 20 */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-4xl drop-shadow-md"
        >
          Redescubra o equilíbrio do seu corpo e mente.
        </motion.h1>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="https://wa.me/5513982009366"
          className="text-white text-xl hover:text-[#D9A977] transition-colors underlineQX underline-offset-4 drop-shadow-sm"
        >
          Agende seu momento agora.
        </motion.a>
      </div>

      <LuMouse
        size={30}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-scroll text-white drop-shadow-md"
      />
    </section>
  );
};

export default Hero;