import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle, Calendar, Clock } from "lucide-react";

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Look",
  "Haldi/Mehndi Makeup",
  "HD Makeup",
  "Airbrush Makeup",
  "Hairstyling",
  "Fashion Makeup",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    service: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Booking Request Sent! ✨",
      description: "We'll get back to you within 24 hours to confirm your appointment.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      service: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a makeup appointment.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-4 mb-6">
              Book Your <span className="text-primary italic">Appointment</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to look your absolute best? Fill out the form below or reach out 
              directly to schedule your consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to hear from you! Reach out through any of the channels below 
                  or fill out the booking form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:hello@sakshisingh.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@sakshisingh.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">New Delhi, India</p>
                    <p className="text-sm text-muted-foreground">(Available for travel)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-muted-foreground">By Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Social & WhatsApp */}
              <div className="space-y-4 pt-6 border-t border-border">
                <Button onClick={openWhatsApp} variant="gold" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>

                <a
                  href="https://instagram.com/sakshisinghmakeovers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Follow on Instagram</span>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76356386098791!3d28.643684824188627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1702400000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-serif font-semibold text-foreground">
                    Book Your Session
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Date *
                      </label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Type *
                      </label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Location
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City or venue"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, special requests, or any questions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Booking Request
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    We'll respond within 24 hours to confirm your appointment.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
