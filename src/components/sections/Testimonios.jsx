import { motion } from "framer-motion";
import moto from "../../assets/img/moto.webp";

const Testimonios = () => {
  const comentarios = [
    {
      nombre: "Carlos Méndez",
      comentario:
        "Excelente atención y muy buen trabajo. Dejaron mi moto como nueva. Súper recomendados 🔧",
      imagen: "https://i.pravatar.cc/100?img=3",
    },
    {
      nombre: "Lucía Fernández",
      comentario:
        "Servicio rápido, precios justos y mucha confianza. Se nota que saben lo que hacen 👏",
      imagen: "https://i.pravatar.cc/100?img=5",
    },
    {
      nombre: "Martín Rojas",
      comentario:
        "Me ayudaron con una falla eléctrica que nadie encontraba. ¡Gracias chicos!",
      imagen: "https://i.pravatar.cc/100?img=7",
    },
  ];

  return (
    <div className="relative bg-[#191919] h-auto py-20 overflow-hidden">
      <img
        src={moto}
        alt="motocicleta"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white container mx-auto px-4 sm:px-6 md:px-15">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-12 titulo tracking-wide">
          Opiniones de nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comentarios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="color-negro p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-14 h-14 rounded-full border-2 border-[#f6f8f8] mr-4"
                />
                <h3 className="text-lg font-semibold text-naranja">
                  {item.nombre}
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-300 italic">
                “{item.comentario}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
