# Dra. Sofía Ramírez — Sitio web

Landing page de una sola página para el consultorio privado de la Dra. Sofía Ramírez, psicóloga clínica en Monterrey, N.L. Construido con Next.js (App Router), TypeScript y Tailwind CSS.

## Tecnologías

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [Radix UI](https://www.radix-ui.com/) (accordion, dialog) y [lucide-react](https://lucide.dev/) para iconos

## Requisitos

- Node.js 18 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Scripts disponibles

| Comando         | Descripción                                    |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Levanta el servidor de desarrollo                |
| `npm run build` | Genera el build de producción                    |
| `npm run start` | Sirve el build de producción                     |
| `npm run lint`  | Corre ESLint sobre el proyecto                   |

## Estructura del proyecto

```
app/
  layout.tsx              # Layout raíz y metadata SEO global
  page.tsx                # Página principal (compone todas las secciones)
  globals.css             # Estilos globales, paleta y utilidades Tailwind
  aviso-de-privacidad/    # Página de aviso de privacidad (LFPDPPP)
  codigo-de-etica/        # Página de código de ética profesional
components/
  Nav.tsx                 # Barra de navegación (desktop + menú móvil)
  Hero.tsx                # Sección de portada
  About.tsx               # Sección "Sobre mí"
  Specialties.tsx         # Especialidades / áreas de atención
  Process.tsx             # Cómo funciona el proceso terapéutico
  Testimonials.tsx        # Testimonios de pacientes
  Faq.tsx                 # Preguntas frecuentes
  Contact.tsx             # Formulario de contacto + calendario de citas
  Footer.tsx              # Pie de página
```

## Personalización

- **Colores y tipografía**: la paleta ("Cálido y Terroso": `sage`, `beige`, `terracota`) y las fuentes (`Cormorant Garamond`, `Playfair Display`, `Inter`) se definen en `tailwind.config.ts` y `app/globals.css`.
- **Datos de contacto**: edita el arreglo `contactInfo` en `components/Contact.tsx` (dirección, WhatsApp, correo, horarios).
- **Agenda de citas**: el formulario incluye un iframe de [YouCanBook.me](https://youcanbook.me) embebido en `components/Contact.tsx`; reemplaza la URL del `src` con tu propio slug de YouCanBook.me.
- **Envío del formulario**: actualmente `handleSubmit` en `components/Contact.tsx` solo simula el envío (no hay backend conectado). Para hacerlo funcional hay que integrar un servicio como [Resend](https://resend.com/) o [EmailJS](https://www.emailjs.com/).
- **Imágenes**: se usan fotos de stock de Unsplash. Los dominios permitidos están declarados en `next.config.ts` (`images.unsplash.com`, `plus.unsplash.com`); si usas otro origen de imágenes hay que agregarlo ahí.

## Aviso de privacidad y código de ética

El sitio incluye dos páginas legales independientes (`/aviso-de-privacidad` y `/codigo-de-etica`) conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Actualízalas si cambian los datos que se recaban o las prácticas del consultorio.
