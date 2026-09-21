export type Lang = "es" | "en";

const es = {
  nav: {
    links: [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Especialidades", href: "#especialidades" },
      { label: "Cómo trabajo", href: "#proceso" },
      { label: "Preguntas", href: "#faq" },
    ],
    saberMas: "Saber más",
    agendar: "Agendar sesión",
    menuAria: "Menú",
  },
  hero: {
    kicker: "Psicóloga clínica · Monterrey",
    titleBefore: "No cargues",
    titleAccent: "sola",
    titleAfter: "con todo lo que sientes.",
    subtitle:
      "La terapia puede ayudarte a entenderte mejor, sanar lo que duele y encontrar la calma que mereces. Juntas construiremos ese camino.",
    ctaPrimary: "Agenda tu primera sesión",
    ctaSecondary: "Conóceme primero",
    cardName: "Sofía Ramírez",
    cardLicense: "Cédula Prof. 12345678 · Atención online y presencial",
    cardAvailable: "Agenda disponible",
    marqueeItems: [
      "Ansiedad",
      "Trauma y EMDR",
      "Relaciones",
      "Autoestima",
      "Terapia individual",
      "Sesiones online",
    ],
    features: [
      "Primera sesión sin costo",
      "Plan terapéutico a tu ritmo",
      "Atención 100% confidencial",
      "Presencial y online",
    ],
  },
  about: {
    eyebrow: "01 · Sobre mí",
    titleBefore: "Alguien que",
    titleAccent: "realmente te escucha",
    credentialTag:
      "Doctora en Psicología Clínica por la UANL, con certificación internacional en EMDR.",
    badgeTitle: "Psicóloga Clínica",
    badgeCred: "Cédula Prof. 12345678",
    badgeEmdr: "Certificada en EMDR",
    quote:
      "Creo que cada persona ya tiene dentro de sí lo que necesita para sanar. Mi trabajo es ayudarte a encontrarlo.",
    paragraphs: [
      "Sé lo que es sentir que algo en tu interior pide atención y no saber por dónde empezar. Por eso me convertí en psicóloga: para acompañar a personas como tú en ese proceso de autoconocimiento y sanación.",
      "Llevo más de 8 años trabajando con adultos que enfrentan ansiedad, trauma, dificultades relacionales y crisis de identidad. Mi consultorio en Monterrey —y mis sesiones online— son espacios donde no hay juicios.",
    ],
    values: [
      {
        title: "Calidez genuina",
        desc: "Cada persona que entra a mi consultorio merece sentirse vista, escuchada y respetada tal como es.",
      },
      {
        title: "Enfoque basado en evidencia",
        desc: "Integro TCC, EMDR y mindfulness para ofrecer herramientas que realmente funcionan.",
      },
      {
        title: "Crecimiento real",
        desc: "No busco que dependas de la terapia; te ayudo a desarrollar las habilidades para florecer por tu cuenta.",
      },
    ],
    cta: "Comienza tu proceso →",
  },
  specialties: {
    eyebrow: "02 · Especialidades",
    titleBefore: "¿En qué te puedo",
    titleAccent: "ayudar",
    titleAfter: "?",
    subtitle:
      "Si lo que vives no aparece aquí, escríbeme. Seguro podemos encontrar el camino juntos.",
    items: [
      {
        id: "ansiedad",
        title: "Ansiedad",
        shortDesc: "Cuando tu mente no puede dejar de correr",
        description:
          "¿Sientes que la preocupación no te da descanso? ¿Tu cuerpo reacciona con tensión, insomnio o ataques de pánico? La ansiedad es tratable. Trabajamos con técnicas basadas en evidencia para que recuperes el control y la paz interior.",
        symptoms: ["Pensamientos acelerados", "Ataques de pánico", "Insomnio", "Tensión constante"],
      },
      {
        id: "trauma",
        title: "Trauma y EMDR",
        shortDesc: "Sanar lo que el pasado dejó en ti",
        description:
          "Las experiencias dolorosas del pasado no tienen que definir tu presente. Con EMDR y terapia focalizada en el trauma, procesamos esas heridas de forma segura para que dejen de afectar tu vida cotidiana.",
        symptoms: ["Recuerdos intrusivos", "Hipervigilancia", "Evitación", "Reacciones desproporcionadas"],
      },
      {
        id: "relaciones",
        title: "Relaciones",
        shortDesc: "Vínculos más sanos, contigo y con los demás",
        description:
          "¿Sientes que siempre terminas en los mismos patrones relacionales? Trabajamos los estilos de apego, la comunicación y los límites para que puedas construir relaciones auténticas y nutritivas.",
        symptoms: ["Codependencia", "Miedos al abandono", "Límites difusos", "Conflictos repetidos"],
      },
      {
        id: "autoestima",
        title: "Autoestima e Identidad",
        shortDesc: "Reconocer tu valor y vivir auténticamente",
        description:
          "¿La autocrítica domina tu mente? ¿Sientes que no eres suficiente? Exploramos las creencias que tienes sobre ti mismo y construimos una relación más compasiva y honesta contigo.",
        symptoms: ["Autocrítica excesiva", "Perfeccionismo", "Inseguridad", "Baja autoconfianza"],
      },
    ],
    cardCta: "Quiero trabajar esto →",
  },
  process: {
    eyebrow: "03 · Cómo trabajo",
    titleBefore: "Tu proceso,",
    titleAccent: "paso a paso",
    steps: [
      {
        number: "01",
        title: "Primer contacto",
        desc: "Me escribes o llenas el formulario. En menos de 24 horas te respondo para programar una llamada gratuita de 20 minutos. Sin costo, sin presión.",
        detail: "Sin compromiso · Respuesta en 24h",
      },
      {
        number: "02",
        title: "Sesión inicial",
        desc: "Nos conocemos en una sesión de 50 minutos. Cuéntame lo que vives, lo que esperas y tus dudas. Evaluamos juntos si somos un buen match terapéutico.",
        detail: "50 minutos · Presencial u online",
      },
      {
        number: "03",
        title: "Proceso terapéutico",
        desc: "Diseñamos un plan personalizado. Sesiones semanales o quincenales donde trabajamos con técnicas basadas en evidencia adaptadas a tu ritmo.",
        detail: "Plan personalizado · A tu ritmo",
      },
      {
        number: "04",
        title: "Transformación",
        desc: "No se trata de llegar a un punto de perfección, sino de construir una vida más consciente, auténtica y en paz. Tú llevas las herramientas para siempre.",
        detail: "Habilidades para toda la vida",
      },
    ],
    ctaTitle: "¿Lista para dar el primer paso?",
    ctaDesc: "La llamada inicial es gratuita y sin compromiso. Solo cuéntame lo que vives.",
    ctaButton: "Agenda una llamada →",
  },
  testimonials: {
    eyebrow: "04 · Testimonios",
    titleBefore: "Lo que dicen quienes",
    titleAccent: "ya dieron el paso",
    prevAria: "Testimonio anterior",
    nextAria: "Siguiente testimonio",
    dotAria: "Ver testimonio",
    disclaimer: "* Los nombres han sido modificados para proteger la privacidad de mis pacientes.",
    items: [
      {
        quote:
          "Antes de llegar con Sofía pensé que la terapia era \"para personas con problemas graves\". Ahora entiendo que es para cualquiera que quiera vivir mejor.",
        name: "Mariana G.",
        role: "Diseñadora · 29 años",
        topic: "Ansiedad y autoestima",
      },
      {
        quote:
          "Llevaba años evitando hablar de cosas que me pasaron de niño. Sofía creó un espacio donde me sentí seguro para hacerlo por primera vez. El trabajo con EMDR fue transformador.",
        name: "Rodrigo M.",
        role: "Ingeniero · 34 años",
        topic: "Trauma y EMDR",
      },
      {
        quote:
          "Mi relación de pareja estaba en un punto crítico. Las sesiones nos dieron herramientas concretas y me ayudaron a entender qué patrones míos estaban contribuyendo al problema.",
        name: "Daniela & Luis",
        role: "Terapia de pareja · Monterrey",
        topic: "Relaciones y comunicación",
      },
    ],
  },
  faq: {
    eyebrow: "05 · Preguntas frecuentes",
    titleBefore: "Tus dudas,",
    titleAccent: "resueltas",
    intro: "Es normal tener preguntas antes de empezar. Si la tuya no está aquí, escríbeme.",
    sideCtaTitle: "¿Tienes una pregunta diferente?",
    sideCtaDesc: "Escríbeme directamente. Respondo en 24 horas.",
    sideCtaLink: "Contáctame →",
    items: [
      {
        q: "¿Cómo sé si la terapia es para mí?",
        a: "Si sientes que algo en tu vida no está funcionando —ya sea en tus emociones, relaciones, trabajo o simplemente en cómo te sientes contigo mismo— la terapia puede ayudarte. No necesitas estar \"en crisis\" para buscar apoyo.",
      },
      {
        q: "¿Cuánto dura una sesión y cada cuándo son?",
        a: "Las sesiones individuales duran 50 minutos. Normalmente empezamos con una frecuencia semanal, que puede ir ajustándose a quincenal según tu proceso.",
      },
      {
        q: "¿Atiendes de forma online?",
        a: "Sí, ofrezco sesiones tanto presenciales (en mi consultorio en Monterrey) como online vía videollamada. Las sesiones online funcionan muy bien y son igual de efectivas.",
      },
      {
        q: "¿Qué pasa en la primera sesión?",
        a: "Es una conversación para conocernos: te haré algunas preguntas sobre lo que te trae a terapia y lo que esperas de este proceso. Al final evaluamos si somos un buen match.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "El costo lo compartimos directamente al agendar la llamada gratuita, ya que puede variar según la modalidad y la frecuencia. No quiero que el costo sea una barrera.",
      },
      {
        q: "¿Cómo agendo mi primera cita?",
        a: "Llena el formulario de contacto, escríbeme por WhatsApp o usa el botón de agendar. Te respondo en menos de 24 horas para confirmar el mejor horario para ti.",
      },
      {
        q: "¿La información que comparto es confidencial?",
        a: "Absolutamente. Todo lo que hablamos en sesión es estrictamente confidencial, como lo establece el código de ética de la psicología. Las únicas excepciones son situaciones de riesgo grave.",
      },
    ],
  },
  contact: {
    eyebrow: "06 · Contacto",
    titleBefore: "Da el primer paso",
    titleAccent: "hoy",
    introTitle: "Estoy aquí para escucharte",
    introDesc:
      "No tienes que tener todo claro antes de escribir. A veces lo único que se necesita es dar un pequeño paso hacia adelante.",
    infoItems: [
      {
        label: "Ubicación",
        value: "Col. Del Valle, Monterrey, N.L.",
        sub: "Sesiones presenciales y online",
      },
      {
        label: "WhatsApp",
        value: "+52 81 1234 5678",
        sub: "Respondo en menos de 24h",
      },
      {
        label: "Correo",
        value: "sofia@psicologamonterrey.mx",
        sub: "Para consultas generales",
      },
      {
        label: "Horarios",
        value: "Lunes a Viernes · 9am – 7pm",
        sub: "Sábados con cita previa",
      },
    ],
    showCalendar: "Ver disponibilidad y agendar",
    hideCalendar: "Ocultar calendario",
    calendarHint: "Agenda directamente en mi calendario — sin intermediarios",
    formTitle: "Cuéntame un poco sobre ti",
    formDesc: "Solo lo que quieras compartir. Todo en este espacio es confidencial.",
    labelName: "Tu nombre",
    labelEmail: "Correo",
    labelPhone: "WhatsApp (opcional)",
    labelTopic: "¿Sobre qué quieres trabajar?",
    labelMessage: "Tu mensaje",
    placeholderName: "¿Cómo te llamas?",
    placeholderEmail: "tu@correo.com",
    placeholderPhone: "+52 81 ...",
    placeholderMessage: "Cuéntame brevemente lo que te trae aquí. No hay respuestas correctas ni incorrectas...",
    topicPlaceholder: "Selecciona una opción...",
    topicOptions: [
      { value: "ansiedad", label: "Ansiedad o estrés" },
      { value: "trauma", label: "Trauma o experiencias pasadas" },
      { value: "relaciones", label: "Relaciones o vínculos" },
      { value: "autoestima", label: "Autoestima o identidad" },
      { value: "otro", label: "Otro / No estoy seguro/a" },
    ],
    sending: "Enviando...",
    submit: "Enviar mensaje",
    successTitle: "¡Mensaje enviado!",
    successDesc:
      "Gracias por escribirme. Te respondo en menos de 24 horas. Mientras tanto, respira. Ya diste el primer paso.",
    sendAnother: "Enviar otro mensaje",
    disclaimer:
      "Al enviar este formulario aceptas nuestra política de privacidad. Tu información es confidencial y nunca se compartirá con terceros.",
  },
  footer: {
    ctaBig: "Hablemos",
    brandName: "Dra. Sofía Ramírez",
    brandDesc:
      "Un espacio seguro para sanar, crecer y reconectarte con quien realmente eres. Monterrey y online.",
    navTitle: "Navegación",
    navLinks: [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Especialidades", href: "#especialidades" },
      { label: "Cómo trabajo", href: "#proceso" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Preguntas", href: "#faq" },
    ],
    specialtiesTitle: "Especialidades",
    specialtiesList: [
      "Psicólogo Monterrey",
      "Terapia para ansiedad",
      "Terapeuta online",
      "Terapia para trauma (EMDR)",
      "Terapia de pareja",
      "Psicólogo cerca de mí",
    ],
    rights: "Todos los derechos reservados",
    privacyLink: "Aviso de privacidad",
    ethicsLink: "Código de ética",
    termsLink: "Términos y condiciones",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "Esta página",
    titleAccent: "no existe",
    desc: "Parece que el enlace está roto o la página se movió. Volvamos a un lugar seguro.",
    cta: "Volver al inicio",
  },
  cookieBanner: {
    text: "Este sitio usa cookies técnicas y de análisis para mejorar tu experiencia. Puedes leer más en nuestro",
    linkText: "aviso de privacidad",
    accept: "Aceptar",
  },
};

const en: typeof es = {
  nav: {
    links: [
      { label: "About me", href: "#sobre-mi" },
      { label: "Specialties", href: "#especialidades" },
      { label: "How I work", href: "#proceso" },
      { label: "FAQ", href: "#faq" },
    ],
    saberMas: "Learn more",
    agendar: "Book a session",
    menuAria: "Menu",
  },
  hero: {
    kicker: "Clinical Psychologist · Monterrey",
    titleBefore: "You don't have to carry it",
    titleAccent: "alone",
    titleAfter: "— whatever you're feeling.",
    subtitle:
      "Therapy can help you understand yourself better, heal what hurts, and find the calm you deserve. Together, we'll build that path.",
    ctaPrimary: "Book your first session",
    ctaSecondary: "Get to know me first",
    cardName: "Sofía Ramírez",
    cardLicense: "License No. 12345678 · Online & in-person care",
    cardAvailable: "Booking available",
    marqueeItems: [
      "Anxiety",
      "Trauma & EMDR",
      "Relationships",
      "Self-esteem",
      "Individual therapy",
      "Online sessions",
    ],
    features: [
      "Free first session",
      "Therapy plan at your pace",
      "100% confidential care",
      "In-person & online",
    ],
  },
  about: {
    eyebrow: "01 · About me",
    titleBefore: "Someone who",
    titleAccent: "truly listens to you",
    credentialTag:
      "Doctor of Clinical Psychology (UANL), internationally certified in EMDR.",
    badgeTitle: "Clinical Psychologist",
    badgeCred: "License No. 12345678",
    badgeEmdr: "EMDR Certified",
    quote:
      "I believe every person already has within them what they need to heal. My job is to help you find it.",
    paragraphs: [
      "I know what it's like to feel that something inside you needs attention, without knowing where to start. That's why I became a psychologist: to walk alongside people like you through that process of self-discovery and healing.",
      "I've spent over 8 years working with adults facing anxiety, trauma, relationship struggles, and identity crises. My practice in Monterrey —and my online sessions— are judgment-free spaces.",
    ],
    values: [
      {
        title: "Genuine warmth",
        desc: "Everyone who walks into my practice deserves to feel seen, heard, and respected exactly as they are.",
      },
      {
        title: "Evidence-based approach",
        desc: "I combine CBT, EMDR, and mindfulness to offer tools that actually work.",
      },
      {
        title: "Real growth",
        desc: "My goal isn't for you to depend on therapy; it's to help you build the skills to thrive on your own.",
      },
    ],
    cta: "Start your journey →",
  },
  specialties: {
    eyebrow: "02 · Specialties",
    titleBefore: "How can I",
    titleAccent: "help",
    titleAfter: "you?",
    subtitle:
      "If what you're going through isn't listed here, write to me. We can surely find the way forward together.",
    items: [
      {
        id: "ansiedad",
        title: "Anxiety",
        shortDesc: "When your mind can't stop racing",
        description:
          "Do you feel like worry never gives you a break? Does your body react with tension, insomnia, or panic attacks? Anxiety is treatable. We work with evidence-based techniques so you can regain control and inner peace.",
        symptoms: ["Racing thoughts", "Panic attacks", "Insomnia", "Constant tension"],
      },
      {
        id: "trauma",
        title: "Trauma & EMDR",
        shortDesc: "Healing what the past left in you",
        description:
          "Painful past experiences don't have to define your present. With EMDR and trauma-focused therapy, we process those wounds safely so they stop affecting your daily life.",
        symptoms: ["Intrusive memories", "Hypervigilance", "Avoidance", "Disproportionate reactions"],
      },
      {
        id: "relaciones",
        title: "Relationships",
        shortDesc: "Healthier bonds, with yourself and others",
        description:
          "Do you feel like you always end up in the same relationship patterns? We work on attachment styles, communication, and boundaries so you can build authentic, nourishing relationships.",
        symptoms: ["Codependency", "Fear of abandonment", "Blurry boundaries", "Recurring conflicts"],
      },
      {
        id: "autoestima",
        title: "Self-Esteem & Identity",
        shortDesc: "Recognizing your worth and living authentically",
        description:
          "Does self-criticism dominate your mind? Do you feel like you're not enough? We explore the beliefs you hold about yourself and build a more compassionate, honest relationship with who you are.",
        symptoms: ["Excessive self-criticism", "Perfectionism", "Insecurity", "Low self-confidence"],
      },
    ],
    cardCta: "I want to work on this →",
  },
  process: {
    eyebrow: "03 · How I work",
    titleBefore: "Your process,",
    titleAccent: "step by step",
    steps: [
      {
        number: "01",
        title: "First contact",
        desc: "You write me or fill out the form. Within 24 hours I'll get back to you to schedule a free 20-minute call. No cost, no pressure.",
        detail: "No commitment · Response within 24h",
      },
      {
        number: "02",
        title: "Initial session",
        desc: "We get to know each other in a 50-minute session. Tell me what you're going through, what you expect, and your questions. We'll assess together whether we're a good therapeutic match.",
        detail: "50 minutes · In-person or online",
      },
      {
        number: "03",
        title: "Therapeutic process",
        desc: "We design a personalized plan. Weekly or biweekly sessions where we work with evidence-based techniques adapted to your pace.",
        detail: "Personalized plan · At your pace",
      },
      {
        number: "04",
        title: "Transformation",
        desc: "It's not about reaching perfection, but about building a more conscious, authentic, and peaceful life. You carry these tools with you forever.",
        detail: "Skills for life",
      },
    ],
    ctaTitle: "Ready to take the first step?",
    ctaDesc: "The initial call is free and no-commitment. Just tell me what you're going through.",
    ctaButton: "Book a call →",
  },
  testimonials: {
    eyebrow: "04 · Testimonials",
    titleBefore: "What people who",
    titleAccent: "already took the step say",
    prevAria: "Previous testimonial",
    nextAria: "Next testimonial",
    dotAria: "View testimonial",
    disclaimer: "* Names have been changed to protect the privacy of my clients.",
    items: [
      {
        quote:
          "Before meeting Sofía I thought therapy was \"for people with serious problems\". Now I understand it's for anyone who wants to live better.",
        name: "Mariana G.",
        role: "Designer · 29 years old",
        topic: "Anxiety and self-esteem",
      },
      {
        quote:
          "I had spent years avoiding talking about things that happened to me as a child. Sofía created a space where I felt safe doing it for the first time. The EMDR work was transformative.",
        name: "Rodrigo M.",
        role: "Engineer · 34 years old",
        topic: "Trauma & EMDR",
      },
      {
        quote:
          "My relationship was at a critical point. The sessions gave us concrete tools and helped me understand which of my own patterns were contributing to the problem.",
        name: "Daniela & Luis",
        role: "Couples therapy · Monterrey",
        topic: "Relationships and communication",
      },
    ],
  },
  faq: {
    eyebrow: "05 · FAQ",
    titleBefore: "Your questions,",
    titleAccent: "answered",
    intro: "It's normal to have questions before starting. If yours isn't here, write to me.",
    sideCtaTitle: "Have a different question?",
    sideCtaDesc: "Write to me directly. I respond within 24 hours.",
    sideCtaLink: "Contact me →",
    items: [
      {
        q: "How do I know if therapy is right for me?",
        a: "If you feel like something in your life isn't working —whether in your emotions, relationships, work, or simply how you feel about yourself— therapy can help. You don't need to be \"in crisis\" to seek support.",
      },
      {
        q: "How long is a session and how often are they?",
        a: "Individual sessions last 50 minutes. We usually start with a weekly frequency, which can be adjusted to biweekly depending on your process.",
      },
      {
        q: "Do you offer online sessions?",
        a: "Yes, I offer both in-person sessions (at my practice in Monterrey) and online sessions via video call. Online sessions work very well and are just as effective.",
      },
      {
        q: "What happens in the first session?",
        a: "It's a conversation to get to know each other: I'll ask you some questions about what brings you to therapy and what you expect from the process. At the end we assess whether we're a good match.",
      },
      {
        q: "How much does a session cost?",
        a: "We share the cost directly when scheduling the free call, since it can vary depending on the modality and frequency. I don't want cost to be a barrier.",
      },
      {
        q: "How do I book my first appointment?",
        a: "Fill out the contact form, write to me on WhatsApp, or use the booking button. I respond within 24 hours to confirm the best time for you.",
      },
      {
        q: "Is what I share confidential?",
        a: "Absolutely. Everything discussed in session is strictly confidential, as established by the code of ethics of psychology. The only exceptions are situations of serious risk.",
      },
    ],
  },
  contact: {
    eyebrow: "06 · Contact",
    titleBefore: "Take the first step",
    titleAccent: "today",
    introTitle: "I'm here to listen to you",
    introDesc:
      "You don't need to have everything figured out before writing. Sometimes all it takes is one small step forward.",
    infoItems: [
      {
        label: "Location",
        value: "Col. Del Valle, Monterrey, N.L.",
        sub: "In-person and online sessions",
      },
      {
        label: "WhatsApp",
        value: "+52 81 1234 5678",
        sub: "I respond within 24h",
      },
      {
        label: "Email",
        value: "sofia@psicologamonterrey.mx",
        sub: "For general inquiries",
      },
      {
        label: "Hours",
        value: "Monday to Friday · 9am – 7pm",
        sub: "Saturdays by appointment",
      },
    ],
    showCalendar: "See availability and book",
    hideCalendar: "Hide calendar",
    calendarHint: "Book directly on my calendar — no middlemen",
    formTitle: "Tell me a bit about yourself",
    formDesc: "Only what you'd like to share. Everything here is confidential.",
    labelName: "Your name",
    labelEmail: "Email",
    labelPhone: "WhatsApp (optional)",
    labelTopic: "What would you like to work on?",
    labelMessage: "Your message",
    placeholderName: "What's your name?",
    placeholderEmail: "you@email.com",
    placeholderPhone: "+52 81 ...",
    placeholderMessage: "Briefly tell me what brings you here. There are no right or wrong answers...",
    topicPlaceholder: "Select an option...",
    topicOptions: [
      { value: "ansiedad", label: "Anxiety or stress" },
      { value: "trauma", label: "Trauma or past experiences" },
      { value: "relaciones", label: "Relationships or bonds" },
      { value: "autoestima", label: "Self-esteem or identity" },
      { value: "otro", label: "Other / Not sure" },
    ],
    sending: "Sending...",
    submit: "Send message",
    successTitle: "Message sent!",
    successDesc:
      "Thank you for writing to me. I'll respond within 24 hours. In the meantime, breathe. You've already taken the first step.",
    sendAnother: "Send another message",
    disclaimer:
      "By submitting this form you agree to our privacy notice. Your information is confidential and will never be shared with third parties.",
  },
  footer: {
    ctaBig: "Let's talk",
    brandName: "Dra. Sofía Ramírez",
    brandDesc:
      "A safe space to heal, grow, and reconnect with who you really are. Monterrey and online.",
    navTitle: "Navigation",
    navLinks: [
      { label: "About me", href: "#sobre-mi" },
      { label: "Specialties", href: "#especialidades" },
      { label: "How I work", href: "#proceso" },
      { label: "Testimonials", href: "#testimonios" },
      { label: "FAQ", href: "#faq" },
    ],
    specialtiesTitle: "Specialties",
    specialtiesList: [
      "Psychologist in Monterrey",
      "Anxiety therapy",
      "Online therapist",
      "Trauma therapy (EMDR)",
      "Couples therapy",
      "Psychologist near me",
    ],
    rights: "All rights reserved",
    privacyLink: "Privacy notice",
    ethicsLink: "Code of ethics",
    termsLink: "Terms and conditions",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "This page",
    titleAccent: "doesn't exist",
    desc: "It looks like the link is broken or the page moved. Let's get you back to safety.",
    cta: "Back to home",
  },
  cookieBanner: {
    text: "This site uses technical and analytics cookies to improve your experience. You can read more in our",
    linkText: "privacy notice",
    accept: "Accept",
  },
};

export const dictionary = { es, en };
