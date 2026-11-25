"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9eee4c4a-4911-4be2-a21f-1ae13068878b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#E8E2DC] text-[#2B2625] font-sans selection:bg-[#4A3F3D] selection:text-[#E8E2DC]">
      {/* Barra de Navegación Minimalista Editorial */}
      <header className="sticky top-0 z-50 bg-[#E8E2DC]/90 backdrop-blur-md border-b border-[#2B2625]/15 px-6 lg:px-16 py-4 flex justify-between items-center">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#2B2625]">
          NANCY ARANIVAR
        </span>
        <nav className="hidden md:flex space-x-5 lg:space-x-7 text-xs font-semibold tracking-[0.2em] uppercase">
          <a href="#about" className="hover:opacity-60 transition">Sobre mí</a>
          <a href="#skills" className="hover:opacity-60 transition">Habilidades</a>
          <a href="#projects" className="hover:opacity-60 transition">Proyectos</a>
          <a href="#activities" className="hover:opacity-60 transition">Actividades</a>
          <a href="#education" className="hover:opacity-60 transition">Educación</a>
          <a href="#violin" className="hover:opacity-60 transition">Violín</a>
          <a href="#contact" className="hover:opacity-60 transition">Contacto</a>
        </nav>
        <a
          href="#contact"
          className="text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 bg-[#3B3331] text-[#E8E2DC] rounded-full hover:bg-[#2B2625] transition"
        >
          Hablemos
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-16 py-10 space-y-24">
        {/* PORTADA TIPO REVISTA (HERO) */}
        <section className="relative pt-4 pb-8 border-b border-[#2B2625]/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5C5250]">
              Arte • Filigrana • Violín • Desarrollo Web • Supérate
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5C5250]">
              Edición 2026 — El Salvador
            </span>
          </div>

          {/* Título Gigante con Firma Cursiva Superpuesta */}
          <div className="relative select-none">
            <p className="font-serif italic text-3xl md:text-5xl text-[#6BB1AD] -mb-3 md:-mb-6 ml-2 relative z-10 drop-shadow-xs">
              Nancy’s
            </p>
            <h1 className="text-[16vw] md:text-[135px] font-black uppercase tracking-tighter leading-[0.85] text-[#3B3331]">
              PORTFOLIO
            </h1>
          </div>

          {/* Bloque Inferior de Portada con Foto Recortada Estilo Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8">
            <div className="md:col-span-5 space-y-4">
              <p className="text-sm md:text-base text-[#3B3331]/85 leading-relaxed font-medium">
                Narrativa visual que une el arte manual, la pintura tradicional, la filigrana, la música y el desarrollo de soluciones tecnológicas en equipo.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[#3B3331] text-[#E8E2DC] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition"
                >
                  Explorar Obras
                </a>
                <a
                  href="#activities"
                  className="px-6 py-3 border border-[#3B3331] text-[#3B3331] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#3B3331] hover:text-[#E8E2DC] transition"
                >
                  Actividades Tech
                </a>
              </div>
            </div>

            {/* Contenedor de Foto Estilo Editorial */}
            <div className="md:col-span-7 flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-72 md:h-96 bg-[#D5CBC3] rounded-t-full overflow-hidden border-4 border-[#3B3331] shadow-xl">
                <Image
                  src="/Foto.png"
                  alt="Nancy Aranivar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DIVIDIDO: QUIÉN SOY (OSCURO) + ESPECIALIDADES (CLARO) */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-lg border border-[#3B3331]/20">
          {/* Columna Izquierda Oscura: QUIÉN SOY */}
          <div className="lg:col-span-6 bg-[#3B3331] text-[#E8E2DC] p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                QUIÉN SOY
              </h2>
              <p className="text-sm text-[#E8E2DC]/85 leading-relaxed">
                Soy <strong className="text-white">Nancy Aranivar</strong>, estudiante apasionada por el arte manual, la música y la tecnología. Combino la pintura en lienzo y teja, la filigrana y la interpretación en violín con proyectos colaborativos, análisis de datos en Python y desarrollo web.
              </p>
              <p className="text-sm text-[#E8E2DC]/80 leading-relaxed">
                Disfruto construir soluciones útiles y estéticas, ya sea creando una obra artesanal, interpretando una pieza musical o desarrollando aplicaciones y modelos en equipo.
              </p>
            </div>

            {/* Métricas tipo revista */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E2DC]/20">
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#E5A9A9]">7+</p>
                <p className="text-[11px] uppercase tracking-wider text-[#E8E2DC]/70">Proyectos Tech</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#6BB1AD]">5+</p>
                <p className="text-[11px] uppercase tracking-wider text-[#E8E2DC]/70">Obras y Artes</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-white">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#E8E2DC]/70">Compromiso</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha Clara: ESPECIALIDADES */}
          <div id="skills" className="lg:col-span-6 bg-[#F3EFEA] p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#3B3331]">
                ESPECIALIDADES
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#5C5250] font-semibold">
                Arte, música, desarrollo web y datos
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white rounded-2xl border border-[#3B3331]/10 flex justify-between items-center shadow-2xs">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#3B3331]">Pintura, Filigrana &amp; Violín</h3>
                  <p className="text-xs text-[#5C5250]">Acrílico, arte en teja, manualidades e interpretación musical</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E5A9A9]/30 text-[#3B3331]">Arte</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#3B3331]/10 flex justify-between items-center shadow-2xs">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#3B3331]">Desarrollo Web &amp; Móvil</h3>
                  <p className="text-xs text-[#5C5250]">Next.js, Tailwind, HTML/CSS/JS, PHP, MySQL y Kodular</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#6BB1AD]/20 text-[#2C3E50]">Web / App</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#3B3331]/10 flex justify-between items-center shadow-2xs">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#3B3331]">Python, Pygame &amp; Machine Learning</h3>
                  <p className="text-xs text-[#5C5250]">Regresión lineal, K-Means, KNN, pandas y visualización</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3B3331] text-[#E8E2DC]">Datos / IA</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: PROYECTOS (ARTE, WEB Y PROYECTOS SUPÉRATE) */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#3B3331]/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5C5250]">
                Portafolio Seleccionado
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#3B3331] mt-1">
                PROYECTOS
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#5C5250] max-w-sm">
              Obras artísticas, desarrollo web e iniciativas colaborativas enfocadas en educación, agua y movilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MOSAIK */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Supérate • Equipo
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/mosaik.png" alt="MOSAIK" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  MOSAIK
                </h3>
                <p className="text-xs font-semibold text-[#5C5250]">
                  Aplicación de organización y concentración para jóvenes con TDAH
                </p>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Proyecto en equipo con calendarios escolares, recordatorios, técnica Pomodoro, seguimiento de progreso y recompensas con estrellas y avatares para fomentar hábitos de estudio.
                </p>
              </div>
            </article>

            {/* HYDRA */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Supérate • IoT &amp; App
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/hydra.png" alt="HYDRA" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  HYDRA
                </h3>
                <p className="text-xs font-semibold text-[#5C5250]">
                  Cisterna inteligente y purificadora de agua
                </p>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Solución colaborativa para comunidades rurales de El Salvador que recolecta y filtra agua lluvia mediante energía solar, sensores con Arduino y app móvil en Kodular.
                </p>
              </div>
            </article>

            {/* KIROO */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E5A9A9] text-[#2B2625] px-2.5 py-1 rounded-sm">
                  Plataforma Web
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/kiroo.png" alt="Kiroo" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Kiroo
                </h3>
                <p className="text-xs font-semibold text-[#5C5250]">
                  Plataforma web automotriz interactiva
                </p>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Desarrollada en equipo con HTML, CSS, Bootstrap, JavaScript, PHP y MySQL. Integra escáner de señales de tránsito, recordatorios, guías de mantenimiento y conexión con mecánicos.
                </p>
              </div>
            </article>

            {/* ARTE 1: PINTURA */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E8E2DC] text-[#3B3331] px-2.5 py-1 rounded-sm">
                  Pintura
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/pintura.png" alt="Paisaje y Reflejo" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Paisaje y Reflejo
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Pintura en acrílico sobre lienzo explorando luces, vegetación y reflejos serenos sobre el agua.
                </p>
              </div>
            </article>

            {/* ARTE 2: FILIGRANA */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E5A9A9] text-[#2B2625] px-2.5 py-1 rounded-sm">
                  Filigrana
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/filigrana.png" alt="Filigrana en Papel" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Filigrana en Papel
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Composición floral artesanal elaborada en papel para proyectos escolares y horas sociales.
                </p>
              </div>
            </article>

            {/* ARTE 3: TEJA */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-5 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Arte en Teja
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/teja.png" alt="Pintura en Teja" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Pintura en Teja
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Decoración manual sobre teja de barro con temática floral y detalle artesanal.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SECCIÓN 2: ACTIVIDADES TÉCNICAS (PYTHON, PYGAME Y MACHINE LEARNING) */}
        <section id="activities" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#3B3331]/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5C5250]">
                Programación &amp; Ciencia de Datos
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#3B3331] mt-1">
                ACTIVIDADES
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#5C5250] max-w-sm">
              Videojuegos interactivos, modelos supervisados, clustering y análisis espacial en Python.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Actividad 1: Regresión Lineal */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E8E2DC] text-[#3B3331] px-2.5 py-1 rounded-sm">
                  Actividad 1 • Scikit-Learn
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/regresion.png" alt="Regresión Lineal" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Regresión Lineal Simple
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Modelo supervisado en Python y <code className="font-semibold">scikit-learn</code> que relaciona horas de estudio semanales con calificaciones, dividiendo datos en entrenamiento y prueba, evaluando MSE y graficando la recta de tendencia.
                </p>
              </div>
            </article>

            {/* Actividad 2: Aventura en el Laberinto */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Actividad 2 • Python &amp; Pygame
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/laberinto.png" alt="Aventura en el Laberinto" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  Aventura en el Laberinto
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Videojuego 2D desarrollado desde cero con Python y Pygame. Genera laberintos aleatorios mediante matrices y algoritmo DFS, con selección de dificultad y personaje, colisiones y contador de pasos, monedas y tiempo.
                </p>
              </div>
            </article>

            {/* Actividad 3: AI Challenge - K-Means y KNN */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E5A9A9] text-[#2B2625] px-2.5 py-1 rounded-sm">
                  Actividad 3 • K-Means &amp; KNN
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/kmeans-knn.png" alt="AI Challenge K-Means y KNN" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#3B3331]">
                  AI Challenge: Hábitos y Rendimiento
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Análisis sobre 500 estudiantes (<code className="font-semibold">reto_estudiantes_ml.py</code>) comparando 3 y 4 clústeres con K-Means, evaluando distintos valores de <code className="font-semibold">k</code> en KNN (75/25) y analizando el efecto de normalizar variables.
                </p>
              </div>
            </article>

            {/* Actividad 4: Hotspots Comerciales */}
            <article className="bg-[#3B3331] text-[#E8E2DC] rounded-2xl overflow-hidden border border-[#3B3331] flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Actividad 4 • Análisis Espacial
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/hotspots.png" alt="Hotspots Comerciales La Gran Vía" fill className="object-contain" />
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Hotspots Comerciales (La Gran Vía)
                </h3>
                <p className="text-xs text-[#E8E2DC]/80 leading-relaxed">
                  Prototipo académico en Python y Colab con <code className="text-[#6BB1AD]">pandas</code>, <code className="text-[#6BB1AD]">scikit-learn</code>, <code className="text-[#6BB1AD]">matplotlib</code> y <code className="text-[#6BB1AD]">seaborn</code> sobre datos geográficos para identificar clústeres comerciales y clasificar una ubicación propuesta con KNN (<code className="text-[#6BB1AD]">k=3</code>).
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SECCIÓN 3: FORMACIÓN ACADÉMICA (ORDEN CRONOLÓGICO INVERSO: 2026 -> 2024) */}
        <section id="education" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#3B3331]/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5C5250]">
                De lo más reciente a lo más antiguo
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#3B3331] mt-1">
                FORMACIÓN ACADÉMICA
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#5C5250] max-w-sm">
              Certificaciones recientes, bachillerato, programas de formación y experiencias de 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Tarjeta Principal Oscura: Bachillerato y Beca */}
            <div className="lg:col-span-5 bg-[#3B3331] text-[#E8E2DC] rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-lg">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-3 py-1 rounded-full">
                  2025 – 2026 · Actualidad
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Bachillerato General
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#E5A9A9] font-semibold">
                  Complejo Educativo Buena Vista (Soyapango)
                </p>
                <p className="text-xs text-[#E8E2DC]/85 leading-relaxed">
                  Formación de bachillerato en el Complejo Educativo Buena Vista, respaldada por certificaciones obtenidas en 2026 y proyectos tecnológicos y creativos.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E2DC]/15 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#6BB1AD]">
                  Beca · 2024 – 2026
                </p>
                <p className="text-xs text-[#E8E2DC]/90 leading-relaxed font-semibold">
                  Programa Empresarial ¡Supérate! Fundación Frech
                </p>
                <p className="text-xs text-[#E8E2DC]/75 leading-relaxed">
                  Formación complementaria continua en inglés, tecnología, liderazgo y desarrollo profesional.
                </p>
              </div>
            </div>

            {/* Tarjetas Claras: Certificaciones (2026) y Experiencias/Cursos (2024) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 1. Certificaciones Obtenidas (2026) */}
              <article className="bg-[#F3EFEA] rounded-2xl p-6 border border-[#3B3331]/15 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD]/25 text-[#2B2625] px-2.5 py-1 rounded-sm">
                    2026 · Certificaciones
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-[#3B3331] pt-1">
                    Certificaciones Obtenidas
                  </h3>
                  <ul className="text-xs text-[#5C5250] space-y-2 leading-relaxed list-disc list-inside">
                    <li>
                      <strong className="text-[#3B3331]">MOS Excel Expert</strong> (2026)
                    </li>
                    <li>
                      <strong className="text-[#3B3331]">TOEIC Listening &amp; Reading</strong> (2026)
                    </li>
                    <li>
                      <strong className="text-[#3B3331]">TOEIC Speaking &amp; Writing</strong> (2026)
                    </li>
                  </ul>
                </div>
              </article>

              {/* 2. Curso Avanzado de Inglés (2024) */}
              <article className="bg-[#F3EFEA] rounded-2xl p-6 border border-[#3B3331]/15 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#E8E2DC] text-[#3B3331] px-2.5 py-1 rounded-sm">
                    2024 · Cursos Realizados
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-[#3B3331] pt-1">
                    Capacitación en Idiomas
                  </h3>
                  <ul className="text-xs text-[#5C5250] space-y-2 leading-relaxed list-disc list-inside">
                    <li>
                      <strong className="text-[#3B3331]">Curso Avanzado de Inglés</strong> — Direct English (2024)
                    </li>
                  </ul>
                </div>
              </article>

              {/* 3. Proyectos y Emprendimiento Social (2024) */}
              <article className="sm:col-span-2 bg-[#F3EFEA] rounded-2xl p-6 border border-[#3B3331]/15 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#E5A9A9]/40 text-[#2B2625] px-2.5 py-1 rounded-sm">
                    2024 · Participación y Programas
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-[#3B3331] pt-1">
                    Proyectos de Alto Impacto y Emprendimiento Social
                  </h3>
                  <p className="text-xs text-[#5C5250] leading-relaxed">
                    Participación en el <strong className="text-[#3B3331]">Proyecto de Alto Impacto de FUSALMO</strong> y en <strong className="text-[#3B3331]">Emprendimientos Sociales de FUSALMO (2024)</strong>, fortaleciendo el trabajo en equipo, la resolución de problemas y el impacto social.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: VIOLÍN (DEBAJO DE FORMACIÓN ACADÉMICA) */}
        <section id="violin" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#3B3331]/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5C5250]">
                Música &amp; Expresión Artística
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#3B3331] mt-1">
                VIOLÍN
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#5C5250] max-w-sm">
              Presentaciones, práctica y momentos interpretando el violín.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Foto 1 */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E5A9A9] text-[#2B2625] px-2.5 py-1 rounded-sm">
                  Interpretación
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/violin-1.png" alt="Nancy tocando violín" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-black uppercase tracking-tight text-[#3B3331]">
                  Presentación Músical
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Durante los ensayos.
                </p>
              </div>
            </article>

            {/* Foto 2 */}
            <article className="bg-[#F3EFEA] rounded-2xl overflow-hidden border border-[#3B3331]/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#6BB1AD] text-white px-2.5 py-1 rounded-sm">
                  Práctica &amp; Escenario
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/violin-2.png" alt="Nancy tocando violín" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-black uppercase tracking-tight text-[#3B3331]">
                  Presentación artística
                </h3>
                <p className="text-xs text-[#5C5250] leading-relaxed">
                  Durante algunos eventos de la iglesia me invitan a tocar.
                </p>
              </div>
            </article>

            {/* Foto 3 */}
            <article className="bg-[#3B3331] text-[#E8E2DC] rounded-2xl overflow-hidden border border-[#3B3331] flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 w-full bg-[#24201F] flex items-center justify-center p-4 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#E8E2DC] text-[#3B3331] px-2.5 py-1 rounded-sm">
                  Música
                </span>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image src="/violin-3.png" alt="Nancy tocando violín" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-black uppercase tracking-tight text-white">
                  Presentación Músical
                </h3>
                <p className="text-xs text-[#E8E2DC]/80 leading-relaxed">
                  Durante un evento de la iglesia pude presentar un punto musical.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SECCIÓN CONTACTO EDITORIAL FUNCIONAL */}
        <section id="contact" className="bg-[#3B3331] text-[#E8E2DC] rounded-3xl p-8 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna Izquierda: Título gigante */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5A9A9]">
                Contacto Directo
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                TRABAJEMOS JUNTOS
              </h2>
              <p className="text-sm text-[#E8E2DC]/80 leading-relaxed">
                ¿Tienes un proyecto artístico, una idea web o simplemente quieres saludar? Escríbeme aquí y tu mensaje llegará directamente a mi correo.
              </p>
              <div className="pt-4 border-t border-[#E8E2DC]/15 space-y-2 text-xs">
                <p className="uppercase tracking-widest text-[#E8E2DC]/50">Correo Electrónico</p>
                <p className="text-base font-bold text-[#6BB1AD]">nancyaranivar@gmail.com</p>
              </div>
            </div>

            {/* Columna Derecha: Formulario Real */}
            <div className="lg:col-span-7 bg-[#F3EFEA] text-[#2B2625] p-6 md:p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="subject" value="Nuevo mensaje desde el Portafolio de Nancy" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-[#3B3331]">
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B3331]/15 text-sm focus:outline-none focus:border-[#3B3331] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-[#3B3331]">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B3331]/15 text-sm focus:outline-none focus:border-[#3B3331] transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-[#3B3331]">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B3331]/15 text-sm focus:outline-none focus:border-[#3B3331] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-[#3B3331] text-[#E8E2DC] font-bold uppercase tracking-widest text-xs hover:bg-black transition cursor-pointer disabled:opacity-60"
                >
                  {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                </button>

                {status === "success" && (
                  <p className="p-3 rounded-xl bg-[#6BB1AD]/20 text-center text-xs font-bold text-[#2B2625]">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </p>
                )}

                {status === "error" && (
                  <p className="p-3 rounded-xl bg-[#E6748E]/20 text-center text-xs font-bold text-[#2B2625]">
                    Hubo un error al enviar. Revisa tu clave de Web3Forms e intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Editorial */}
      <footer className="border-t border-[#3B3331]/15 py-8 px-6 text-center text-xs uppercase tracking-widest text-[#5C5250]">
        <p>© 2026 Nancy Aranivar — Portafolio Creativo &amp; Web</p>
      </footer>
    </div>
  );
}