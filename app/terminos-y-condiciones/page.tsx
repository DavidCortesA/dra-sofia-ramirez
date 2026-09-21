import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  CalendarClock,
  CreditCard,
  Video,
  Lock,
  Copyright,
  ShieldAlert,
  RefreshCw,
  Scale,
  Mail,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Underline from "@/components/Underline";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Dra. Sofía Ramírez — Psicóloga",
  description:
    "Términos y condiciones de uso del sitio web y de los servicios de psicoterapia de la Dra. Sofía Ramírez: agendamiento, cancelaciones, honorarios y responsabilidades.",
  robots: { index: true, follow: true },
};

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6 border-b border-beige-200 pb-4">
      <span className="font-display text-lg text-terracota-500 flex-shrink-0">{index}</span>
      <h2 className="font-display text-2xl md:text-3xl text-sage-900">{title}</h2>
    </div>
  );
}

export default function TerminosYCondiciones() {
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
            Términos y
            <br />
            <Underline color="text-terracota-400">Condiciones</Underline>
          </h1>
          <p className="font-sans text-warm-white/70 max-w-xl leading-relaxed">
            Estas condiciones describen cómo funciona el servicio de psicoterapia y el uso de
            este sitio web. Al agendar una sesión o usar este sitio, aceptas lo aquí descrito.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-sans text-warm-white/50 border-t border-white/10 pt-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Aplica a sesiones presenciales y online
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Última actualización: Abril 2026
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Versión 1.0
            </span>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {/* 1. Aceptación */}
        <FadeIn as="section">
          <SectionHeader index="01" title="Aceptación de los Términos" />
          <p className="font-sans text-sage-700 leading-relaxed">
            Al navegar este sitio web, llenar el formulario de contacto, agendar una llamada o
            iniciar un proceso terapéutico con la Dra. Sofía Ramírez, aceptas estos Términos y
            Condiciones junto con el{" "}
            <Link href="/aviso-de-privacidad" className="underline hover:text-sage-900">
              Aviso de Privacidad
            </Link>{" "}
            y el{" "}
            <Link href="/codigo-de-etica" className="underline hover:text-sage-900">
              Código de Ética
            </Link>{" "}
            publicados en este sitio. Si no estás de acuerdo con alguno de estos documentos, te
            pedimos no utilizar el servicio.
          </p>
        </FadeIn>

        {/* 2. Naturaleza del servicio */}
        <FadeIn as="section" className="rounded-[1.5rem] bg-terracota-50 border border-terracota-200 p-6 md:p-8">
          <div className="flex gap-4 items-start">
            <AlertTriangle size={22} className="text-terracota-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-xl md:text-2xl text-sage-900 mb-3">
                02 · Naturaleza del servicio — esto no es un servicio de emergencia
              </h2>
              <p className="font-sans text-sage-700 leading-relaxed mb-3">
                La psicoterapia que se ofrece a través de este sitio es un servicio profesional
                de salud mental, no un servicio de urgencias ni de atención a crisis inmediatas.
                Las sesiones se agendan con anticipación y las respuestas por correo o WhatsApp
                pueden tardar hasta 24 horas.
              </p>
              <p className="font-sans text-sage-700 leading-relaxed">
                Si tú o alguien más está en riesgo inminente, en crisis suicida o requiere
                atención médica de urgencia, comunícate de inmediato a la Línea de la Vida
                (800 911 2000) o acude a la sala de emergencias más cercana.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3. Agendamiento y cancelaciones */}
        <FadeIn as="section">
          <SectionHeader index="03" title="Agendamiento, Cancelaciones e Inasistencias" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: CalendarClock,
                title: "Agendamiento",
                desc: "Las sesiones se agendan a través del formulario de contacto, WhatsApp o el calendario en línea, sujetas a disponibilidad.",
              },
              {
                icon: RefreshCw,
                title: "Cambios y cancelaciones",
                desc: "Se solicita avisar con al menos 24 horas de anticipación para reagendar o cancelar una sesión sin cargo.",
              },
              {
                icon: CreditCard,
                title: "Inasistencias sin aviso",
                desc: "Las sesiones no canceladas con el aviso mínimo pueden generar un cargo parcial o total, según se acuerde al inicio del proceso.",
              },
              {
                icon: FileText,
                title: "Primera llamada",
                desc: "La llamada inicial de 20 minutos es gratuita y no representa ningún compromiso de continuar el proceso.",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="rounded-[1.5rem] bg-warm-white border border-beige-200 p-5 flex gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <m.icon size={16} className="text-sage-600" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sage-800 text-sm mb-1">{m.title}</p>
                  <p className="font-sans text-xs text-sage-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 4. Honorarios */}
        <FadeIn as="section">
          <SectionHeader index="04" title="Honorarios y Forma de Pago" />
          <p className="font-sans text-sage-700 leading-relaxed">
            El costo de cada sesión se comparte directamente al agendar la llamada inicial, ya
            que puede variar según la modalidad (individual, pareja, EMDR) y la frecuencia
            acordada. Los pagos se realizan por transferencia bancaria o los medios que se
            indiquen al confirmar la cita, antes o al inicio de cada sesión, salvo que se acuerde
            otra cosa por escrito.
          </p>
        </FadeIn>

        {/* 5. Sesiones online */}
        <FadeIn as="section">
          <SectionHeader index="05" title="Sesiones Online" />
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
              <Video size={16} className="text-sage-600" />
            </div>
            <p className="font-sans text-sage-700 leading-relaxed">
              Para las sesiones online, es tu responsabilidad contar con una conexión a
              internet estable y un espacio privado donde puedas hablar con libertad. Las
              sesiones se realizan en plataformas de videollamada con cifrado, conforme a lo
              descrito en el Código de Ética. No se autoriza grabar, transmitir o compartir las
              sesiones sin consentimiento explícito y por escrito de ambas partes.
            </p>
          </div>
        </FadeIn>

        {/* 6. Confidencialidad */}
        <FadeIn as="section">
          <SectionHeader index="06" title="Confidencialidad" />
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
              <Lock size={16} className="text-sage-600" />
            </div>
            <p className="font-sans text-sage-700 leading-relaxed">
              El manejo de tus datos personales y clínicos se rige por el{" "}
              <Link href="/aviso-de-privacidad" className="underline hover:text-sage-900">
                Aviso de Privacidad
              </Link>{" "}
              conforme a la LFPDPPP, y el manejo de la información compartida en sesión se rige
              por el{" "}
              <Link href="/codigo-de-etica" className="underline hover:text-sage-900">
                Código de Ética
              </Link>{" "}
              profesional.
            </p>
          </div>
        </FadeIn>

        {/* 7. Propiedad intelectual */}
        <FadeIn as="section">
          <SectionHeader index="07" title="Propiedad Intelectual del Sitio" />
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
              <Copyright size={16} className="text-sage-600" />
            </div>
            <p className="font-sans text-sage-700 leading-relaxed">
              Los textos, gráficos y diseño de este sitio web son propiedad de la Dra. Sofía
              Ramírez y no pueden reproducirse, distribuirse ni utilizarse con fines comerciales
              sin autorización previa por escrito.
            </p>
          </div>
        </FadeIn>

        {/* 8. Limitación de responsabilidad */}
        <FadeIn as="section">
          <SectionHeader index="08" title="Limitación de Responsabilidad" />
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
              <ShieldAlert size={16} className="text-sage-600" />
            </div>
            <p className="font-sans text-sage-700 leading-relaxed">
              El contenido informativo de este sitio (artículos, descripciones de
              especialidades, preguntas frecuentes) tiene fines orientativos y no sustituye una
              valoración clínica individual. Los resultados de un proceso terapéutico dependen de
              múltiples factores personales y no pueden garantizarse.
            </p>
          </div>
        </FadeIn>

        {/* 9. Modificaciones */}
        <FadeIn as="section">
          <SectionHeader index="09" title="Modificaciones a estos Términos" />
          <p className="font-sans text-sage-700 leading-relaxed">
            Estos términos pueden actualizarse periódicamente. La versión vigente siempre estará
            disponible en esta página, con la fecha de última actualización visible en el
            encabezado.
          </p>
        </FadeIn>

        {/* 10. Ley aplicable */}
        <FadeIn as="section">
          <div className="flex items-center gap-3 mb-6 border-b border-beige-200 pb-4">
            <span className="font-display text-lg text-terracota-500 flex-shrink-0">10</span>
            <h2 className="font-display text-2xl md:text-3xl text-sage-900 flex items-center gap-3">
              <Scale size={20} className="text-sage-500" />
              Ley Aplicable
            </h2>
          </div>
          <p className="font-sans text-sage-700 leading-relaxed">
            Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos
            y, en particular, por las del Estado de Nuevo León. Cualquier controversia se
            resolverá ante los tribunales competentes de Monterrey, Nuevo León.
          </p>
        </FadeIn>

        {/* 11. Contacto */}
        <FadeIn
          as="section"
          className="rounded-[2rem] bg-sage-900 text-warm-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 -translate-y-1/4" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              ¿Tienes preguntas sobre estos términos?
            </h2>
            <p className="font-sans opacity-75 leading-relaxed mb-6 max-w-lg">
              Escríbeme y con gusto te explico cualquier punto antes de que agendes tu primera
              sesión.
            </p>
            <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 max-w-fit">
              <Mail size={16} className="opacity-80 flex-shrink-0" />
              <p className="text-sm font-medium font-sans">sofia@psicologamonterrey.mx</p>
            </div>
          </div>
        </FadeIn>

        {/* Navegación inferior */}
        <FadeIn
          as="div"
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-beige-200 text-sm font-sans"
        >
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
        </FadeIn>

        <p className="text-center text-xs font-sans text-sage-400">
          Términos y Condiciones v1.0 · Última actualización: Abril 2026
        </p>
      </main>
    </div>
  );
}
