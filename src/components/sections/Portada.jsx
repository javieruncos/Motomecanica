import { motion } from "framer-motion";
import motocicleta from "../../assets/img/video/motocicleta.mp4";

const Portada = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-black overflow-hidden">
      <video
        src={motocicleta}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
      <div className="absolute inset-0 flex flex-col items-center md:items-center justify-center text-white px-6 md:px-20">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl text-center  font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cuidamos tu moto como si fuera nuestra
        </motion.h1>

        <motion.p
          className="w-full md:w-[600px] text-center  text-lg text-gray-200 "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Mantenimiento, reparación y service completo con repuestos originales.
          Más de 10 años brindando confianza a cada cliente.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center  items-center md:justify-center md:text-center "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5491123456789o"
            target="blanck"
            className="inline-block  md:text-center bg-orange-600 hover:bg-orange-500 transition-all duration-300 text-white font-semibold py-4 px-10 rounded-full shadow-lg shadow-orange-600/40 uppercase tracking-wider"
          >
            Solicitar presupuesto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portada;
