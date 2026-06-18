// app/digital-life-lessons/page.jsx

import Link from "next/link";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

const DigitalLifeLessonsPage = () => {
     return (
          <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

               {/* Ambient Glow Background */}
               <div className="absolute top-[-15%] left-[-10%] w-125 h-125 bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
               <div className="absolute bottom-[-15%] right-[-10%] w-125 h-125 bg-blue-500/20 rounded-full blur-[140px] animate-pulse delay-1000" />

               {/* Floating Icons */}
               <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <MdLightbulb className="absolute top-24 left-20 text-4xl rotate-12" />
                    <MdLightbulb className="absolute top-40 right-24 text-3xl -rotate-12" />
                    <FaBookOpen className="absolute bottom-32 left-32 text-5xl rotate-45" />
                    <FaBookOpen className="absolute bottom-20 right-20 text-4xl -rotate-45" />
                    <MdLightbulb className="absolute top-1/2 left-10 text-2xl rotate-6" />
               </div>

               {/* Main Card */}
               <div className="relative z-10 max-w-3xl w-full">

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl shadow-black/60">

                         {/* Icon Section */}
                         <div className="flex justify-center mb-10">
                              <div className="relative">
                                   <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-blue-500 blur-md opacity-60 animate-ping" />

                                   <div className="relative p-7 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.35)]">
                                        <MdLightbulb className="text-7xl text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
                                   </div>
                              </div>
                         </div>

                         {/* Title */}
                         <h1 className="text-5xl md:text-6xl font-black text-center leading-tight">
                             404 {" "}
                              <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                   Page Not Found
                              </span>
                         </h1>

                         {/* Subtitle */}
                         <p className="mt-6 text-center text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                              Learn practical, modern life skills for the digital world — from focus,
                              productivity, mindset, to smart online habits.
                         </p>

                         {/* Feature Pills */}
                         <div className="mt-8 flex flex-wrap justify-center gap-3">
                              {[
                                   "Productivity",
                                   "Focus System",
                                   "Digital Mindset",
                                   "Smart Habits",
                                   "Life Upgrade"
                              ].map((item, i) => (
                                   <span
                                        key={i}
                                        className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-purple-400/40 hover:bg-purple-500/10 transition"
                                   >
                                        {item}
                                   </span>
                              ))}
                         </div>

                         {/* CTA Buttons */}
                         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                              <Link
                                   href="/lessons"
                                   className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-blue-600 font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                              >
                                   <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                   <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                   <span className="relative z-10">Start Learning</span>
                              </Link>

                              <Link
                                   href="/"
                                   className="px-8 py-4 rounded-2xl border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-300 text-gray-300 hover:text-white"
                              >
                                   Back to Home
                              </Link>
                         </div>

                         {/* Bottom Note */}
                         <div className="mt-10 text-center text-sm text-gray-500">
                              Built for developers, creators & thinkers who want to upgrade their digital life 🚀
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default DigitalLifeLessonsPage;