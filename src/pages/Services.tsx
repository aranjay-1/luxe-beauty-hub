import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Heart, Sun, Droplets, Scissors, Wind, Palette, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Your wedding day deserves nothing less than perfection. Our bridal makeup service includes a complete transformation using HD or Airbrush techniques, ensuring you look flawless from the ceremony to the reception.",
    features: ["Trial session included", "Long-lasting formula", "Touch-up kit provided", "Premium products only"],
    price: "₹25,000",
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Party Makeup",
    description: "Stand out at any celebration with our glamorous party makeup. Perfect for cocktail parties, receptions, birthdays, and special events.",
    features: ["Customized look", "Quick application", "False lashes included", "Photo-ready finish"],
    price: "₹8,000",
    popular: false,
  },
  {
    icon: Heart,
    title: "Engagement Look",
    description: "Make your engagement memorable with a romantic and elegant makeup look that photographs beautifully and lasts all day.",
    features: ["Soft glam or bold look", "Hairstyling included", "Touch-up assistance", "Pre-event consultation"],
    price: "₹12,000",
    popular: true,
  },
  {
    icon: Sun,
    title: "Haldi/Mehndi Makeup",
    description: "Fresh, dewy, and vibrant looks perfect for your pre-wedding celebrations. Designed to complement your colorful outfits.",
    features: ["Waterproof formula", "Natural finish", "Quick touch-ups", "Color-coordinated looks"],
    price: "₹6,000",
    popular: false,
  },
  {
    icon: Droplets,
    title: "HD Makeup",
    description: "Ultra-definition makeup that looks flawless both in person and on camera. Perfect for photo shoots and video recordings.",
    features: ["High-definition coverage", "Seamless blending", "Skin-like finish", "Long wear formula"],
    price: "₹15,000",
    popular: false,
  },
  {
    icon: Wind,
    title: "Airbrush Makeup",
    description: "The latest in makeup technology for a lightweight, buildable, and incredibly long-lasting finish. Ideal for destination weddings.",
    features: ["Lightweight feel", "12+ hour wear", "Sweat-proof", "Perfect for HD cameras"],
    price: "₹18,000",
    popular: true,
  },
  {
    icon: Scissors,
    title: "Hairstyling",
    description: "Complete your look with elegant hairstyling. From classic updos to modern waves, we create styles that complement your makeup.",
    features: ["Consultation included", "Extensions available", "Hair accessories", "Setting spray finish"],
    price: "₹5,000",
    popular: false,
  },
  {
    icon: Palette,
    title: "Fashion Makeup",
    description: "Bold, creative, and editorial looks for fashion shoots, portfolios, and runway events. Push boundaries with artistic makeup.",
    features: ["Creative concepts", "Portfolio-ready", "Multiple looks", "On-location service"],
    price: "₹10,000",
    popular: false,
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-4 mb-6">
              Premium Makeup <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From bridal elegance to party glamour, we offer a comprehensive range of 
              professional makeup services tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-card border ${
                  service.popular ? "border-accent shadow-gold" : "border-border"
                } hover:shadow-elevated transition-shadow duration-500`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-8 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                    service.popular ? "bg-accent/20" : "bg-primary-light"
                  }`}>
                    <service.icon className={`w-8 h-8 ${service.popular ? "text-accent" : "text-primary"}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Starting at</p>
                        <p className="text-xl font-serif font-bold text-accent">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild variant={service.popular ? "gold" : "outline"} size="sm">
                      <Link to="/contact">
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground mb-8">
              Planning a destination wedding or need services for the entire bridal party? 
              Contact us for customized packages tailored to your requirements.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
