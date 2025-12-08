import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Instagram } from "lucide-react";
import heroBride from "@/assets/hero-bride.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBride}
          alt="Bridal makeup showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Large Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 backdrop-blur-md mb-6 border border-accent/40 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wider uppercase">Sakshi Singh Makeovers</span>
            <Star className="w-3 h-3 text-accent fill-accent" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-background leading-tight mb-6"
          >
            Where Beauty Meets{" "}
            <motion.span 
              className="text-accent italic inline-block"
              animate={{ 
                textShadow: ["0 0 20px hsl(40 75% 55% / 0.3)", "0 0 40px hsl(40 75% 55% / 0.6)", "0 0 20px hsl(40 75% 55% / 0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Perfection
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-background/85 leading-relaxed mb-10 max-w-lg font-light"
          >
            Transform your special moments with professional makeup artistry. 
            From bridal elegance to party glam, we create looks that make you{" "}
            <span className="text-accent font-medium">unforgettable</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant="gold" size="xl" className="shadow-gold">
              <Link to="/contact" className="group">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="ghost" size="xl" className="text-background/80 hover:text-accent border-background/20 hover:border-accent/50">
              <a 
                href="https://www.instagram.com/sakshisinghmakeovers?igsh=d281MWV6cGY1bnJz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow Us
              </a>
            </Button>
          </motion.div>

          {/* Stats with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-background/20"
          >
            {[
              { number: "500+", label: "Happy Brides" },
              { number: "8+", label: "Years Experience" },
              { number: "50+", label: "Awards" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.15 }}
                className="relative"
              >
                <motion.p 
                  className="text-3xl md:text-4xl font-serif font-bold text-accent"
                  animate={{ 
                    textShadow: ["0 0 10px hsl(40 75% 55% / 0.2)", "0 0 20px hsl(40 75% 55% / 0.4)", "0 0 10px hsl(40 75% 55% / 0.2)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-background/70 mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-background/50 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-2.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
