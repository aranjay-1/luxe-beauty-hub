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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            A Glimpse of Our{" "}
            <span className="text-primary italic">Artistry</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every face tells a story. Explore our portfolio of stunning transformations 
            and find inspiration for your special day.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index % 3 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 capitalize">
                  {image.category}
                </span>
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
          <Button asChild variant="outline" size="lg">
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
