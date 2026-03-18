import { motion } from "motion/react";

const sweets = [
  {
    name: "Kaju Katli",
    image: "/assets/generated/sweets-kaju.dim_400x400.jpg",
    description:
      "Silky cashew fudge adorned with silver vark. A timeless festive favourite made with finest cashews and pure ghee.",
    price: "₹800 / kg",
  },
  {
    name: "Gulab Jamun",
    image: "/assets/generated/sweets-gulabjamun.dim_400x400.jpg",
    description:
      "Soft, spongy dumplings soaked in rose-saffron sugar syrup. Served warm for an irresistible melt-in-mouth experience.",
    price: "₹400 / kg",
  },
  {
    name: "Motichoor Ladoo",
    image: "/assets/generated/sweets-ladoo.dim_400x400.jpg",
    description:
      "Golden chickpea pearls bound into perfect spheres. Flavoured with cardamom and saffron, a celebration must-have.",
    price: "₹500 / kg",
  },
  {
    name: "Kesar Barfi",
    image: "/assets/generated/sweets-barfi.dim_400x400.jpg",
    description:
      "Creamy milk fudge infused with premium saffron and topped with chopped pistachios. Elegance in every piece.",
    price: "₹600 / kg",
  },
];

export default function Sweets() {
  return (
    <div className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Our Specialities
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy uppercase tracking-tight">
            Our Sweets
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sweets.map((sweet, i) => (
            <motion.div
              key={sweet.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`sweets.item.${i + 1}`}
              className="bg-card rounded-lg overflow-hidden shadow-sweet hover:shadow-lg transition-shadow group"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-burgundy">
                    {sweet.name}
                  </h3>
                  <span className="text-gold text-sm font-semibold">
                    {sweet.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sweet.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
