import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <div className=" text-white py-20 px-6 md:px-20 scroll-smooth scroll-mt-24">
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 titulo text-[#191919] tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contactanos
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Tarjeta de información */}
        <motion.div
          className="bg-black/70 backdrop-blur-md p-10 rounded-2xl shadow-lg flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 titulo">
            Información de contacto
          </h3>
          <p className="text-gray-300">
            ¿Tenés dudas o querés pedir un presupuesto? Contactanos por
            cualquiera de estos medios y te responderemos rápido.
          </p>

          <div className="flex items-center gap-4">
            <i className="bi bi-geo-alt-fill text-orange-600 text-xl"></i>
            <p>Av. Siempre Viva 123, Ciudad, País</p>
          </div>
          <div className="flex items-center gap-4">
            <i className="bi bi-telephone-fill text-orange-600 text-xl"></i>
            <p>+54 9 11 1234 5678</p>
          </div>
          <div className="flex items-center gap-4">
            <i className="bi bi-envelope-fill text-orange-600 text-xl"></i>
            <p>contacto@motomecanica.com</p>
          </div>

          <motion.a
            href="#formulario"
            className="mt-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full w-max shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar presupuesto
          </motion.a>
        </motion.div>

        {/* Formulario de contacto */}
        <motion.div
          className="bg-black/70 backdrop-blur-md p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 titulo">
            Envianos un mensaje
          </h3>
          <form className="flex flex-col gap-4" id="formulario">
            <input
              type="text"
              placeholder="Nombre completo"
              className="p-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-300 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-300 text-white"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="p-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-300 text-white"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="p-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-300 text-white"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full mt-2 transition-all duration-300"
            >
              Enviar mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Mapa pequeño debajo (opcional) */}
      <motion.div
        className="mt-12 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          className="w-full h-64 md:h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.123456!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca!2sUbicaci%C3%B3n!5e0!3m2!1ses!2sar!4v1697090000000!5m2!1ses!2sar"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contacto;
