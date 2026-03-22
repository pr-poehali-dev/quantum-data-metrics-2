import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/fda6056e-54da-4e56-98ef-e6a7e25df559/files/1dbce482-63db-4949-b3c6-fe519683ea14.jpg"
          alt="Soundwave landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПОЧУВСТВУЙ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Музыка, которая подстраивается под твоё настроение и делает тебя лучше
        </p>
        <a
          href="#start"
          className="mt-8 inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300"
        >
          Подобрать музыку
        </a>
      </div>
    </div>
  );
}