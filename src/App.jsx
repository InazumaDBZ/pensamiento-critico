import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Definición",
    body:
      "El pensamiento crítico es la capacidad de analizar, evaluar y sintetizar información y argumentos de forma consciente, rigurosa y fundamentada, con el fin de alcanzar conclusiones claras, coherentes y libres de sesgos irracionales.",
  },
  {
    title: "Habilidades Clave",
    body:
      "• Análisis • Inferencia • Explicación • Evaluación • Autocorrección. Juntas permiten diseccionar ideas, rastrear inferencias, identificar supuestos y ajustar nuestro propio razonamiento en tiempo real.",
  },
  {
    title: "Proceso en 5 Pasos",
    body:
      "1. Formular la pregunta  2. Reunir evidencia  3. Evaluar supuestos  4. Elaborar conclusiones  5. Comunicar y revisar.  Este ciclo se repite hasta que los hechos y la lógica resistan la crítica." ,
  },
  {
    title: "Preguntas Socráticas",
    body:
      "¿Qué evidencia respalda esto? ¿Existe una explicación alternativa? ¿En qué supuestos descansa esta afirmación? Estas preguntas desmantelan dogmas y obligan a razonar con rigor." ,
  },
  {
    title: "Falacias Lógicas Comunes",
    body:
      "Ad hominem • Hombre de paja • Apelación a la emoción • Pendiente resbaladiza • Falsa causa. Reconocerlas evita juicios defectuosos." ,
  },
  {
    title: "Sesgos Cognitivos",
    body:
      "Confirmación • Disponibilidad • Anclaje • Sesgo de resultado • Creencia en el mundo justo. El antídoto es la autoconsciencia y la verificación empírica." ,
  },
  {
    title: "Metacognición",
    body:
      "Pensar sobre el propio pensamiento: monitorear la claridad, precisión y lógica del razonamiento para ajustar la marcha antes de errar." ,
  },
  {
    title: "Método Científico",
    body:
      "Observación • Hipótesis • Experimentación • Análisis • Revisión por pares. Su ethos impregna el pensamiento crítico al exigir evidencia reproducible." ,
  },
  {
    title: "Conclusión",
    body:
      "El pensamiento crítico no es un dogma: es una práctica deliberada que exige disciplina, humildad intelectual y valentía para cambiar de opinión cuando los datos lo imponen." ,
  },
];

export default function CriticalThinkingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <header className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pensamiento Crítico</h1>
        <p className="text-lg md:text-xl text-neutral-600">
          Conceptos esenciales para cuestionar, analizar y decidir con rigor.
        </p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((sec, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }}>
            <Card className="h-full shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle>{sec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {sec.body}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      <footer className="mt-16 text-center text-sm text-neutral-500">
        Hecho con 💡 por TuNombre • <a className="underline" href="https://creativecommons.org/licenses/by/4.0/">CC‑BY 4.0</a>
      </footer>
    </div>
  );
}
