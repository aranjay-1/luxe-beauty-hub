import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-foreground" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-background/30 rounded-full" />
        <div className="absolute top-20 left-20 w-48 h-48 border border-background/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-background/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-56 h-56 border border-background/30 rounded-full" />
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating Stars */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Star className="w-6 h-6 text-accent/40 fill-accent/40" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/3"
        animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles className="w-8 h-8 text-background/30" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm mb-8 border border-background/20"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-background/90">Limited Slots Available</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-background mb-6"
          >
            Ready to Look Your{" "}
            <motion.span 
              className="text-accent italic inline-block"
              animate={{ 
                textShadow: ["0 0 20px hsl(40 75% 55% / 0.3)", "0 0 40px hsl(40 75% 55% / 0.6)", "0 0 20px hsl(40 75% 55% / 0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Absolute Best?
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-background/85 mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Book your appointment today and let us create a stunning look 
            that will make you feel confident and beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild variant="gold" size="xl" className="shadow-gold">
              <Link to="/contact" className="group">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+919876543210" className="group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-background/60 text-sm"
          >
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              5-Star Rated
            </span>
            <span className="w-1 h-1 rounded-full bg-background/40" />
            <span>500+ Happy Clients</span>
            <span className="w-1 h-1 rounded-full bg-background/40" />
            <span>Premium Products Only</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
