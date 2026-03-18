import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    id: "hours",
    q: "What are your working hours?",
    a: "We are open Monday to Saturday, 8AM to 8PM. We remain closed on Sundays.",
  },
  {
    id: "location",
    q: "Where are you located?",
    a: "Collectory Chauraha, Station Road, Chittorgarh, Collectorate, Chittorgarh-312001, Rajasthan.",
  },
  {
    id: "payment",
    q: "What payment methods do you accept?",
    a: "We accept Phone Pay, Google Pay, and Paytm. Cash payments are also welcome.",
  },
  {
    id: "delivery",
    q: "Do you offer home delivery?",
    a: "Currently we do not offer home delivery. Please visit our shop directly — we'd love to serve you in person!",
  },
  {
    id: "fresh",
    q: "Are your sweets made fresh daily?",
    a: "Yes! All our sweets are made fresh every day using pure ghee and natural ingredients. No preservatives, no artificial flavours.",
  },
  {
    id: "bulk",
    q: "Can I place bulk orders for events?",
    a: "Yes, we accept bulk orders for weddings, festivals, and corporate events. Please call us at 9888888899 in advance so we can prepare accordingly.",
  },
  {
    id: "contact",
    q: "How can I contact you?",
    a: "You can reach us at 9888888899 or email us at aaaaa@gmail.com. We typically respond within a few hours.",
  },
  {
    id: "gift",
    q: "Do you have gift boxes available?",
    a: "Yes, we offer beautifully packaged gift boxes for all occasions and festivals — Diwali, Holi, weddings, and more. Ask in-store for customisation options.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Help & Support
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-ocid={`faqs.item.${i + 1}`}
                className="bg-card rounded-lg px-5 border border-border shadow-xs"
              >
                <AccordionTrigger className="font-medium text-foreground text-left hover:text-burgundy py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
