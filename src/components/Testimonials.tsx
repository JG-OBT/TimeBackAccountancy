import { motion } from "motion/react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Time Back has been instrumental in our growth. Their attention to detail and efficiency in handling our bookkeeping and VAT returns has saved us countless hours.",
      author: "Local Business Owner",
      location: "Yeovil",
    },
    {
      quote: "Professional, punctual, and highly cost-effective. Amanda and her team are incredibly reliable and have a deep understanding of Sage and Xero.",
      author: "Managing Director",
      location: "Sherborne",
    },
    {
      quote: "I can't recommend Time Back enough. They are accurate, efficient, and always go the extra mile to ensure our year-end accounts are perfect.",
      author: "Small Business Client",
      location: "South West",
    },
    {
      quote: "A truly confidential and trustworthy service. Having worked with them for several years, I wouldn't trust anyone else with our payroll and accounts admin.",
      author: "Retailer",
      location: "Somerset",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
            >
              Trusted by Businesses Like Yours
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Our reputation is built on recommendation. Here's what our clients say about the time and peace of mind we provide.
            </motion.p>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span>5.0 Rating</span>
          </div>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border border-slate-100 shadow-sm bg-slate-50/50 rounded-2xl">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="h-10 w-10 text-primary/20 mb-6" />
                        <p className="text-slate-700 text-lg italic leading-relaxed mb-8 flex-grow">
                          "{t.quote}"
                        </p>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900">{t.author}</span>
                          <span className="text-sm text-slate-500">{t.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
