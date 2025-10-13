import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(1);

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (!video1 || !video2) return;

    const handleVideoEnd = () => {
      if (activeVideo === 1) {
        video2.currentTime = 0;
        video2.play();
        setActiveVideo(2);
      } else {
        video1.currentTime = 0;
        video1.play();
        setActiveVideo(1);
      }
    };

    const currentVideo = activeVideo === 1 ? video1 : video2;
    currentVideo.addEventListener("ended", handleVideoEnd);

    return () => {
      currentVideo.removeEventListener("ended", handleVideoEnd);
    };
  }, [activeVideo]);

  useEffect(() => {
    const video1 = videoRef1.current;
    if (video1) {
      video1.play().catch((error) => {
        // Autoplay was prevented.
        console.error("Autoplay prevented: ", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />

      <video
        ref={videoRef1}
        muted
        playsInline
        poster="https://via.placeholder.com/1920x1080"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeVideo === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://pub-0fb1b63b4b4b406488ed6d1e399e17cf.r2.dev/hero-video.mp4"
          type="video/mp4"
        />
      </video>
      <video
        ref={videoRef2}
        muted
        playsInline
        poster="https://via.placeholder.com/1920x1080"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeVideo === 2 ? "opacity-100" : "opacity-0"
        }`}
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
