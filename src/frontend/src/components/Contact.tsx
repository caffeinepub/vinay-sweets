import { Clock, CreditCard, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    id: "address",
    icon: MapPin,
    title: "Our Address",
    lines: [
      { id: "l1", text: "Collectory Chauraha, Station Road," },
      { id: "l2", text: "Chittorgarh, Collectorate," },
      { id: "l3", text: "Chittorgarh-312001, Rajasthan" },
    ],
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone",
    lines: [{ id: "p1", text: "9888888899" }],
    href: "tel:9888888899",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email",
    lines: [{ id: "e1", text: "aaaaa@gmail.com" }],
    href: "mailto:aaaaa@gmail.com",
  },
  {
    id: "hours",
    icon: Clock,
    title: "Working Hours",
    lines: [
      { id: "h1", text: "Monday to Saturday" },
      { id: "h2", text: "8:00 AM – 8:00 PM" },
      { id: "h3", text: "Closed on Sundays" },
    ],
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Payment Methods",
    lines: [
      { id: "pay1", text: "Phone Pay" },
      { id: "pay2", text: "Google Pay" },
      { id: "pay3", text: "Paytm" },
      { id: "pay4", text: "Cash" },
    ],
  },
];

export default function Contact() {
  return (
    <div className="bg-burgundy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Find Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground uppercase tracking-tight">
            Visit Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`contact.item.${i + 1}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-3 border border-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                  {info.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {info.lines.map((line) =>
                    info.href ? (
                      <a
                        key={line.id}
                        href={info.href}
                        className="text-white/80 text-sm hover:text-gold transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.id} className="text-white/80 text-sm">
                        {line.text}
                      </p>
                    ),
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
