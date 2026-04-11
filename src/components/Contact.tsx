import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Let's Get Your Time Back
              </h2>
              <p className="text-lg text-slate-600">
                Ready to remove the burden of paperwork? Contact us today for a free, no-obligation quote or to discuss how we can support your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <a href="tel:01935848973" className="text-slate-600 hover:text-primary transition-colors">01935 848 973</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <a href="mailto:amanda@timeback.co.uk" className="text-slate-600 hover:text-primary transition-colors">amanda@timeback.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                  <p className="text-slate-600">
                    25 King Street, Yeovil,<br />
                    Somerset, BA21 4DN, UK
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary rounded-2xl text-white shadow-lg">
              <h4 className="font-bold text-lg mb-2">Local Support, National Reach</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                Supporting businesses in Yeovil, Sherborne and across the South West. We also work remotely with clients across the country using cloud-based software.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" className="bg-slate-50 border-slate-200" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your business needs..." className="min-h-[150px] bg-slate-50 border-slate-200" />
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-bold gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
              
              <p className="text-center text-xs text-slate-400">
                We respect your privacy and will never share your details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
