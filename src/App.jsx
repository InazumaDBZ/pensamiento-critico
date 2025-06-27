import { motion } from "framer-motion";

// ⭐ Star decorativa animada
function Star({ size = 24, delay = 0, className = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.8, delay, repeat: Infinity, repeatType: "mirror" }}
      className={`absolute text-white/70 ${className}`}
      style={{ fontSize: size }}
    >
      ★
    </motion.span>
  );
}

// Φ decorativo flotante
function PhiSymbol() {
  return (
    <motion.span
      initial={{ opacity: 0.2, y: -30 }}
      animate={{ opacity: 0.6, y: 10 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 text-[160px] font-serif select-none pointer-events-none"
    >
      Φ
    </motion.span>
  );
}

export default function CriticalThinkingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#7FB3D5] px-4 py-10 sm:px-6 overflow-hidden">
      {/* Estrellas decorativas */}
      <Star size={26} delay={0.2} className="top-6 left-4" />
      <Star size={18} delay={0.8} className="top-24 right-6" />
      <Star size={30} delay={1.4} className="bottom-14 left-8" />
      <Star size={22} delay={1.1} className="bottom-6 right-4" />

      {/* Φ decorativo central */}
      <PhiSymbol />

      {/* Tarjeta principal */}
      <article className="relative z-10 max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-10 text-gray-900 space-y-6">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800">
            Pensamiento Crítico
          </h1>
        </header>
        <section className="space-y-5 text-justify text-[15px] sm:text-base leading-relaxed">
          <p>
            Este proyecto fue diseñado con el propósito de fomentar el pensamiento crítico y el cuestionamiento en una sociedad marcada por el
            conformismo, donde la educación a menudo falla en su misión de formar individuos capaces de reflexionar, dudar, solucionar sus
            problemas con eficacia y formar opiniones fundamentadas.
          </p>
          <p>
            Es fundamental reconocer que existen ciertas capacidades previas que hacen posible el pensamiento crítico. Entre ellas se
            encuentran el autoconocimiento, la curiosidad, la humildad intelectual y la flexibilidad. Estas cualidades sedimentan la base en la
            que se construye y se desarrolla el pensamiento crítico.
          </p>
          <p>
            A través de este trabajo, buscamos explorar qué es el pensamiento crítico, cómo puede desarrollarse, y su relación con nociones
            esenciales como el conocimiento y la verdad.
          </p>
          <p>
            Además, aspiramos a ir más allá de la teoría; examinar cómo el pensamiento crítico no solo contribuye a nuestra vida personal, sino
            cómo puede convertirse en una herramienta imprescindible para impulsar desarrollos sociales, y por consiguiente, hacer de nuestra
            sociedad una más consciente, crítica y comprometida con el crecimiento individual y colectivo.
          </p>
        </section>
        <footer className="pt-4 text-center text-sm text-gray-700 italic">
          Hecho por Eliut y SOΦA
        </footer>
      </article>
    </div>
  );
}
