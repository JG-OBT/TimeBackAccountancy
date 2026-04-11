import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - User requested to keep current logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif text-xl font-bold">
              TB
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-primary font-serif">Time Back</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Accounts & Payroll</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="transition-colors hover:text-primary">Services</a>
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#testimonials" className="transition-colors hover:text-primary">Testimonials</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:01935848973" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <Phone className="h-4 w-4" />
            01935 848 973
          </a>
          <Button asChild className="hidden sm:flex">
            <a href="#contact">Get a Free Quote</a>
          </Button>
          {/* Mobile menu could go here if needed, but keeping it simple for now */}
        </div>
      </div>
    </motion.nav>
  );
}
