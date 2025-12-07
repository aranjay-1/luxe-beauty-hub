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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            Services Tailored for{" "}
            <span className="text-primary italic">You</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From bridal elegance to party glamour, discover our range of professional 
            makeup services designed to make you feel absolutely stunning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-accent font-semibold">{service.price}</p>

              {/* Hover Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="gold" size="lg">
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
