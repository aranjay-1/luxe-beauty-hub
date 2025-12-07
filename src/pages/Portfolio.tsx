import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

import bridal1 from "@/assets/gallery/bridal-1.jpg";
import bridal2 from "@/assets/gallery/bridal-2.jpg";
import party1 from "@/assets/gallery/party-1.jpg";
import party2 from "@/assets/gallery/party-2.jpg";
import fashion1 from "@/assets/gallery/fashion-1.jpg";
import fashion2 from "@/assets/gallery/fashion-2.jpg";

type Category = "all" | "bridal" | "party" | "fashion";

const galleryImages = [
  { src: bridal1, category: "bridal", title: "Traditional Bridal Look" },
  { src: party1, category: "party", title: "Cocktail Glam" },
  { src: fashion1, category: "fashion", title: "Editorial Beauty" },
  { src: bridal2, category: "bridal", title: "Engagement Elegance" },
  { src: party2, category: "party", title: "HD Party Makeup" },
  { src: fashion2, category: "fashion", title: "Mehndi Ceremony" },
  { src: bridal1, category: "bridal", title: "Royal Bride" },
  { src: party1, category: "party", title: "Birthday Glam" },
  { src: fashion1, category: "fashion", title: "Fashion Shoot" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Works" },
  { value: "bridal", label: "Bridal" },
  { value: "party", label: "Party" },
  { value: "fashion", label: "Fashion" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-4 mb-6">
              Our <span className="text-primary italic">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of stunning makeup transformations. Each look tells 
              a unique story of beauty and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-20 bg-background/95 backdrop-blur-md z-30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                    index % 5 === 0 ? "md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage({ src: image.src, title: image.title })}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-background font-serif text-lg">{image.title}</p>
                      <p className="text-background/70 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-background text-xl font-serif">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Portfolio;
