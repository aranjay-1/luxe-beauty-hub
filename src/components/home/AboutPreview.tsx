import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Sparkles } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutPreview = () => {
  const features = [
    { icon: Award, title: "Certified Expert", desc: "Internationally trained" },
    { icon: Users, title: "500+ Clients", desc: "Happy brides & more" },
    { icon: Clock, title: "8+ Years", desc: "Professional experience" },
    { icon: Sparkles, title: "Premium Products", desc: "Only the best brands" },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={artistPortrait}
                alt="Sakshi Singh - Professional Makeup Artist"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-gold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <p className="text-3xl font-serif font-bold">8+</p>
                <p className="text-sm">Years of Excellence</p>
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
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
              Hello, I'm Sakshi Singh
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
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
                  className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-soft"
                >
                  <feature.icon className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
