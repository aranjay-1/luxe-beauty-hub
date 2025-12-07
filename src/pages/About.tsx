import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Calendar, Sparkles, Heart, CheckCircle } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const achievements = [
  "Certified Professional Makeup Artist",
  "8+ Years of Experience",
  "500+ Happy Brides",
  "International Training in HD & Airbrush",
  "Featured in Top Wedding Magazines",
  "Best Bridal Makeup Award 2023",
];

const specializations = [
  { icon: Sparkles, title: "Bridal Makeup", desc: "Traditional & Contemporary" },
  { icon: Heart, title: "Engagement Looks", desc: "Soft Glam & Romantic" },
  { icon: Award, title: "HD Makeup", desc: "Camera-Ready Perfection" },
  { icon: Calendar, title: "Pre-Wedding", desc: "Haldi, Mehndi & Sangeet" },
];

const About = () => {
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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-4 mb-6">
              The Artist Behind the <span className="text-primary italic">Magic</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about beauty, dedicated to perfection, and committed to making 
              every client feel absolutely stunning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="relative">
                <img
                  src={artistPortrait}
                  alt="Sakshi Singh - Professional Makeup Artist"
                  className="w-full rounded-2xl shadow-elevated"
                />
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl -z-10" />
                
                {/* Stats Card */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-accent">500+</p>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-accent">8+</p>
                      <p className="text-sm text-muted-foreground">Years Exp.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Hello, I'm Sakshi Singh
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in the beauty industry, I have dedicated 
                  my career to helping women look and feel their absolute best on their most 
                  special days. My journey began with a simple passion for makeup artistry 
                  and has evolved into a mission to bring out the unique beauty in every face.
                </p>
                <p>
                  I specialize in bridal makeup, having created stunning looks for over 500 
                  brides across India. My expertise spans from traditional Indian bridal looks 
                  to contemporary Western styles, always tailored to enhance each client's 
                  natural features.
                </p>
                <p>
                  Trained in HD, Airbrush, and the latest makeup techniques from international 
                  beauty schools, I use only premium products from brands like MAC, Bobbi Brown, 
                  Charlotte Tilbury, and Anastasia Beverly Hills to ensure long-lasting, 
                  flawless results.
                </p>
              </div>

              {/* Achievements */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Achievements & Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  My Specializations
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={spec.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-secondary/50"
                    >
                      <spec.icon className="w-6 h-6 text-accent mb-3" />
                      <p className="font-medium text-foreground">{spec.title}</p>
                      <p className="text-sm text-muted-foreground">{spec.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
