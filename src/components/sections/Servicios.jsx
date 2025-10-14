import { motion } from "framer-motion";

const Servicios = () => {
  const servicios = [
    {
      icon: "bi bi-gear-fill",
      titulo: "Mecánica General",
      descripcion:
        "Diagnóstico completo, reparación y mantenimiento integral de todo tipo de motos.",
    },
    {
      icon: "bi bi-droplet-half",
      titulo: "Cambio de Aceite y Filtros",
      descripcion:
        "Servicio rápido con productos originales y control de niveles para un mejor rendimiento.",
    },
    {
      icon: "bi bi-lightning-charge-fill",
      titulo: "Revisión Eléctrica",
      descripcion:
        "Chequeo del sistema eléctrico, luces, batería y arranque para garantizar tu seguridad.",
    },
  ];

  return (
    <section className="py-20 md:py-28 fondo-gradient">
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191919] mb-4 titulo tracking-wide">
          Nuestros Servicios
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Todo lo que tu moto necesita, en un solo lugar
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 container mx-auto px-6 md:px-10">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="p-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6 text-orange-500 text-center drop-shadow-[0_0_8px_rgba(255,120,0,0.4)]">
              <i className={servicio.icon}></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center text-white">
              {servicio.titulo}
            </h3>
            <p className="text-base text-center text-gray-300 leading-relaxed">
              {servicio.descripcion}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
