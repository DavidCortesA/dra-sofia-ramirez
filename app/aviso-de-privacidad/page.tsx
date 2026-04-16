import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
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

export default function AvisoDePrivacidad() {
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
              <Lock size={22} className="text-warm-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-sage-400 font-sans mb-2">
                Dra. Sofía Ramírez · Psicóloga Clínica
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium mb-3">
                Aviso de Privacidad
              </h1>
              <p className="font-sans text-warm-white/70 max-w-2xl leading-relaxed">
                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de
                los Particulares (LFPDPPP) y su Reglamento, te informamos cómo recopilamos,
                usamos y protegemos tus datos personales.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 text-xs font-sans text-warm-white/60">
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
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-14">

        {/* 1. Identidad del responsable */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-terracota-100 flex items-center justify-center">
              <UserCheck size={16} className="text-terracota-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              1. Identidad del Responsable
            </h2>
          </div>

          <div className="rounded-3xl bg-beige-50 border border-beige-200 overflow-hidden">
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
        </section>

        {/* 2. Datos personales */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center">
              <Database size={16} className="text-sage-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              2. Datos Personales que Recabamos
            </h2>
          </div>
          <p className="font-sans text-sage-600 leading-relaxed mb-6">
            Únicamente recabamos los datos necesarios para prestar el servicio terapéutico.
            Los datos clínicos y psicológicos son considerados datos sensibles conforme al
            artículo 3, fracción VI de la LFPDPPP, y reciben un nivel de protección especial.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {dataCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl bg-warm-white border border-beige-200 p-5 hover:border-sage-300 transition-colors"
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
        </section>

        {/* 3. Finalidades */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-terracota-100 flex items-center justify-center">
              <FileText size={16} className="text-terracota-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              3. Finalidades del Tratamiento
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-sage-50 border border-sage-200 p-6">
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

            <div className="rounded-2xl bg-beige-50 border border-beige-200 p-6">
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
        </section>

        {/* 4. Transferencias */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center">
              <Server size={16} className="text-sage-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              4. Transferencia a Terceros
            </h2>
          </div>
          <p className="font-sans text-sage-600 mb-6 leading-relaxed">
            Tus datos personales no se venden, arriendan ni ceden a terceros sin tu consentimiento,
            salvo los casos previstos en la Ley. Utilizamos los siguientes proveedores de
            servicios (encargados del tratamiento) bajo estrictos acuerdos de confidencialidad:
          </p>
          <div className="space-y-3">
            {thirdParties.map((tp) => (
              <div
                key={tp.name}
                className="rounded-2xl bg-warm-white border border-beige-200 p-5 grid sm:grid-cols-3 gap-3 hover:border-sage-300 transition-colors"
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

          <div className="mt-5 p-5 rounded-2xl bg-terracota-50 border border-terracota-200">
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
        </section>

        {/* 5. Derechos ARCOPL */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-terracota-100 flex items-center justify-center">
              <Shield size={16} className="text-terracota-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              5. Tus Derechos (ARCOPL)
            </h2>
          </div>
          <p className="font-sans text-sage-600 mb-6 leading-relaxed">
            Tienes derecho a Acceder, Rectificar, Cancelar y Oponerte al tratamiento de tus
            datos personales, así como a la Portabilidad y Limitación del mismo. Para
            ejercerlos, envía una solicitud a <strong>privacidad@psicologamonterrey.mx</strong>
            con el asunto &quot;Ejercicio de derechos ARCOPL&quot; e incluye una copia de tu
            identificación oficial.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r) => (
              <div
                key={r.letter}
                className="rounded-2xl bg-warm-white border border-beige-200 p-5 hover:border-sage-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center">
                    <r.icon size={16} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="text-xs font-sans font-bold text-sage-800">
                      {r.letter} — {r.name}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-xs text-sage-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-sage-50 border border-sage-200">
            <p className="text-sm font-sans text-sage-700">
              <strong>Plazo de respuesta:</strong> Responderemos a tu solicitud dentro de los
              20 días hábiles siguientes a su recepción, conforme al artículo 32 de la LFPDPPP.
              Si la solicitud es procedente, tendremos 15 días hábiles para hacerla efectiva.
            </p>
          </div>
        </section>

        {/* 6. Seguridad */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center">
              <Shield size={16} className="text-sage-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              6. Medidas de Seguridad
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "Cifrado", desc: "Los expedientes clínicos digitales están cifrados con AES-256. Las sesiones online utilizan cifrado de extremo a extremo." },
              { icon: Server, title: "Almacenamiento", desc: "Los datos clínicos se almacenan en servidores con certificación ISO 27001 ubicados en México o la UE." },
              { icon: UserCheck, title: "Acceso restringido", desc: "Únicamente la psicóloga tratante tiene acceso a tu expediente. No existe personal administrativo con acceso a datos clínicos." },
              { icon: RefreshCw, title: "Respaldo y destrucción", desc: "Los datos se respaldan semanalmente. Al vencer el plazo legal (5 años post-alta), se destruyen de forma segura." },
            ].map((m) => (
              <div
                key={m.title}
                className="rounded-2xl bg-warm-white border border-beige-200 p-5 flex gap-4"
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
        </section>

        {/* 7. Cookies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-beige-100 flex items-center justify-center">
              <Cookie size={16} className="text-beige-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              7. Uso de Cookies
            </h2>
          </div>
          <div className="rounded-3xl bg-beige-50 border border-beige-200 overflow-hidden">
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
        </section>

        {/* 8. Cambios */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-terracota-100 flex items-center justify-center">
              <RefreshCw size={16} className="text-terracota-600" />
            </div>
            <h2 className="font-display text-2xl text-sage-900">
              8. Cambios al Aviso de Privacidad
            </h2>
          </div>
          <p className="font-sans text-sage-700 leading-relaxed">
            Este aviso puede actualizarse periódicamente para reflejar cambios en la ley,
            en los servicios ofrecidos o en las prácticas de manejo de datos. La versión
            vigente siempre estará disponible en este sitio web. Cuando los cambios sean
            sustanciales, se te notificará por correo electrónico con al menos 10 días
            de anticipación.
          </p>
        </section>

        {/* 9. Contacto DPO */}
        <section className="rounded-3xl bg-gradient-to-br from-sage-500 to-sage-700 text-warm-white p-8 md:p-10">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-sage-600 flex items-center justify-center flex-shrink-0">
              <Mail size={22} />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl mb-2">¿Tienes preguntas sobre tu privacidad?</h2>
              <p className="font-sans opacity-85 leading-relaxed mb-6">
                Para ejercer tus derechos ARCOPL, plantear dudas o presentar una queja relacionada
                con el tratamiento de tus datos personales, contáctanos:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Mail, label: "Correo", value: "privacidad@psicologamonterrey.mx" },
                  { icon: Phone, label: "Teléfono", value: "+52 81 1234 5678" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 bg-warm-white/10 rounded-2xl px-4 py-3">
                    <c.icon size={16} className="opacity-80 flex-shrink-0" />
                    <div>
                      <p className="text-xs opacity-70 font-sans">{c.label}</p>
                      <p className="text-sm font-medium font-sans">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs opacity-70 font-sans">
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
          </div>
        </section>

        {/* Navegación inferior */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
          <Link
            href="/codigo-de-etica"
            className="text-sage-600 hover:text-sage-800 transition-colors underline underline-offset-2"
          >
            Ver Código de Ética →
          </Link>
        </div>

        <p className="text-center text-xs font-sans text-sage-400">
          Aviso de Privacidad v2.1 · Última actualización: Abril 2026 · Conforme a LFPDPPP
        </p>
      </main>
    </div>
  );
}
