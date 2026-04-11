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
      quote: "I’m really grateful for Amanda’s expertise, help and guidance with my tax. I was in a crisis, and Amanda was patient, kind and understanding as well as professional and thorough. The turnaround was very quick, I felt supported and my case was handled efficiently and expertly.
Thank you Amanda,
Highly recommend TimeBack!",
      author: "Robyn Hill",
      
    },
    {
      quote: "Amanda is a very helpful and precise book keeper who has worked with me for over a year after being recommended to me but another property investor. She is great as she explains everything to me in simple language and is quick to respond to any queries. Our system is Xero and she also produces monthly reports which are invaluable to my business. She’s also recently taken on payrol and I highly recommend her.",
      author: "Rowena Hicks",
      
    },
    {
      quote: "We joined the client list of Time Back Accounts & Payroll Ltd earlier this year. Our experience with them has been nothing less than amazing. We have had the fullest support possible and this includes a seamless transfer from one online accounting system to another. Time Back came highly recommended to us and we have no hesitation at all in recommending to others.",
      author: "Jim Riley",
      
    },
    {
      quote: "I was recommended Amanda by a friend when I needed an accountant rather last minute to help me submit my tax return for my small business. I am clueless when it comes to this stuff and she was absolutely amazing in helping untangle the chaos of my brain and business, patiently working through all the information I'd sent to her to get it all submitted before the due date. Fabulous",
      author: "Beccy Luton",

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
