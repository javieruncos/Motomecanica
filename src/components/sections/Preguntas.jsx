import React, { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";

const preguntas = [
  {
    pregunta: "¿Ofrecen garantía en los servicios?",
    respuesta:
      "Sí, todos nuestros servicios cuentan con garantía de 30 días para piezas y mano de obra.",
  },
  {
    pregunta: "¿Puedo solicitar un presupuesto online?",
    respuesta:
      "Por supuesto, podés usar nuestro formulario de contacto o llamarnos directamente para recibir un presupuesto personalizado.",
  },
  {
    pregunta: "¿Hacen service completo en menos de 24 horas?",
    respuesta:
      "Sí, contamos con nuestro Service Express para mantener tu moto al día rápidamente.",
  },
  {
    pregunta: "¿Venden repuestos originales?",
    respuesta:
      "Sí, todos nuestros repuestos y accesorios son originales y certificados para cada marca.",
  },
];

const Preguntas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <div className="bg-[#191919] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 titulo"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {preguntas.map((item, index) => (
          <motion.div
            key={index}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Pregunta */}
            <div
              className="flex justify-between items-center p-6 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold">{item.pregunta}</h3>
              <i
                className={`bi bi-chevron-${activeIndex === index ? "up" : "down"} text-orange-500 text-xl`}
              ></i>
            </div>

            {/* Respuesta animada */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="overflow-hidden border-t border-white/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-6 pt-4 text-naranja">{item.respuesta}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;