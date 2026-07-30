import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Check } from "lucide-react";

import heroImage from "@/assets/hero-pergola.jpg";
import galleryModern from "@/assets/gallery-modern.jpg";
import galleryClassic from "@/assets/gallery-classic.jpg";
import galleryCustom from "@/assets/gallery-custom.jpg";
import galleryPoolside from "@/assets/gallery-poolside.jpg";
import logo from "@/assets/palm-beach-pergolas-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palm Beach Pergolas | Luxury Outdoor Living" },
      { name: "description", content: "Custom pergolas for luxury Palm Beach homes. Elevate your outdoor living with bespoke design, premium materials, and master craftsmanship." },
      { property: "og:title", content: "Palm Beach Pergolas | Luxury Outdoor Living" },
      { property: "og:description", content: "Custom pergolas for luxury Palm Beach homes. Elevate your outdoor living with bespoke design, premium materials, and master craftsmanship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Custom Pergolas",
    description: "Our line of pergolas is designed to complement your home's architecture and your lifestyle, from intimate garden retreats to grand entertaining spaces.",
  },
  {
    title: "Premium Materials",
    description: "Cedar, aluminum, and marine-grade finishes selected for South Florida's coastal climate—beauty that endures sun, salt, and storms.",
  },
  {
    title: "Full-Service Build",
    description: "From concept and permits to final installation, our team manages every detail so you can simply enjoy the finished space.",
  },
];

const gallery = [
  { src: galleryModern, alt: "Modern louvered pergola with integrated lighting and outdoor lounge", title: "Modern Louvered" },
  { src: galleryClassic, alt: "Classic cedar pergola with flowering vines and outdoor dining", title: "Classic Cedar" },
  { src: galleryCustom, alt: "Custom stone-column pergola with outdoor kitchen and ocean view", title: "Mediterranean Estate" },
  { src: galleryPoolside, alt: "Poolside white pergola with daybeds and palm trees", title: "Poolside Pavilion" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="container-tight flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Palm Beach Pergolas" className="h-12 w-auto" width={1024} height={1024} />
            <span className="sr-only font-heading text-xl text-foreground">Palm Beach Pergolas</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Get a Quote</a>
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury coastal pergola at sunset overlooking a pool and palm trees"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-navy/55" />
        </div>

        <div className="container-tight relative z-10 py-20 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">Palm Beach, Florida</p>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Outdoor Living, Elevated
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/90 sm:text-xl">
            Bespoke pergolas crafted for South Florida's most discerning homeowners. Where coastal elegance meets
            master craftsmanship.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
              <a href="#contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <a href="#gallery">View Our Work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">What We Do</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Designed for the Coast</h2>
            <p className="mt-4 text-muted-foreground">
              Every pergola we build is a custom statement—engineered for the elements and tailored to your home.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-cream">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Spaces We've Transformed</h2>
              <p className="mt-4 text-muted-foreground">
                A curated selection of pergolas built for luxury homes across Palm Beach County.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-navy text-navy hover:bg-navy hover:text-white">
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-xl bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">Get in Touch</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Begin Your Outdoor Transformation</h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your vision. We'll respond within one business day to schedule a private consultation.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(561) 555-0148</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@palmbeachpergolas.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Showroom</p>
                    <p className="text-muted-foreground">120 Royal Palm Way, Palm Beach, FL 33480</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-navy">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">Thank You</h3>
                  <p className="mt-2 text-muted-foreground">
                    We've received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(561) 555-0148" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="I'm interested in a custom pergola for my poolside terrace..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
                    Send Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-navy py-12 text-white">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Palm Beach Pergolas" className="h-10 w-auto" width={1024} height={1024} />
              <span className="font-heading text-lg">Palm Beach Pergolas</span>
            </div>
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Palm Beach Pergolas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
