export function Footer() {
  const services = [
    "Balinese Massage",
    "Deep Tissue",
    "Hot Stone",
    "Traditional Facial",
    "Ear Candle",
    "Pedicure",
    "Manicure",
    "Foot Scrub",
    "Package Balinese Massage + Ear Candle + Mini Facial",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Ketut Massage</h2>
              <p className="text-sm text-slate-400">Home Services</p>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Ketut Massage is the best solution for certified traditional
              massage and therapy. Service with professional therapists
              coming to your location.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <span key={index} className="text-slate-300 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ketut Massage. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
