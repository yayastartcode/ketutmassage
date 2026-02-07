import { motion } from "motion/react";

const services = [
  {
    title: "Balinese Massage",
    description: "Traditional Balinese massage techniques to improve blood circulation and relieve muscle tension.",
    price: "60 minutes IDR 250 K / 90 Minute IDR 300 K",
    image: "/images/service/balinese.jpg",
  },
  {
    title: "Deep Tissue",
    description: "Focusing on deeper layers of muscle tissue to release chronic muscle tension.",
    price: "60 minute IDR 250 K / 90 minute IDR 300K",
    image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1763002825/attached_image/deep-tissue-massage-ketahui-manfaat-dan-hal-hal-yang-perlu-diperhatikan.jpg",
  },
  {
    title: "Hot Stone",
    description: "Therapeutic massage using smooth, heated stones to melt away tension.",
    price: "IDR 350K",
    image: "https://facesspa.com/wp-content/uploads/2022/10/Adult-woman-having-hot-stone-m-1024x768.jpg",
  },
  {
    title: "Traditional Facial",
    description: "Natural facial treatment to cleanse and rejuvenate your skin.",
    price: "IDR 200K",
    image: "https://remedytupelo.com/storage/2022/10/What-Is-A-Traditional-Facial-1024x683.jpeg",
  },
  {
    title: "Ear Candle",
    description: "Gentle therapeutic treatment to clear ear canals and improve balance.",
    price: "IDR 150K",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2017/07/terapi-ear-candle.jpg",
  },
  {
    title: "Pedicure",
    description: "Relaxing cosmetic treatment for your feet and toenails.",
    price: "IDR 200K",
    image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1759916925/attached_image/pedicure-perawatan-untuk-kaki-dan-kuku-agar-tetap-menawan.jpg",
  },
  {
    title: "Manicure",
    description: "Beauty treatment for your hands and fingernails.",
    price: "IDR 180K",
    image: "https://classpass.com/blog/wp-content/uploads/2021/03/Spa-Manicure-ClassPass-scaled.jpg",
  },
  {
    title: "Foot Scrub",
    description: "Exfoliating treatment to remove dead skin and revitalize your feet.",
    price: "60 minute IDR 225K",
    image: "https://qimassageandnaturalhealingspa.com/wp-content/uploads/2020/07/Depositphotos_68264679_xl-2015.jpg",
  },
  {
    title: "Package Balinese Massage + Ear Candle + Mini Facial",
    description: "Complete relaxation package combining massage, ear therapy, and facial.",
    price: "IDR 500K",
    image: "/images/service/vitalitasmassage.jpg",
  },
];

const WA_NUMBER = "6282339909121";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Massage Service Options
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-emerald-600 font-bold mb-4 font-mono text-sm">
                  {service.price}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hello, I would like to inquire about your Ketut Massage services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
