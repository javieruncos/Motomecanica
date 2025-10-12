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
    <div className="h-[500px] bg-[#191919] relative">
      <img
        src="https://images.pexels.com/photos/207555/pexels-photo-207555.jpeg"
        alt="motocicleta"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 bg-black/90 w-full h-full">
        <div className=" py-26 text-white  container mx-auto px-15">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
              Opiniones de nuestros clientes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {comentarios.map((item, index) => (
                <div
                  key={index}
                  className="color-negro p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-14 h-14 rounded-full border-2 border-[#f6f8f8] mr-4"
                    />
                    <h3 className="text-lg font-semibold">{item.nombre}</h3>
                  </div>
                  <p className="text-gray-300 italic">“{item.comentario}”</p>
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
