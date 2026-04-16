import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Users,
  Scale,
  Heart,
  BookOpen,
  AlertCircle,
  CheckCircle,
  GraduationCap,
  MessageSquare,
  Eye,
  Ban,
  Globe,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Código de Ética | Dra. Sofía Ramírez — Psicóloga",
  description:
    "Principios éticos que guían la práctica profesional de la Dra. Sofía Ramírez. Fundamentado en el Código Ético del Psicólogo de la Sociedad Mexicana de Psicología.",
  robots: { index: true, follow: true },
};

const principles = [
  {
    icon: Heart,
    color: "bg-terracota-50 text-terracota-600 border-terracota-200",
    title: "Beneficencia y no maleficencia",
    subtitle: "Primero, no dañar",
    content: [
      "El bienestar del consultante es siempre la prioridad central de la intervención terapéutica.",
      "Se evitará cualquier acción que pueda causar daño físico, psicológico, financiero o social al consultante.",
      "Las técnicas empleadas están basadas en evidencia científica y se aplican con el único fin de favorecer el bienestar del consultante.",
      "Cuando los límites de la competencia profesional sean alcanzados, se realizará una derivación adecuada y oportuna.",
    ],
  },
  {
    icon: Users,
    color: "bg-sage-50 text-sage-700 border-sage-200",
    title: "Autonomía y respeto",
    subtitle: "Tu proceso, tu decisión",
    content: [
      "Se respeta el derecho del consultante a tomar sus propias decisiones, incluyendo la de continuar o interrumpir el proceso terapéutico en cualquier momento.",
      "El consentimiento informado es requisito indispensable antes de iniciar cualquier proceso de evaluación o intervención.",
      "Se informa al consultante, con lenguaje accesible, sobre los objetivos, procedimientos, beneficios y posibles riesgos del proceso terapéutico.",
      "Se reconoce y respeta la diversidad cultural, religiosa, de género, orientación sexual y cualquier otra característica identitaria del consultante.",
    ],
  },
  {
    icon: Lock,
    color: "bg-beige-50 text-beige-700 border-beige-200",
    title: "Confidencialidad",
    subtitle: "Lo que se habla aquí, aquí se queda",
    content: [
      "Toda la información compartida en el contexto terapéutico es estrictamente confidencial y no se divulgará a terceros sin consentimiento explícito y por escrito del consultante.",
      "Los registros clínicos se almacenan de forma segura y solo son accesibles para el profesional tratante.",
      "La confidencialidad tiene excepciones legales y éticas: riesgo inminente de daño grave para el consultante o para terceros, situaciones de abuso o maltrato activo, o requerimiento judicial debidamente fundado. En estos casos se notifica al consultante antes de actuar, siempre que sea posible.",
      "Los datos personales se tratan conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
    ],
  },
  {
    icon: Scale,
    color: "bg-sage-50 text-sage-600 border-sage-200",
    title: "Justicia e igualdad",
    subtitle: "Terapia accesible y sin discriminación",
    content: [
      "La atención psicológica se brinda sin discriminación por motivos de origen étnico, género, edad, condición socioeconómica, orientación sexual, religión, discapacidad o cualquier otra condición.",
      "Se facilita el acceso a los servicios de salud mental mediante tarifas flexibles y modalidades de atención diversas (presencial, online, intensivos).",
      "Se reconoce el impacto de los determinantes sociales en la salud mental y se integra esta perspectiva en el abordaje clínico.",
    ],
  },
  {
    icon: ShieldCheck,
    color: "bg-terracota-50 text-terracota-600 border-terracota-200",
    title: "Responsabilidad profesional",
    subtitle: "Competencia y actualización continua",
    content: [
      "La práctica clínica se limita a las áreas de competencia acreditada mediante formación, supervisión y experiencia documentada.",
      "Se mantiene actualización continua mediante formación, supervisión clínica y lectura de literatura científica relevante.",
      "Se reconocen y gestionan activamente el desgaste profesional, los sesgos personales y las contratransferencias que puedan afectar la calidad de la atención.",
      "Se supervisan periódicamente los casos clínicos con pares o supervisores para garantizar la calidad del servicio.",
    ],
  },
  {
    icon: Ban,
    color: "bg-beige-50 text-beige-700 border-beige-200",
    title: "Límites y relaciones duales",
    subtitle: "Claridad en el vínculo terapéutico",
    content: [
      "Se evitan estrictamente las relaciones duales o múltiples con consultantes (románticas, sexuales, comerciales, de amistad fuera del contexto terapéutico) que puedan comprometer la objetividad o el bienestar del consultante.",
      "Los honorarios son transparentes, razonables y acordados antes de iniciar el proceso.",
      "No se acepta recibir regalos, favores ni intercambios de servicios que puedan generar dependencia o conflictos de interés.",
      "Al finalizar el proceso terapéutico, se acompaña adecuadamente el cierre para evitar dependencias no terapéuticas.",
    ],
  },
  {
    icon: GraduationCap,
    color: "bg-sage-50 text-sage-700 border-sage-200",
    title: "Integridad y honestidad",
    subtitle: "Transparencia en cada paso",
    content: [
      "Se comunica con honestidad respecto a las posibilidades y limitaciones del proceso terapéutico, sin crear expectativas no realistas.",
      "Las credenciales, formación y especialidades se presentan de forma veraz y verificable.",
      "Se informa con claridad sobre el enfoque teórico empleado para que el consultante pueda tomar decisiones informadas.",
      "Ante errores o limitaciones profesionales se actúa con transparencia y se toman las medidas correctivas necesarias.",
    ],
  },
  {
    icon: Eye,
    color: "bg-terracota-50 text-terracota-600 border-terracota-200",
    title: "Uso ético de la tecnología",
    subtitle: "Terapia online con los mismos estándares",
    content: [
      "Las sesiones online se realizan en plataformas con cifrado de extremo a extremo que garanticen la confidencialidad.",
      "Se verifica la identidad del consultante y se asegura que el entorno sea privado antes de iniciar la sesión.",
      "Los registros, grabaciones o comunicaciones digitales están sujetos a los mismos principios de confidencialidad que las sesiones presenciales.",
      "No se utilizan herramientas de inteligencia artificial u otras tecnologías de terceros que procesen datos clínicos sin consentimiento explícito.",
    ],
  },
];

const references = [
  "Sociedad Mexicana de Psicología. (2010). Código Ético del Psicólogo (5.ª ed.). Trillas.",
  "American Psychological Association. (2017). Ethical Principles of Psychologists and Code of Conduct.",
  "Consejo Nacional para la Enseñanza e Investigación en Psicología (CNEIP).",
  "Ley General de Salud de México — Título Tercero, Capítulo I.",
  "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (2010).",
];

export default function CodigoDeEtica() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-sage-900 text-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-warm-white/70 hover:text-warm-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sage-700 flex items-center justify-center flex-shrink-0 mt-1">
              <BookOpen size={22} className="text-warm-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-sage-400 font-sans mb-2">
                Dra. Sofía Ramírez · Psicóloga Clínica
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium mb-3">
                Código de Ética Profesional
              </h1>
              <p className="font-sans text-warm-white/70 max-w-2xl leading-relaxed">
                La práctica psicológica responsable se fundamenta en principios éticos claros.
                Este documento describe los valores y compromisos que guían cada sesión,
                cada decisión y cada acción profesional.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 text-xs font-sans text-warm-white/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Basado en el Código Ético del Psicólogo SMP
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Actualizado: Abril 2026
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Cédula Profesional: 12345678
            </span>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Introducción */}
        <section className="mb-16 p-8 rounded-3xl bg-beige-50 border border-beige-200">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-terracota-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={18} className="text-terracota-600" />
            </div>
            <div>
              <h2 className="font-display text-xl text-sage-800 mb-3">Carta de compromiso</h2>
              <p className="font-sans text-sage-700 leading-relaxed mb-3">
                Como psicóloga clínica, mi mayor responsabilidad es hacia las personas que
                confían en mí su bienestar emocional. Este Código de Ética no es un documento
                de cumplimiento formal: es el reflejo de los valores que considero
                irrenunciables en la práctica clínica.
              </p>
              <p className="font-sans text-sage-700 leading-relaxed">
                Cada principio aquí descrito se aplica en cada sesión, independientemente del
                contexto, el consultante o la modalidad de atención. Si en algún momento
                consideras que alguno de estos principios no se ha respetado, tienes el derecho
                —y te invito— a comunicármelo directamente.
              </p>
              <p className="font-sans font-medium text-sage-800 mt-4">
                — Dra. Sofía Ramírez, Psicóloga Clínica
              </p>
            </div>
          </div>
        </section>

        {/* Principios */}
        <section className="space-y-8 mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-sage-900 mb-8">
            Principios éticos fundamentales
          </h2>

          {principles.map((p, i) => (
            <div
              key={i}
              className="rounded-3xl border bg-warm-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header de tarjeta */}
              <div className={`flex items-center gap-4 p-6 border-b ${p.color.split(" ").slice(2).join(" ")} bg-opacity-30`}>
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${p.color}`}>
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-sage-800">{p.title}</h3>
                  <p className="font-sans text-sm text-sage-500 italic">{p.subtitle}</p>
                </div>
                <span className="ml-auto font-display text-3xl text-sage-200 font-light leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Lista de compromisos */}
              <ul className="p-6 space-y-3">
                {p.content.map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <CheckCircle size={15} className="text-sage-400 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-sage-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Procedimiento de queja */}
        <section className="mb-16 rounded-3xl bg-sage-50 border border-sage-200 p-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-sage-200 flex items-center justify-center flex-shrink-0">
              <AlertCircle size={18} className="text-sage-700" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-sage-800 mb-4">
                ¿Cómo reportar una falta ética?
              </h2>
              <p className="font-sans text-sage-700 leading-relaxed mb-4">
                Si consideras que alguno de estos principios ha sido vulnerado, tienes derecho a
                presentar una queja. El proceso es el siguiente:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Comunícate directamente conmigo a través del formulario de contacto o por correo electrónico para buscar una resolución directa.",
                  "Si la situación no se resuelve satisfactoriamente, puedes presentar una queja formal ante el Consejo Nacional para la Enseñanza e Investigación en Psicología (CNEIP).",
                  "También puedes acudir a la Comisión Nacional de Derechos Humanos (CNDH) si consideras que se han vulnerado tus derechos fundamentales.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-sage-500 text-warm-white text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="font-sans text-sm text-sage-700 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-500 hover:bg-sage-600 text-warm-white rounded-full transition-colors font-medium font-sans"
                >
                  <MessageSquare size={14} />
                  Contactar directamente
                </a>
                <a
                  href="https://www.cneip.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-sage-300 hover:border-sage-400 text-sage-700 rounded-full transition-colors font-medium font-sans"
                >
                  <Globe size={14} />
                  Sitio CNEIP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Acuerdos internacionales */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-sage-900 mb-6">Marco normativo de referencia</h2>
          <div className="grid gap-3">
            {references.map((ref, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 rounded-2xl bg-beige-50 border border-beige-200"
              >
                <BookOpen size={15} className="text-beige-500 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-sage-700">{ref}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compromiso final */}
        <section className="rounded-3xl bg-gradient-to-br from-sage-500 to-sage-700 text-warm-white p-8 md:p-10 text-center">
          <Handshake size={32} className="mx-auto mb-4 opacity-80" />
          <h2 className="font-display text-2xl md:text-3xl mb-3">Un compromiso que se renueva cada sesión</h2>
          <p className="font-sans opacity-85 max-w-xl mx-auto leading-relaxed mb-6">
            La ética no es un destino sino una práctica continua. Me comprometo a
            reflexionar, aprender y mejorar constantemente para estar a la altura
            de la confianza que depositas en este proceso.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-warm-white text-sage-700 hover:bg-warm-cream font-medium rounded-full transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </section>

        {/* Meta info */}
        <div className="mt-10 text-center text-xs font-sans text-sage-400 space-y-1">
          <p>Versión 2.0 — Última actualización: Abril 2026</p>
          <p>
            Documento complementado con el{" "}
            <Link href="/aviso-de-privacidad" className="underline hover:text-sage-600 transition-colors">
              Aviso de Privacidad
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
