import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif text-lg font-bold">
                TB
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-primary font-serif">Time Back</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Accounts & Payroll</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Professional bookkeeping and accounting services focused on giving business owners their time back. Established in 2002.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-primary transition-colors">Bookkeeping</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">VAT Returns</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Payroll & Payment Runs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Tax Returns</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Year End Preparation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>01935 848 973</li>
              <li>amanda@timeback.co.uk</li>
              <li>25 King Street, Yeovil, Somerset</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Time Back Accounts & Payroll Ltd. All rights reserved.</p>
          <p>Registered in England & Wales. AAT Qualified.</p>
        </div>
      </div>
    </footer>
  );
}
