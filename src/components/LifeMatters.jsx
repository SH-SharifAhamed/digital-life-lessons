"use client";

export default function WhyLifeMatters() {
  const benefits = [
    {
      title: "Preserve Personal Wisdom",
      description: "Capture valuable life experiences and lessons so they can be remembered and shared across generations.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      accent: "blue",
      color: "#3B82F6",
      stat: "12.5K Stories",
      progress: 75,
    },
    {
      title: "Inspire Future Generations",
      description: "Stories and insights from real-life experiences can guide and motivate younger generations.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
      accent: "emerald",
      color: "#10B981",
      stat: "8.3K Lessons",
      progress: 60,
    },
    {
      title: "Learn From Real Experiences",
      description: "Practical lessons from everyday life often provide deeper understanding than theory alone.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      accent: "amber",
      color: "#F59E0B",
      stat: "15.1K Tips",
      progress: 85,
    },
    {
      title: "Build Meaningful Connections",
      description: "Sharing personal journeys helps people relate to one another and strengthens community bonds.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      accent: "rose",
      color: "#EC4899",
      stat: "9.7K Bonds",
      progress: 70,
    },
  ];

  const accentMap = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
      glow: "group-hover:shadow-blue-500/20",
      progress: "bg-blue-500",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      glow: "group-hover:shadow-emerald-500/20",
      progress: "bg-emerald-500",
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "border-amber-500/20",
      glow: "group-hover:shadow-amber-500/20",
      progress: "bg-amber-500",
    },
    rose: {
      bg: "bg-rose-500/10",
      text: "text-rose-400",
      border: "border-rose-500/20",
      glow: "group-hover:shadow-rose-500/20",
      progress: "bg-rose-500",
    },
  };

  return (
    <section className="relative py-24 bg-[#0B0F19] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-150 h-150 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100p bg-emerald-600/5 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Why Learning From Life{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-emerald-400 to-amber-400 animate-gradient">
              Matters
            </span>
          </h2>
          
          <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Every person carries unique experiences and wisdom. Preserving and
            sharing these lessons helps create a richer source of knowledge for
            future generations.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const style = accentMap[benefit.accent];
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border border-white/5 bg-white/2 backdrop-blur-xl p-7 
                  hover:bg-white/4 hover:border-white/10 hover:shadow-2xl ${style.glow} 
                  transition-all duration-500 cursor-default overflow-hidden`}
              >

                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-${benefit.accent}-500/5 to-transparent`} />
                

                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-b-full ${style.progress} opacity-60`} />

                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ${style.bg} ${style.text} border ${style.border} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`absolute inset-0 rounded-2xl ${style.progress} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  {benefit.icon}
                </div>

                <h3 className="relative text-lg font-bold text-white mb-3 group-hover:text-slate-100 transition-colors">
                  {benefit.title}
                </h3>
                <p className="relative text-sm text-slate-400 leading-relaxed mb-8">
                  {benefit.description}
                </p>

                <div className="relative mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500">{benefit.stat}</span>
                    <span className="text-xs font-bold text-slate-400">{benefit.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${style.progress} transition-all duration-1000 ease-out`} 
                      style={{ width: `${benefit.progress}%` }}
                    />
                  </div>
                </div>

                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${style.bg} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore All Stories</span>
            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}