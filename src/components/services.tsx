import { motion } from "motion/react";
import { 
  BookOpen, 
  Receipt, 
  CreditCard, 
  FileText, 
  RefreshCw, 
  CalendarCheck 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Bookkeeping",
      description: "Accurate and timely recording of all your financial transactions, ensuring your records are always up to date.",
      icon: BookOpen,
    },
    {
      title: "VAT Returns",
      description: "Expert preparation and submission of VAT returns, keeping you compliant and avoiding costly penalties.",
      icon: Receipt,
    },
    {
      title: "Payment Runs",
      description: "Efficient management of supplier payments and payroll, ensuring everyone is paid correctly and on time.",
      icon: CreditCard,
    },
    {
      title: "Tax Returns",
      description: "Professional assistance with self-assessment and corporate tax returns to minimize your stress.",
      icon: FileText,
    },
    {
      title: "Bank Reconciliation",
      description: "Regular verification of your records against bank statements to ensure every penny is accounted for.",
      icon: RefreshCw,
    },
    {
      title: "Year End Preparation",
      description: "Comprehensive preparation of your accounts for year-end, making the process smooth for your accountant.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
          >
            Comprehensive Accounting Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Tailored services designed to remove the burden of financial admin, giving you more time to focus on what you do best.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
