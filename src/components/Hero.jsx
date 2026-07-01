"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PlayCircle,
  Users,
  BookOpen,
  Star,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Learn Practical",
    highlight: "Digital Life Skills",
    desc: "Master productivity, communication, critical thinking, and modern life skills through engaging lessons.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tag: "Most Popular",
  },
  {
    title: "Transform Knowledge",
    highlight: "Into Action",
    desc: "Discover lessons that help you build better habits and achieve meaningful personal growth every day.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tag: "New Arrival",
  },
  {
    title: "Grow Every Day",
    highlight: "With Real-Life Lessons",
    desc: "Explore inspiring stories, practical advice, and powerful learning experiences that shape your future.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    tag: "Trending",
  },
];

const stats = [
  {
    icon: Users,
    val: "10K+",
    label: "Active Learners",
    color: "text-teal-400",
  },
  {
    icon: BookOpen,
    val: "500+",
    label: "Life Lessons",
    color: "text-violet-400",
  },
  { icon: Star, val: "98%", label: "Satisfaction", color: "text-amber-400" },
  {
    icon: Clock,
    val: "24/7",
    label: "Learning Access",
    color: "text-rose-400",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % 3);
  }, []);
  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((p) => (p === 0 ? 2 : p - 1));
  }, []);
  const go = useCallback(
    (i) => {
      setDir(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slideAnim = {
    enter: (d) => ({ opacity: 0, scale: 1.15, x: d > 0 ? 100 : -100 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d) => ({ opacity: 0, scale: 0.95, x: d > 0 ? -100 : 100 }),
  };

  const textAnim = {
    enter: { opacity: 0, y: 50, filter: "blur(12px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -30, filter: "blur(8px)" },
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-black py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={current}
          custom={dir}
          variants={slideAnim}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].img}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent z-1" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70 z-1" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-125 h-125 bg-teal-500/10 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 w-100 h-100 bg-violet-500/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white/80 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 10,000+ Learners Worldwide
          </motion.div>

          {/* Tag */}
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-linear-to-r from-teal-500 to-emerald-500 text-white mb-6"
            >
              {slides[current].tag}
            </motion.span>
          </AnimatePresence>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`t-${current}`}
              variants={textAnim}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                {slides[current].title}
                <span className="block bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  {slides[current].highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`d-${current}`}
              variants={textAnim}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              {slides[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              href="/public-lessons"
              className="group inline-flex items-center gap-2 bg-linear-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Lessons
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <PlayCircle size={20} />
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <s.icon
                  size={22}
                  className={`${s.color} mb-3 group-hover:scale-110 transition-transform`}
                />
                <h3 className={`text-2xl font-bold ${s.color}`}>{s.val}</h3>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute top-10 right-10 z-20 hidden md:flex items-center gap-2 text-white/40 font-mono text-sm">
        <span className="text-white text-2xl font-bold">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-6 h-px bg-white/20" />
        <span>03</span>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-110"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-110"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${current === i ? "w-10 h-2.5 bg-white shadow-lg shadow-white/30" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-20">
        <motion.div
          className="h-full bg-linear-to-r from-teal-400 to-emerald-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          key={current}
        />
      </div>
    </section>
  );
}
