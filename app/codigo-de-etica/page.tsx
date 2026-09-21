import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
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
import FadeIn from "@/components/FadeIn";
import Underline from "@/components/Underline";

export const metadata: Metadata = {
  title: "Código de Ética | Dra. Sofía Ramírez — Psicóloga",
  description:
    "Principios éticos que guían la práctica profesional de la Dra. Sofía Ramírez. Fundamentado en el Código Ético del Psicólogo de la Sociedad Mexicana de Psicología.",
  robots: { index: true, follow: true },
};

const principles = [
  {
    icon: Heart,
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
      <header className="bg-sage-900 text-warm-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 relative">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-warm-white/60 hover:text-warm-white transition-colors mb-10 group w-fit"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <span className="block text-xs font-sans uppercase tracking-[0.25em] text-terracota-300 mb-4">
            Aviso legal
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-5">
            Código de
            <br />
            <Underline color="text-terracota-400">Ética Profesional</Underline>
          </h1>
          <p className="font-sans text-warm-white/70 max-w-xl leading-relaxed">
            La práctica psicológica responsable se fundamenta en principios éticos claros.
            Este documento describe los valores y compromisos que guían cada sesión,
            cada decisión y cada acción profesional.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-sans text-warm-white/50 border-t border-white/10 pt-6">
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
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        {/* Introducción */}
        <FadeIn as="section" className="mb-20 p-8 md:p-10 rounded-[1.5rem] bg-beige-50 border border-beige-200">
          <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-4">
            Carta de compromiso
          </span>
          <blockquote className="font-display font-semibold text-xl md:text-2xl text-sage-800 leading-relaxed mb-5">
            &ldquo;Como psicóloga clínica, mi mayor responsabilidad es hacia las personas que
            confían en mí su bienestar emocional. Este Código de Ética no es un documento
            de cumplimiento formal: es el reflejo de los valores que considero
            irrenunciables en la práctica clínica.&rdquo;
          </blockquote>
          <p className="font-sans text-sage-700 leading-relaxed mb-4">
            Cada principio aquí descrito se aplica en cada sesión, independientemente del
            contexto, el consultante o la modalidad de atención. Si en algún momento
            consideras que alguno de estos principios no se ha respetado, tienes el derecho
            —y te invito— a comunicármelo directamente.
          </p>
          <p className="font-sans font-medium text-sage-800">
            — Dra. Sofía Ramírez, Psicóloga Clínica
          </p>
        </FadeIn>

        {/* Principios */}
        <section className="mb-20">
          <FadeIn as="div" className="flex items-baseline gap-4 mb-10 border-b border-beige-200 pb-4">
            <h2 className="font-display text-3xl md:text-4xl text-sage-900">
              Principios éticos <Underline>fundamentales</Underline>
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {principles.map((p, i) => (
              <FadeIn
                key={p.title}
                as="div"
                delay={Math.min(i * 0.04, 0.2)}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 border-b border-beige-200 last:border-none"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-3xl text-beige-300 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p.icon size={18} className="text-terracota-500" />
                  </div>
                  <h3 className="font-display text-2xl text-sage-900 leading-tight">{p.title}</h3>
                  <p className="font-sans text-sm text-sage-500 mt-1">{p.subtitle}</p>
                </div>

                <ul className="md:col-span-8 space-y-3">
                  {p.content.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle size={15} className="text-sage-400 flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-sage-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Procedimiento de queja */}
        <FadeIn as="section" className="mb-20 rounded-[1.5rem] bg-sage-50 border border-sage-200 p-8 md:p-10">
          <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-4">
            Procedimiento
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-sage-900 mb-5">
            ¿Cómo reportar una falta ética?
          </h2>
          <p className="font-sans text-sage-700 leading-relaxed mb-5">
            Si consideras que alguno de estos principios ha sido vulnerado, tienes derecho a
            presentar una queja. El proceso es el siguiente:
          </p>
          <ol className="space-y-3 mb-7">
            {[
              "Comunícate directamente conmigo a través del formulario de contacto o por correo electrónico para buscar una resolución directa.",
              "Si la situación no se resuelve satisfactoriamente, puedes presentar una queja formal ante el Consejo Nacional para la Enseñanza e Investigación en Psicología (CNEIP).",
              "También puedes acudir a la Comisión Nacional de Derechos Humanos (CNDH) si consideras que se han vulnerado tus derechos fundamentales.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-sage-800 text-warm-white text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-sans text-sm text-sage-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage-800 hover:bg-sage-900 text-warm-white rounded-full transition-colors font-medium font-sans"
            >
              <MessageSquare size={14} />
              Contactar directamente
            </a>
            <a
              href="https://www.cneip.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-sage-300 hover:border-sage-400 text-sage-700 rounded-full transition-colors font-medium font-sans"
            >
              <Globe size={14} />
              Sitio CNEIP
            </a>
          </div>
        </FadeIn>

        {/* Marco normativo */}
        <FadeIn as="section" className="mb-20">
          <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-4">
            Referencias
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-sage-900 mb-6 border-b border-beige-200 pb-4">
            Marco normativo de referencia
          </h2>
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
        </FadeIn>

        {/* Compromiso final */}
        <FadeIn
          as="section"
          className="rounded-[2rem] bg-sage-900 text-warm-white p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/5 blur-3xl" />
          <Handshake size={30} className="mx-auto mb-5 opacity-80 relative" />
          <h2 className="font-display text-2xl md:text-4xl mb-4 relative">
            Un compromiso que se renueva cada sesión
          </h2>
          <p className="font-sans opacity-75 max-w-xl mx-auto leading-relaxed mb-8 relative">
            La ética no es un destino sino una práctica continua. Me comprometo a
            reflexionar, aprender y mejorar constantemente para estar a la altura
            de la confianza que depositas en este proceso.
          </p>
          <Link
            href="/"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-warm-white text-sage-800 hover:bg-warm-cream font-medium rounded-full transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </FadeIn>

        {/* Navegación inferior */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-14 pt-6 border-t border-beige-200 text-sm font-sans">
          <Link
            href="/aviso-de-privacidad"
            className="inline-flex items-center gap-2 px-6 py-3 border border-sage-300 hover:border-sage-500 text-sage-700 hover:text-sage-900 rounded-full transition-colors"
          >
            <ArrowLeft size={14} />
            Ver Aviso de Privacidad
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-800 hover:bg-sage-900 text-warm-white rounded-full transition-colors"
          >
            Volver al inicio
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <p className="text-center text-xs font-sans text-sage-400 mt-10">
          Versión 2.0 · Última actualización: Abril 2026
        </p>
      </main>
    </div>
  );
}
