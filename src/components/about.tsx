import { motion } from "motion/react";
import { Users, History, ThumbsUp, Globe } from "lucide-react";
import aboutImage from "@/assets/images/about.jpg";

export default function About() {
  const stats = [
    { icon: History, label: "Experience", value: "34 Years" },
    { icon: Users, label: "Established", value: "2002" },
    { icon: ThumbsUp, label: "Growth", value: "Recommendation-led" },
    { icon: Globe, label: "Coverage", value: "Local & National" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6"
          >
            Your Partner in Business Growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            At Time Back Accounts & Payroll Ltd, our mission is simple: to help business owners spend less time on accounts admin and more time on their core business. Established in 2002 and built entirely on recommendations, we provide reliable, trustworthy, and confidential support.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-slate-900 mb-1 font-serif">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">Expertise You Can Rely On</h3>
            <p className="text-slate-600 leading-relaxed">
              With over 34 years of experience, we understand the complexities of business finance. Whether you're a local business in Yeovil or Sherborne, or a company operating remotely across the country, we adapt to your needs.
            </p>
            <ul className="space-y-4">
              {[
                "AAT Qualified professionals",
                "Built on trust and long-term relationships",
                "Flexible software support (Sage, Xero, and more)",
                "Complete confidentiality guaranteed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ThumbsUp className="h-3 w-3" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={aboutImage} 
              alt="Team working on accounts" 
              className="w-full h-auto object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
