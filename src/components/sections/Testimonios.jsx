import React from "react";

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
    <div className="h-[600px] md:h-[850px] lg:h-[550px] bg-[#191919] relative">
      <img
        src="https://images.pexels.com/photos/207555/pexels-photo-207555.jpeg"
        alt="motocicleta"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 bg-black/90 w-full h-full">
        <div className="py-16 sm:py-20 md:py-26 text-white container mx-auto px-4 sm:px-6 md:px-15">
          <div className="container mx-auto px-2 sm:px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 titulo">
              Opiniones de nuestros clientes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {comentarios.map((item, index) => (
                <div
                  key={index}
                  className="color-negro p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#f6f8f8] mr-3 sm:mr-4"
                    />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-naranja">
                      {item.nombre}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 italic">
                    “{item.comentario}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
