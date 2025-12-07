import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const allTestimonials = [
  {
    name: "Priya Sharma",
    role: "Bride - Delhi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "Sakshi made me feel like a princess on my wedding day. Her attention to detail and understanding of what I wanted was incredible. Everyone couldn't stop complimenting my look!",
    rating: 5,
    service: "Bridal Makeup",
  },
  {
    name: "Ananya Patel",
    role: "Bride - Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "I was nervous about my bridal makeup, but Sakshi put me at ease instantly. The airbrush makeup lasted all day and night, and I looked flawless in every photo!",
    rating: 5,
    service: "Airbrush Makeup",
  },
  {
    name: "Neha Gupta",
    role: "Party Guest - Gurgaon",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    quote: "Had my makeup done for a cocktail party and received so many compliments. Sakshi is truly talented and uses amazing products. Highly recommend!",
    rating: 5,
    service: "Party Makeup",
  },
  {
    name: "Ritu Mehta",
    role: "Bride - Jaipur",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop",
    quote: "From the trial to the wedding day, Sakshi was professional, patient, and absolutely brilliant. My HD makeup was perfect for photos and lasted through all the ceremonies!",
    rating: 5,
    service: "HD Makeup",
  },
  {
    name: "Kavita Reddy",
    role: "Bride - Bangalore",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop",
    quote: "Sakshi's work is pure artistry. She understood exactly what look I wanted and executed it perfectly. The best decision I made for my wedding!",
    rating: 5,
    service: "Bridal Makeup",
  },
  {
    name: "Simran Kaur",
    role: "Bride - Chandigarh",
    image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=200&h=200&fit=crop",
    quote: "I had 5 functions and Sakshi created unique looks for each one. Her creativity and skill are unmatched. My family and friends were blown away!",
    rating: 5,
    service: "Complete Bridal Package",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  const currentTestimonials = allTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-4 mb-6">
              Client <span className="text-primary italic">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read what our beautiful clients have to say about their experience 
              with Sakshi Singh Makeovers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-elevated transition-shadow duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-6">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentPage ? "bg-accent w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
