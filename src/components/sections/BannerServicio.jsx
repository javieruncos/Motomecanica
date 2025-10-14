import React from "react";
import { motion } from "framer-motion";

const BannerServicio = () => {
  const servicios = [
    {
      titulo: "Mecánica General",
      desc: "Reparaciones completas y mantenimiento de motores.",
    },
    {
      titulo: "Cambio de Aceite",
      desc: "Productos originales y control de niveles.",
    },
    {
      titulo: "Revisión Eléctrica",
      desc: "Chequeo de luces, batería y sistema de arranque.",
    },
    {
      titulo: "Alineación y Frenos",
      desc: "Seguridad y estabilidad para cada viaje.",
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden h-auto py-20 lg:py-30">
      <img
        src="https://images.pexels.com/photos/207555/pexels-photo-207555.jpeg"
        alt="motocicleta"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent"></div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 md:px-12 lg:px-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
            Servicio integral para tu <span className="text-naranja">moto</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Nos especializamos en diagnósticos precisos, mantenimiento
            preventivo y reparaciones con repuestos originales. Tu moto, en las
            mejores manos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-xl font-semibold text-naranja mb-1">
                  {item.titulo}
                </h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagen derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
              alt="mecánico revisando moto"
              className="object-cover w-full h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerServicio;
