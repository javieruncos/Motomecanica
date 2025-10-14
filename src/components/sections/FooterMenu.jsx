import React from "react";

const FooterMenu = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-12 px-6 md:px-16 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Logo y descripción */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-3 titulo">
            <i className="bi bi-gear-fill text-[#ff6600] mr-2"></i> Moto
            <span className="text-[#ff6600]">Mecánica</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Servicio integral de mecánica, electricidad y mantenimiento para
            motos. Más de 10 años de experiencia garantizando tu seguridad y
            confianza.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-3">Secciones</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicios" className="hover:text-[#ff6600] transition">
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="hover:text-[#ff6600] transition"
              >
                Opiniones
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#ff6600] transition">
                Preguntas frecuentes
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#ff6600] transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <i className="bi bi-geo-alt text-[#ff6600] mr-2"></i> Av.
              Rivadavia 4567, Tucuman
            </li>
            <li>
              <i className="bi bi-telephone text-[#ff6600] mr-2"></i> +54 9 11
              2345 6789
            </li>
            <li>
              <i className="bi bi-envelope text-[#ff6600] mr-2"></i>{" "}
              contacto@motomecanica.com
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#ff6600] text-xl">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff6600] text-xl">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff6600] text-xl">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Motomecánica. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default FooterMenu;
