# Konektate Landing Page

Landing informativa para explicar la iniciativa Konektate. No intenta sustituir a la futura aplicación.

## Stack

- React
- TypeScript
- Vite
- CSS con design tokens
- Lucide React para iconografía

## Ejecutar

```bash
npm install
npm run dev
```

## Arquitectura

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── BrandMark.tsx
│       ├── InfoCard.tsx
│       └── SectionHeading.tsx
├── data/
│   └── content.ts
├── hooks/
│   └── usePilotForm.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── DefinitionSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── AudienceSection.tsx
│   ├── TrustSection.tsx
│   ├── AppPreviewSection.tsx
│   ├── PilotSection.tsx
│   └── FaqSection.tsx
├── styles/
│   ├── tokens.css
│   └── global.css
├── types/
│   └── index.ts
└── main.tsx
```

## Principio central

La landing:
1. explica el problema;
2. presenta qué es Konektate;
3. explica cómo funcionará la futura app;
4. muestra una vista previa conceptual;
5. comunica confianza;
6. capta interés para el piloto.

No contiene solicitudes reales, matching real, login, mapas activos ni funcionalidades de la aplicación.

## Formulario

`PilotSection.tsx` solo simula el envío en frontend. Conéctalo a tu backend o servicio de formularios cuando tengas el endpoint.
