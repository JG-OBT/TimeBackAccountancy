import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Award, ShieldCheck } from "lucide-react";
import heroImage from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 px-3 py-1">
                AAT Qualified
              </Badge>
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 px-3 py-1">
                34 Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 px-3 py-1">
                Est. 2002
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              Get your <span className="text-primary italic">time back</span> to focus on your business.
            </h1>
            
            <p className="max-w-[600px] text-lg text-slate-600 md:text-xl leading-relaxed">
              Established bookkeeping and accounting specialists for businesses in Yeovil, Sherborne, and across the South West. We remove the burden of paperwork so you can grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white" asChild>
                <a href="tel:01935848973">Call 01935 848 973</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Sage & Xero Friendly
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Local & Remote Support
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Confidential & Reliable
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional accounting and bookkeeping" 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Trust Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <span className="font-bold text-slate-900">Time Saved</span>
              </div>
              <p className="text-sm text-slate-500">We handle the admin, you handle the growth.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 z-20 bg-primary p-6 rounded-xl shadow-xl text-white max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-bold">AAT Qualified</span>
              </div>
              <p className="text-sm opacity-90">Professional standards you can trust.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
