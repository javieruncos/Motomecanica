import { motion } from "framer-motion";
import electricoMoto from "../../assets/img/electricoMoto.webp";
import mecanico from "../../assets/img/mecanicoPage.jpg";
import reparaciones  from "../../assets/img/reparacionMoto.jpg";

const ServiciosCards = () => {
  const servicios = [
    {
      titulo: "Mecánica General",
      desc: "Reparación completa del motor, frenos, embrague y transmisión. Usamos herramientas de diagnóstico precisas.",
      img: {
        electricoMoto: {
          src: mecanico,
          alt: "electricidad y batería",
        },
      },
    },
    {
      titulo: "Service Completo",
      desc: "Incluye cambio de aceite, filtros, bujías y control general del sistema. Dejá tu moto lista para rodar.",
      img: {
        electricoMoto: {
          src: reparaciones,
          alt: "electricidad y batería",
        },
      },
    },
    {
      titulo: "Electricidad y Batería",
      desc: "Revisión completa del sistema eléctrico de tu moto, incluyendo diagnóstico y carga de batería, verificación de luces",
      img: {
        electricoMoto: {
          src: electricoMoto,
          alt: "electricidad y batería",
        },
      },
    },
  ];

  return (
    <section className="fondo-gradient py-16 md:py-24">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold titulo text-[#191919] tracking-wide"
        >
          Servicios Destacados
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          En nuestro taller cuidamos cada detalle de tu moto con servicios
          pensados para mantenerla en su mejor rendimiento.
        </motion.p>
      </div>

      {/* Cards principales */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={servicio.img.electricoMoto.src}
                alt={servicio.titulo}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold titulo text-gray-800 mb-2">
                {servicio.titulo}
              </h4>
              <p className="text-gray-600 mb-7 text-sm md:text-base ">
                {servicio.desc}
              </p>
              <a
                href="https://wa.me/5491123456789o"
                target="blanck"
                className="bg-[#ff6600]  text-white font-semibold px-6 py-3 rounded-full transition
               hover:scale-105 hover:shadow-lg"
              >
                Consultar presupuesto
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#ff6600] text-white rounded-2xl p-8 flex flex-col lg:flex-row items-center 
          justify-between shadow-xl shadow-black/30 hover:shadow-orange-500/30 transition-all duration-500"
        >
          <div className="text-center lg:text-left">
            <h5 className="text-3xl font-bold mb-2 titulo">
              Venta de Repuestos
            </h5>
            <p className="text-sm md:text-base mb-5">
              Repuestos originales y accesorios para todas las marcas.
            </p>
            <a
              href="https://wa.me/5491123456789o"
              target="blanck"
              className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Consultar precios
            </a>
          </div>
          <img
            src="https://i0.wp.com/www.vectorizando.com/wp-content/uploads/2022/08/Vector-Motorcycle-Spares-Concept-Convertido-847061d9.png?fit=500%2C500&ssl=1"
            alt="Repuestos de moto"
            className="w-40 md:w-56 mt-6 lg:mt-0"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] 
           text-white rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between 
           shadow-xl shadow-black/30 hover:shadow-orange-500/30 transition-all duration-500"
        >
          <div className="text-center lg:text-left">
            <h5 className="text-3xl font-bold mb-2 text-[#ff6600] titulo">
              Service Express
            </h5>
            <p className="text-sm md:text-base mb-5">
              Mantené tu moto al día en menos de 24hs con nuestro servicio
              rápido y garantizado.
            </p>
            <a
              href="https://wa.me/5491123456789o"
              target="blanck"
              className="bg-[#ff6600] hover:bg-[#e05600] text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Consultar precios
            </a>
          </div>
          <img
            src="https://nrmotoco.com/wp-content/uploads/2022/08/RXT-726X-Warrior-Helmet-Left-Front-Angle-Visor-Up-300x300-1.png"
            alt="Service express"
            className="w-40 md:w-56 mt-6 lg:mt-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosCards;
