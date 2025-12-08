import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Sparkles, Heart, Sun, Droplets, Scissors } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Complete bridal transformation with HD/Airbrush techniques for your perfect day.",
    price: "Starting ₹25,000",
  },
  {
    icon: Sparkles,
    title: "Party Makeup",
    description: "Glamorous looks for cocktails, receptions, and special celebrations.",
    price: "Starting ₹8,000",
  },
  {
    icon: Heart,
    title: "Engagement Look",
    description: "Romantic and elegant makeup perfect for your engagement ceremony.",
    price: "Starting ₹12,000",
  },
  {
    icon: Sun,
    title: "Haldi/Mehndi",
    description: "Fresh, dewy looks that photograph beautifully for pre-wedding functions.",
    price: "Starting ₹6,000",
  },
  {
    icon: Droplets,
    title: "HD & Airbrush",
    description: "Flawless, camera-ready makeup using premium airbrush technology.",
    price: "Starting ₹15,000",
  },
  {
    icon: Scissors,
    title: "Hairstyling",
    description: "Elegant updos, curls, and bridal hairstyles to complement your look.",
    price: "Starting ₹5,000",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-accent tracking-widest uppercase px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
          >
            💄 Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-6 mb-6">
            Services Tailored for{" "}
            <span className="text-primary italic">You</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            From bridal elegance to party glamour, discover our range of professional 
            makeup services designed to make you feel absolutely stunning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/40 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Icon with Glow Effect */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-accent font-bold text-lg">{service.price}</p>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Hover Decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button asChild variant="gold" size="lg" className="shadow-gold">
            <Link to="/services" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
