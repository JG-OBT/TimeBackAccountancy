/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Trust from "@/components/trust";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Trust />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
