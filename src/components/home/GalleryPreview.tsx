import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

import bridal1 from "@/assets/gallery/bridal-1.jpg";
import bridal2 from "@/assets/gallery/bridal-2.jpg";
import party1 from "@/assets/gallery/party-1.jpg";
import party2 from "@/assets/gallery/party-2.jpg";
import fashion1 from "@/assets/gallery/fashion-1.jpg";
import fashion2 from "@/assets/gallery/fashion-2.jpg";

const galleryImages = [
  { src: bridal1, category: "bridal", alt: "Bridal makeup look" },
  { src: party1, category: "party", alt: "Party makeup look" },
  { src: fashion1, category: "fashion", alt: "Fashion makeup look" },
  { src: bridal2, category: "bridal", alt: "Engagement look" },
  { src: party2, category: "party", alt: "Glamour look" },
  { src: fashion2, category: "fashion", alt: "Mehndi ceremony look" },
];

const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

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
            ✨ Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-6 mb-6">
            A Glimpse of Our{" "}
            <span className="text-primary italic">Artistry</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Every face tells a story. Explore our portfolio of stunning transformations 
            and find inspiration for your special day.
          </p>
        </motion.div>

        {/* Gallery Grid with Enhanced Hover */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-shadow duration-500 ${
                index % 3 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-background font-semibold capitalize text-lg">
                  {image.category}
                </span>
                <span className="text-background/70 text-sm mt-1">Click to view</span>
              </div>
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                <ArrowRight className="w-4 h-4 text-accent-foreground" />
              </div>
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
          <Button asChild variant="gold" size="lg" className="shadow-gold">
            <Link to="/portfolio" className="group">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

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
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
