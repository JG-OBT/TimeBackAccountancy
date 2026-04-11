import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function Trust() {
  const points = [
    {
      title: "Built on Recommendation",
      description: "Our growth is driven by the satisfaction of our clients. We take pride in the long-term relationships we've built since 2002.",
      icon: HeartHandshake,
    },
    {
      title: "100% Reliable & Trustworthy",
      description: "Confidentiality and accuracy are at the heart of everything we do. You can trust us with your most sensitive financial data.",
      icon: ShieldCheck,
    },
    {
      title: "Efficient & Approachable",
      description: "We're not just numbers people. We're a friendly team dedicated to making your life easier and your business more efficient.",
      icon: Zap,
    },
    {
      title: "Software Agnostic",
      description: "While we love Sage and Xero, we can adapt to whatever software you prefer. We're here to work with you, not force a system on you.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 font-serif">
              Why Businesses Choose Time Back
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just do your books; we become an extension of your team. Our goal is to provide the peace of mind that comes from knowing your accounts are in expert hands.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, index) => (
                <div key={index} className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">{point.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-white/10 absolute -inset-12 animate-pulse"></div>
            <div className="aspect-square rounded-full border border-white/5 absolute -inset-24"></div>
            
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl text-center">
              <div className="text-6xl font-bold mb-2 font-serif">34+</div>
              <div className="text-xl text-slate-300 uppercase tracking-widest mb-8">Years of Experience</div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
              <p className="text-slate-300 italic">
                "Giving business owners the freedom to focus on growth since 2002."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
