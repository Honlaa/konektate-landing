import {
  BadgeCheck,
  Banknote,
  CircleDollarSign,
  Clock3,
  MapPin,
  Network,
  SearchX,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { FaqItem, InfoCard, NavItem, Step } from '../types';

export const navigation: NavItem[] = [
  { label: 'Qué es', href: '#que-es' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para quién', href: '#para-quien' },
  { label: 'Seguridad', href: '#confianza' },
];

export const pains: InfoCard[] = [
  {
    icon: SearchX,
    title: 'Buscar toma tiempo',
    description: 'Hoy muchas tareas locales dependen de contactos, recomendaciones o grupos informales.',
  },
  {
    icon: ShieldCheck,
    title: 'La confianza es limitada',
    description: 'Cuesta saber quién está disponible, si cumplirá y qué reputación tiene.',
  },
  {
    icon: Banknote,
    title: 'Hay talento desconectado',
    description: 'Personas con tiempo y habilidades prácticas no siempre reciben oportunidades cercanas.',
  },
];

export const values: InfoCard[] = [
  {
    icon: Network,
    title: 'Matching activo',
    description: 'Konektate distribuye la necesidad a personas adecuadas, en lugar de obligarte a buscar perfiles.',
  },
  {
    icon: MapPin,
    title: 'Enfoque local',
    description: 'La cercanía y la disponibilidad forman parte central de la conexión.',
  },
  {
    icon: BadgeCheck,
    title: 'Confianza progresiva',
    description: 'La reputación se construye con verificación, cumplimiento y experiencias completadas.',
  },
];

export const steps: Step[] = [
  { number: '01', title: 'Publicas una necesidad', description: 'Indicas qué necesitas, dónde y cuándo.' },
  { number: '02', title: 'Konektate activa la red', description: 'La solicitud se dirige a personas cercanas y compatibles.' },
  { number: '03', title: 'Alguien disponible acepta', description: 'Revisas la información esencial antes de confirmar.' },
  { number: '04', title: 'Se resuelve y se construye reputación', description: 'La experiencia queda registrada y ambas partes pueden calificarse.' },
];

export const requesterBenefits: InfoCard[] = [
  {
    icon: Clock3,
    title: 'Menos tiempo buscando',
    description: 'La experiencia está pensada para reducir comparación y coordinación innecesaria.',
  },
  {
    icon: ShieldCheck,
    title: 'Más señales de confianza',
    description: 'Verificación, reputación e historial ayudan a tomar una decisión con más contexto.',
  },
  {
    icon: Sparkles,
    title: 'Una experiencia simple',
    description: 'La necesidad es el punto de partida, no un catálogo interminable de perfiles.',
  },
];

export const providerBenefits: InfoCard[] = [
  {
    icon: CircleDollarSign,
    title: 'Ingresos flexibles',
    description: 'Oportunidades concretas según disponibilidad y tareas que sabes realizar.',
  },
  {
    icon: MapPin,
    title: 'Oportunidades cercanas',
    description: 'La ubicación ayuda a priorizar trabajos que tengan sentido para tu día.',
  },
  {
    icon: UsersRound,
    title: 'Reputación por desempeño',
    description: 'El cumplimiento puede convertirse en una señal de confianza dentro de la red.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: '¿Konektate ya está funcionando como aplicación?',
    answer: 'Todavía estamos en etapa de validación. Esta web explica la iniciativa y permite registrar interés en el piloto.',
  },
  {
    question: '¿Konektate es una bolsa de trabajo?',
    answer: 'No. La propuesta está orientada a microtrabajos y tareas locales bajo demanda mediante matching activo.',
  },
  {
    question: '¿Tengo que pagar para registrarme?',
    answer: 'No se plantea un cobro por registro. El modelo transaccional se validará durante el piloto.',
  },
  {
    question: '¿Qué tipo de tareas se consideran?',
    answer: 'El piloto prioriza tareas de baja complejidad y riesgo, como mandados, limpieza, apoyo en mudanzas pequeñas, armado de muebles, clases básicas y apoyo operativo.',
  },
];
