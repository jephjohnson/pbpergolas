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
import logo from "@/assets/palm-beach-pergolas-logo-sm.png";

const SITE_URL = "https://palmbeachpergolas.com";
const TITLE = "Palm Beach Pergolas | Luxury Outdoor Living";
const DESCRIPTION =
  "Custom pergolas for luxury Palm Beach homes. Elevate your outdoor living with bespoke design, premium materials, and master craftsmanship.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Palm Beach Pergolas" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Palm Beach Pergolas",
          description: DESCRIPTION,
          url: SITE_URL,
          telephone: "+15615550148",
          email: "hello@palmbeachpergolas.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "120 Royal Palm Way",
            addressLocality: "Palm Beach",
            addressRegion: "FL",
            postalCode: "33480",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.7056,
            longitude: -80.0364,
          },
          areaServed: {
            "@type": "Place",
            name: "Palm Beach County, Florida",
          },
          priceRange: "$$$",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
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
      {/* Hero with overlaid navigation */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury coastal pergola at sunset overlooking a pool and palm trees"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
            fetchPriority="high"
          />
        </div>

        {/* Navigation — overlays the hero image */}
        <header className="relative z-20 w-full">
          <div className="container-tight flex h-32 items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="Palm Beach Pergolas" className="h-28 w-auto" width={320} height={320} />
              <span className="sr-only">Palm Beach Pergolas</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-navy underline-offset-8 decoration-terracotta decoration-2 transition-all hover:text-terracotta hover:underline"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="rounded-md bg-terracotta text-white hover:bg-terracotta/90">
                <a href="#contact">Get a Quote</a>
              </Button>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="bg-cream/95 px-6 py-4 backdrop-blur md:hidden">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-navy transition-colors hover:text-terracotta"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="w-full rounded-md bg-terracotta text-white hover:bg-terracotta/90">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Cream panel background — translucent haze, image stays visible through it */}
        <div
          className="absolute inset-y-0 left-0 z-1 w-full rounded-tr-[2.5rem] md:w-[55%]"
          style={{
            background: "linear-gradient(to right, color-mix(in oklch, var(--cream) 90%, transparent) 0%, color-mix(in oklch, var(--cream) 75%, transparent) 45%, color-mix(in oklch, var(--cream) 40%, transparent) 75%, transparent 100%)",
          }}
        />

        {/* Hero content — vertically centered over the panel */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="w-full py-12 pl-6 pr-10 sm:pl-8 md:w-[48%] md:py-16 md:pl-12 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
                Palm Beach &middot; South Florida
              </p>
              <h1 className="mt-5 text-5xl leading-[1.05] font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
                Shade,
                <br />
                Elevated.
              </h1>
              <div className="mt-6 h-0.5 w-12 bg-terracotta" />
              <p className="mt-6 max-w-md text-base leading-relaxed text-navy/85">
                Custom pergolas designed to bring structure, comfort, and timeless coastal style to your
                outdoor space—crafted for the way you live in South Florida.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-md bg-terracotta text-white hover:bg-terracotta/90">
                  <a href="#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-md border-navy text-navy transition-colors hover:bg-navy hover:text-cream">
                  <a href="#gallery">Explore Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">What We Do</p>
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
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">Portfolio</p>
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
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
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
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">Get in Touch</p>
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
                    <a href="tel:+15615550148" className="text-muted-foreground transition-colors hover:text-terracotta">(561) 555-0148</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@palmbeachpergolas.com" className="text-muted-foreground transition-colors hover:text-terracotta">hello@palmbeachpergolas.com</a>
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
                  <Button type="submit" className="w-full bg-terracotta text-white hover:bg-terracotta/90">
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
              <img src={logo} alt="Palm Beach Pergolas" className="h-12 w-auto" width={320} height={320} loading="lazy" decoding="async" />
              <span className="font-heading text-lg">Palm Beach Pergolas</span>
            </div>
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Palm Beach Pergolas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
