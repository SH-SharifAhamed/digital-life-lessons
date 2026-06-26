import {
  BookOpen,
  Heart,
  TrendingUp,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      icon: BookOpen,
      title: "Preserve Valuable Wisdom",
      description:
        "Capture and organize meaningful life lessons so your experiences remain accessible whenever you need them.",
    },
    {
      icon: TrendingUp,
      title: "Track Personal Growth",
      description:
        "Monitor your learning journey and reflect on how your experiences contribute to continuous self-improvement.",
    },
    {
      icon: Heart,
      title: "Save Favorite Lessons",
      description:
        "Bookmark lessons that inspire you the most and revisit them for motivation and guidance.",
    },
    {
      icon: Users,
      title: "Learn From Others",
      description:
        "Explore public lessons shared by the community and gain insights from diverse life experiences.",
    },
    {
      icon: Shield,
      title: "Privacy & Control",
      description:
        "Choose whether your lessons remain private or are shared publicly with the community.",
    },
    {
      icon: Sparkles,
      title: "Simple & Meaningful",
      description:
        "A clean and intuitive platform designed to help you focus on learning, reflection, and growth.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            ✨ Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Why Choose
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Digital Life Lessons?
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto text-lg">
            Preserve your experiences, learn from others, and build a personal
            library of wisdom that helps you grow throughout life.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/public-lessons"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Start Your Growth Journey</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
