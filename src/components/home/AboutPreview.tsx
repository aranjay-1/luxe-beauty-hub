import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutPreview = () => {
  const features = [
    { icon: Award, title: "Certified Expert", desc: "Internationally trained" },
    { icon: Users, title: "500+ Clients", desc: "Happy brides & more" },
    { icon: Clock, title: "8+ Years", desc: "Professional experience" },
    { icon: Sparkles, title: "Premium Products", desc: "Only the best brands" },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-elevated"
              >
                <img
                  src={artistPortrait}
                  alt="Sakshi Singh - Professional Makeup Artist"
                  className="w-full rounded-2xl"
                />
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Decorative Frame */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              
              {/* Secondary Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-gold"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl font-serif font-bold">8+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </motion.div>

              {/* Additional Floating Element */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <p className="text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Certified
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-sm font-semibold text-accent tracking-widest uppercase px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
            >
              👋 About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-6 mb-6">
              Hello, I'm <span className="text-primary">Sakshi Singh</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              With over 8 years of experience in the beauty industry, I specialize in creating 
              stunning bridal looks that enhance your natural beauty. My passion lies in making 
              every client feel confident and radiant on their special day.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trained in HD, Airbrush, and contemporary makeup techniques, I use only premium 
              international products to ensure long-lasting, flawless results. From traditional 
              Indian bridal looks to modern glamour, I bring your vision to life.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-soft hover:shadow-elevated border border-transparent hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="gold" size="lg" className="shadow-gold">
              <Link to="/about" className="group">
                Learn More About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
