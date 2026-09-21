import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Database,
  UserCheck,
  Mail,
  Shield,
  FileText,
  RefreshCw,
  Trash2,
  Eye,
  AlertCircle,
  Globe,
  CheckCircle,
  Server,
  Cookie,
  Phone,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Underline from "@/components/Underline";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Dra. Sofía Ramírez — Psicóloga",
  description:
    "Aviso de privacidad conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Conoce cómo se tratan tus datos personales.",
  robots: { index: true, follow: true },
};

const dataCategories = [
  {
    icon: UserCheck,
    title: "Datos de identificación",
    items: ["Nombre completo", "Fecha de nacimiento", "Género", "Estado civil"],
  },
  {
    icon: Phone,
    title: "Datos de contacto",
    items: ["Correo electrónico", "Número de teléfono / WhatsApp", "Dirección (opcional)", "Ciudad de residencia"],
  },
  {
    icon: FileText,
    title: "Datos clínicos y sensibles",
    items: [
      "Motivo de consulta",
      "Historia clínica y psicológica",
      "Diagnósticos (cuando aplique)",
      "Notas de sesión y avances terapéuticos",
    ],
  },
  {
    icon: Globe,
    title: "Datos de navegación",
    items: [
      "Dirección IP (anonimizada)",
      "Tipo de dispositivo y navegador",
      "Páginas visitadas y tiempo de sesión",
      "Cookies de preferencias (ver sección de cookies)",
    ],
  },
];

const rights = [
  {
    letter: "A",
    name: "Acceso",
    desc: "Conocer qué datos personales tenemos sobre ti y para qué los usamos.",
    icon: Eye,
  },
  {
    letter: "R",
    name: "Rectificación",
    desc: "Solicitar la corrección de tus datos cuando sean inexactos o incompletos.",
    icon: RefreshCw,
  },
  {
    letter: "C",
    name: "Cancelación",
    desc: "Pedir la eliminación de tus datos cuando ya no sean necesarios o cuando retires tu consentimiento.",
    icon: Trash2,
  },
  {
    letter: "O",
    name: "Oposición",
    desc: "Oponerte al tratamiento de tus datos para finalidades específicas.",
    icon: Shield,
  },
  {
    letter: "P",
    name: "Portabilidad",
    desc: "Solicitar una copia de tus datos en formato electrónico estructurado.",
    icon: Database,
  },
  {
    letter: "L",
    name: "Limitación",
    desc: "Solicitar que se restrinja el tratamiento de tus datos en determinadas circunstancias.",
    icon: Lock,
  },
];

const thirdParties = [
  {
    name: "Plataforma de videollamadas (Zoom / Google Meet)",
    purpose: "Realización de sesiones terapéuticas online",
    protection: "Cifrado de extremo a extremo · Sin grabaciones sin consentimiento",
  },
  {
    name: "YouCanBook.me",
    purpose: "Gestión de agenda y citas",
    protection: "Datos mínimos necesarios · Política de privacidad propia",
  },
  {
    name: "Proveedor de correo electrónico (Google Workspace)",
    purpose: "Comunicación con consultantes",
    protection: "Servidor en la UE/EUA · Cifrado en tránsito",
  },
  {
    name: "Servicios de analítica web (Plausible Analytics)",
    purpose: "Estadísticas de visitas al sitio web",
    protection: "Sin cookies · Datos anonimizados · Cumple GDPR",
  },
];

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6 border-b border-beige-200 pb-4">
      <span className="font-display text-lg text-terracota-500 flex-shrink-0">{index}</span>
      <h2 className="font-display text-2xl md:text-3xl text-sage-900">{title}</h2>
    </div>
  );
}

export default function AvisoDePrivacidad() {
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
            Aviso de
            <br />
            <Underline color="text-terracota-400">Privacidad</Underline>
          </h1>
          <p className="font-sans text-warm-white/70 max-w-xl leading-relaxed">
            Conforme a la Ley Federal de Protección de Datos Personales en Posesión de
            los Particulares (LFPDPPP) y su Reglamento, te informamos cómo recopilamos,
            usamos y protegemos tus datos personales.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-sans text-warm-white/50 border-t border-white/10 pt-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Conforme a LFPDPPP
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Última actualización: Abril 2026
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              Versión 2.1
            </span>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {/* 1. Identidad del responsable */}
        <FadeIn as="section">
          <SectionHeader index="01" title="Identidad del Responsable" />
          <div className="rounded-[1.5rem] bg-beige-50 border border-beige-200 overflow-hidden">
            <table className="w-full text-sm font-sans">
              <tbody className="divide-y divide-beige-200">
                {[
                  ["Nombre / Razón social", "Dra. Sofía Ramírez García"],
                  ["RFC", "RAGS900101XXX"],
                  ["Cédula Profesional", "12345678"],
                  ["Domicilio", "Colonia Del Valle, Monterrey, Nuevo León, México"],
                  ["Correo electrónico", "privacidad@psicologamonterrey.mx"],
                  ["Teléfono", "+52 81 1234 5678"],
                  ["Sitio web", "www.psicologamonterrey.mx"],
                ].map(([label, value]) => (
                  <tr key={label} className="hover:bg-beige-100 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-sage-700 w-2/5">{label}</td>
                    <td className="px-6 py-3.5 text-sage-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* 2. Datos personales */}
        <FadeIn as="section">
          <SectionHeader index="02" title="Datos Personales que Recabamos" />
          <p className="font-sans text-sage-600 leading-relaxed mb-6">
            Únicamente recabamos los datos necesarios para prestar el servicio terapéutico.
            Los datos clínicos y psicológicos son considerados datos sensibles conforme al
            artículo 3, fracción VI de la LFPDPPP, y reciben un nivel de protección especial.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {dataCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-[1.5rem] bg-warm-white border border-beige-200 p-5 hover:border-sage-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center">
                    <cat.icon size={16} className="text-sage-600" />
                  </div>
                  <h3 className="font-sans font-medium text-sage-800 text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-sage-600 font-sans">
                      <CheckCircle size={12} className="text-sage-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 3. Finalidades */}
        <FadeIn as="section">
          <SectionHeader index="03" title="Finalidades del Tratamiento" />
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-sage-50 border border-sage-200 p-6">
              <h3 className="font-sans font-semibold text-sage-800 mb-3 flex items-center gap-2">
                <CheckCircle size={16} className="text-sage-500" />
                Finalidades primarias (necesarias para el servicio)
              </h3>
              <ul className="space-y-2">
                {[
                  "Brindar atención psicológica y psicoterapéutica individual o de pareja.",
                  "Llevar el expediente clínico conforme a la NOM-004-SSA3-2012.",
                  "Programar, confirmar y gestionar citas y sesiones.",
                  "Emitir comprobantes de pago y gestión administrativa básica.",
                  "Dar seguimiento al proceso terapéutico y evaluar su efectividad.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-sage-700 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] bg-beige-50 border border-beige-200 p-6">
              <h3 className="font-sans font-semibold text-sage-800 mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-beige-600" />
                Finalidades secundarias (puedes oponerte)
              </h3>
              <ul className="space-y-2">
                {[
                  "Envío de información sobre talleres, grupos terapéuticos o recursos de salud mental.",
                  "Encuestas de satisfacción para mejora del servicio.",
                  "Estadísticas clínicas anonimizadas con fines de investigación académica.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-sage-700 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-beige-400 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-sage-500 font-sans mt-3">
                Para oponerte a estas finalidades secundarias, envía un correo a
                privacidad@psicologamonterrey.mx indicando &quot;Oposición a finalidades secundarias&quot;.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 4. Transferencias */}
        <FadeIn as="section">
          <SectionHeader index="04" title="Transferencia a Terceros" />
          <p className="font-sans text-sage-600 mb-6 leading-relaxed">
            Tus datos personales no se venden, arriendan ni ceden a terceros sin tu consentimiento,
            salvo los casos previstos en la Ley. Utilizamos los siguientes proveedores de
            servicios (encargados del tratamiento) bajo estrictos acuerdos de confidencialidad:
          </p>
          <div className="space-y-3">
            {thirdParties.map((tp) => (
              <div
                key={tp.name}
                className="rounded-[1.5rem] bg-warm-white border border-beige-200 p-5 grid sm:grid-cols-3 gap-3 hover:border-sage-300 transition-colors"
              >
                <div>
                  <p className="text-xs text-sage-400 font-sans uppercase tracking-wide mb-1">Proveedor</p>
                  <p className="text-sm font-medium text-sage-800 font-sans">{tp.name}</p>
                </div>
                <div>
                  <p className="text-xs text-sage-400 font-sans uppercase tracking-wide mb-1">Finalidad</p>
                  <p className="text-sm text-sage-700 font-sans">{tp.purpose}</p>
                </div>
                <div>
                  <p className="text-xs text-sage-400 font-sans uppercase tracking-wide mb-1">Protección</p>
                  <p className="text-sm text-sage-600 font-sans">{tp.protection}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 rounded-[1.5rem] bg-terracota-50 border border-terracota-200">
            <p className="text-sm font-sans text-sage-700 flex gap-3 items-start">
              <AlertCircle size={16} className="text-terracota-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Excepciones legales:</strong> Podemos divulgar información sin consentimiento
                cuando exista riesgo inminente a la vida del consultante o de terceros, cuando lo
                requiera una autoridad judicial competente, o cuando sea necesario para proteger
                derechos de terceros conforme a la ley aplicable.
              </span>
            </p>
          </div>
        </FadeIn>

        {/* 5. Derechos ARCOPL */}
        <FadeIn as="section">
          <SectionHeader index="05" title="Tus Derechos (ARCOPL)" />
          <p className="font-sans text-sage-600 mb-6 leading-relaxed">
            Tienes derecho a Acceder, Rectificar, Cancelar y Oponerte al tratamiento de tus
            datos personales, así como a la Portabilidad y Limitación del mismo. Para
            ejercerlos, envía una solicitud a <strong>privacidad@psicologamonterrey.mx</strong>
            {" "}con el asunto &quot;Ejercicio de derechos ARCOPL&quot; e incluye una copia de tu
            identificación oficial.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r) => (
              <div
                key={r.letter}
                className="rounded-[1.5rem] bg-warm-white border border-beige-200 p-5 hover:border-sage-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center">
                    <r.icon size={16} className="text-sage-600" />
                  </div>
                  <p className="text-xs font-sans font-bold text-sage-800">
                    {r.letter} — {r.name}
                  </p>
                </div>
                <p className="font-sans text-xs text-sage-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-[1.5rem] bg-sage-50 border border-sage-200">
            <p className="text-sm font-sans text-sage-700">
              <strong>Plazo de respuesta:</strong> Responderemos a tu solicitud dentro de los
              20 días hábiles siguientes a su recepción, conforme al artículo 32 de la LFPDPPP.
              Si la solicitud es procedente, tendremos 15 días hábiles para hacerla efectiva.
            </p>
          </div>
        </FadeIn>

        {/* 6. Seguridad */}
        <FadeIn as="section">
          <SectionHeader index="06" title="Medidas de Seguridad" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "Cifrado", desc: "Los expedientes clínicos digitales están cifrados con AES-256. Las sesiones online utilizan cifrado de extremo a extremo." },
              { icon: Server, title: "Almacenamiento", desc: "Los datos clínicos se almacenan en servidores con certificación ISO 27001 ubicados en México o la UE." },
              { icon: UserCheck, title: "Acceso restringido", desc: "Únicamente la psicóloga tratante tiene acceso a tu expediente. No existe personal administrativo con acceso a datos clínicos." },
              { icon: RefreshCw, title: "Respaldo y destrucción", desc: "Los datos se respaldan semanalmente. Al vencer el plazo legal (5 años post-alta), se destruyen de forma segura." },
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

        {/* 7. Cookies */}
        <FadeIn as="section">
          <SectionHeader index="07" title="Uso de Cookies" />
          <div className="rounded-[1.5rem] bg-beige-50 border border-beige-200 overflow-hidden">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-beige-100">
                  <th className="text-left px-6 py-3 text-xs font-medium text-sage-700 uppercase tracking-wide">Tipo</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-sage-700 uppercase tracking-wide">Finalidad</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-sage-700 uppercase tracking-wide">¿Puedes rechazarlas?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-200">
                {[
                  ["Técnicas / esenciales", "Funcionamiento básico del sitio web", "No (necesarias)"],
                  ["Analítica anonimizada", "Estadísticas de visitas (sin identificación personal)", "Sí"],
                  ["Preferencias", "Recordar idioma y configuración", "Sí"],
                  ["Marketing / rastreo", "No se utilizan", "N/A"],
                ].map(([type, purpose, opt]) => (
                  <tr key={type} className="hover:bg-beige-100 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-sage-700">{type}</td>
                    <td className="px-6 py-3.5 text-sage-600">{purpose}</td>
                    <td className="px-6 py-3.5 text-sage-600">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* 8. Cambios */}
        <FadeIn as="section">
          <SectionHeader index="08" title="Cambios al Aviso de Privacidad" />
          <p className="font-sans text-sage-700 leading-relaxed">
            Este aviso puede actualizarse periódicamente para reflejar cambios en la ley,
            en los servicios ofrecidos o en las prácticas de manejo de datos. La versión
            vigente siempre estará disponible en este sitio web. Cuando los cambios sean
            sustanciales, se te notificará por correo electrónico con al menos 10 días
            de anticipación.
          </p>
        </FadeIn>

        {/* 9. Contacto DPO */}
        <FadeIn as="section" className="rounded-[2rem] bg-sage-900 text-warm-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 -translate-y-1/4" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              ¿Tienes preguntas sobre tu privacidad?
            </h2>
            <p className="font-sans opacity-75 leading-relaxed mb-6 max-w-lg">
              Para ejercer tus derechos ARCOPL, plantear dudas o presentar una queja relacionada
              con el tratamiento de tus datos personales, contáctanos:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-lg">
              {[
                { icon: Mail, label: "Correo", value: "privacidad@psicologamonterrey.mx" },
                { icon: Phone, label: "Teléfono", value: "+52 81 1234 5678" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3">
                  <c.icon size={16} className="opacity-80 flex-shrink-0" />
                  <div>
                    <p className="text-xs opacity-70 font-sans">{c.label}</p>
                    <p className="text-sm font-medium font-sans">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs opacity-60 font-sans">
              También puedes presentar una queja ante el{" "}
              <a
                href="https://www.inai.org.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-90"
              >
                Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)
              </a>
            </p>
          </div>
        </FadeIn>

        {/* Navegación inferior */}
        <FadeIn
          as="div"
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-beige-200 text-sm font-sans"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-sage-300 hover:border-sage-500 text-sage-700 hover:text-sage-900 rounded-full transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
          <Link
            href="/codigo-de-etica"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-800 hover:bg-sage-900 text-warm-white rounded-full transition-colors"
          >
            Ver Código de Ética
            <ArrowUpRight size={14} />
          </Link>
        </FadeIn>

        <p className="text-center text-xs font-sans text-sage-400">
          Aviso de Privacidad v2.1 · Última actualización: Abril 2026 · Conforme a LFPDPPP
        </p>
      </main>
    </div>
  );
}
