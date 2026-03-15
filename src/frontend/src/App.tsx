import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  CreditCard,
  ExternalLink,
  FileText,
  GraduationCap,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  ThumbsUp,
  X,
  Zap,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import AcademicServicesPage from "./pages/AcademicServicesPage";
import GovernmentServicesPage from "./pages/GovernmentServicesPage";

// ─── Helpers ────────────────────────────────────────────────────────────────

function isShopOpen(): boolean {
  const istHour = Number.parseInt(
    new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date()),
  );
  const day = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });
  if (day === "Sunday") return istHour >= 10 && istHour < 17;
  return istHour >= 9 && istHour < 19;
}

function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  const stars: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    const fill = i <= Math.floor(rating) ? 1 : i - 1 < rating ? 0.5 : 0;
    stars.push(
      <span key={i} className="relative inline-block">
        <Star
          className={`${sizeMap[size]} text-gray-200`}
          fill="currentColor"
        />
        {fill > 0 && (
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${fill * 100}%` }}
          >
            <Star
              className={`${sizeMap[size]} text-yellow-400`}
              fill="currentColor"
            />
          </span>
        )}
      </span>,
    );
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Academic Services",
    color: "from-blue-500 to-blue-700",
    items: [
      "Online Exam Forms (BHU, UP Board, etc.)",
      "Check Results Online",
      "Download Admit Cards",
      "University Registrations",
    ],
  },
  {
    id: 2,
    icon: FileText,
    title: "Document Services",
    color: "from-indigo-500 to-indigo-700",
    items: [
      "Xerox (Black & White / Color)",
      "Document Scanning",
      "Color Printing",
      "Lamination",
    ],
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Financial & Utility",
    color: "from-emerald-500 to-emerald-700",
    items: [
      "Electricity Bill Payments",
      "Mobile & DTH Recharge",
      "Online Shopping Assistance",
      "Money Transfer",
    ],
  },
  {
    id: 4,
    icon: Landmark,
    title: "Government Services",
    color: "from-purple-500 to-purple-700",
    items: [
      "PAN Card Application",
      "Aadhaar Card Services",
      "Voter ID Assistance",
      "Birth/Death Certificates",
    ],
  },
];

const reviews = [
  {
    id: 1,
    name: "Ramesh Kumar",
    initials: "RK",
    rating: 5,
    text: "बहुत अच्छी सेवा! PAN card बनवाने में बहुत मदद मिली। Staff very helpful and fast service. Highly recommend to everyone in Bhadohi.",
    tag: "PAN Card Service",
  },
  {
    id: 2,
    name: "Priya Verma",
    initials: "PV",
    rating: 5,
    text: "Excellent service for online exam forms. BHU form fill karne mein bahut help ki. Sab kuch bahut jaldi aur sahi se hua. Highly recommended!",
    tag: "Academic Services",
  },
  {
    id: 3,
    name: "Suresh Yadav",
    initials: "SY",
    rating: 5,
    text: "Bijli bill, mobile recharge sab kuch ek jagah. Very convenient and affordable pricing. 5 star deserving shop in Bhadohi — best digital center!",
    tag: "Utility Services",
  },
];

const features = [
  {
    icon: Star,
    title: "4.5 Star Rating",
    desc: "Trusted by 100+ happy customers across Bhadohi",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    desc: "Quick turnaround on all services — same day delivery",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Affordable Prices",
    desc: "Transparent pricing with no hidden charges ever",
    highlight: false,
  },
];

// ─── Navigation ─────────────────────────────────────────────────────────────

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-nav"
          : "bg-white/95 backdrop-blur-md shadow-nav"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/online-square-logo-transparent.dim_300x300.png"
              alt="Online Square Logo"
              className="h-10 w-10 object-contain rounded-lg"
            />
            <span className="text-navy font-bold text-xl font-display tracking-tight">
              Online Square
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-brand after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919389906180"
              data-ocid="nav.primary_button"
              className="inline-flex items-center gap-2 bg-orange-brand text-white font-bold px-5 py-2 rounded-full text-sm hover:shadow-orange transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-1 pt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-secondary hover:text-navy rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919389906180"
                className="mx-3 mt-2 flex items-center justify-center gap-2 bg-orange-brand text-white font-bold px-5 py-2.5 rounded-full text-sm"
                style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const open = isShopOpen();

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.10 255 / 0.93) 0%, oklch(0.18 0.13 260 / 0.90) 100%)",
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "oklch(0.54 0.22 264)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Open/Closed Badge */}
        <div className="flex justify-center mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border-2 ${
              open
                ? "bg-green-500/20 text-green-300 border-green-400/50"
                : "bg-red-500/20 text-red-300 border-red-400/50"
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${open ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
            />
            {open ? "Open Now" : "Currently Closed"}
            <span className="text-xs font-normal opacity-75">
              {open ? "Closes at 7:00 PM" : "Opens at 9:00 AM"}
            </span>
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight mb-4 leading-none">
          <span className="text-white">Online </span>
          <span style={{ color: "oklch(0.82 0.18 43)" }}>Square</span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-3 leading-tight max-w-2xl mx-auto">
          Your Trusted Partner for All Online & Digital Services
        </p>

        <p className="text-base text-white/65 mb-8 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          Bhadohi, Uttar Pradesh
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919389906180"
            data-ocid="hero.primary_button"
            className="group inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full text-lg shadow-orange transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.19 43), oklch(0.63 0.22 40))",
              boxShadow: "0 6px 28px oklch(0.72 0.19 43 / 0.55)",
            }}
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Call Now
            <span className="text-sm font-normal opacity-90">
              +91 93899 06180
            </span>
          </a>

          <a
            href="https://wa.me/919389906180"
            data-ocid="hero.secondary_button"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/25 transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { val: "4.5★", label: "Google Rating" },
            { val: "100+", label: "Happy Customers" },
            { val: "10+", label: "Services" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-black"
                style={{ color: "oklch(0.85 0.17 43)" }}
              >
                {stat.val}
              </div>
              <div className="text-xs text-white/60 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex justify-center animate-bounce opacity-50">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ────────────────────────────────────────────────────────

function ServicesSection({
  onGovServicesClick,
  onAcademicServicesClick,
}: {
  onGovServicesClick: () => void;
  onAcademicServicesClick: () => void;
}) {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
              color: "oklch(0.62 0.22 43)",
            }}
          >
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-navy mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Everything you need, under one roof — from government forms to
            document printing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isGovt = service.id === 4;
            const isAcademic = service.id === 1;
            return (
              <div
                key={service.id}
                data-ocid={`services.item.${service.id}`}
                className={`group bg-white border rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  isGovt || isAcademic
                    ? "border-orange-brand/30 ring-1 ring-orange-brand/20"
                    : "border-border"
                }`}
                style={{ boxShadow: "0 4px 24px -4px rgba(26,60,110,0.10)" }}
              >
                {/* Top accent bar using gradient */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "oklch(0.72 0.19 43 / 0.12)" }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "oklch(0.62 0.22 43)" }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-3 font-display">
                    {service.title}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-2 flex-1">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "oklch(0.54 0.22 264)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Academic Services CTA */}
                  {isAcademic && (
                    <button
                      type="button"
                      onClick={onAcademicServicesClick}
                      data-ocid="services.academic.link"
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.45 0.18 264), oklch(0.35 0.20 264))",
                        boxShadow: "0 4px 14px oklch(0.45 0.18 264 / 0.40)",
                      }}
                    >
                      View All Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  {/* Government Services CTA */}
                  {isGovt && (
                    <button
                      type="button"
                      onClick={onGovServicesClick}
                      data-ocid="services.govt.link"
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.72 0.19 43), oklch(0.63 0.22 40))",
                        boxShadow: "0 4px 14px oklch(0.72 0.19 43 / 0.40)",
                      }}
                    >
                      View All Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us Section ───────────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section
      id="features"
      data-ocid="features.section"
      className="py-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.03 255) 0%, oklch(0.97 0.02 255) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-navy mb-3">
            Why Choose Us?
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Your neighborhood digital partner — trusted, fast, and fair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                  feature.highlight
                    ? "text-white shadow-card"
                    : "bg-white shadow-card hover:shadow-card-hover"
                }`}
                style={
                  feature.highlight
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.31 0.09 255), oklch(0.22 0.12 264))",
                      }
                    : {}
                }
              >
                {idx === 0 && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
                  >
                    ⭐ Most Trusted
                  </div>
                )}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    feature.highlight ? "bg-white/15" : ""
                  }`}
                  style={
                    !feature.highlight
                      ? { backgroundColor: "oklch(0.72 0.19 43 / 0.1)" }
                      : {}
                  }
                >
                  {feature.title === "4.5 Star Rating" ? (
                    <div className="flex flex-col items-center">
                      <StarRating
                        rating={4.5}
                        size={feature.highlight ? "md" : "md"}
                      />
                    </div>
                  ) : (
                    <Icon
                      className={`w-7 h-7 ${feature.highlight ? "text-white" : ""}`}
                      style={
                        !feature.highlight
                          ? { color: "oklch(0.62 0.22 43)" }
                          : {}
                      }
                    />
                  )}
                </div>
                <h3
                  className={`text-xl font-bold font-display mb-2 ${
                    feature.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    feature.highlight ? "text-white/75" : "text-slate-500"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ────────────────────────────────────────────────────

function ReviewsSection() {
  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
              color: "oklch(0.62 0.22 43)",
            }}
          >
            Customer Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-navy mb-4">
            What Our Customers Say
          </h2>

          {/* Google Rating badge */}
          <div className="inline-flex items-center gap-3 bg-white border-2 border-border rounded-full px-5 py-2.5 shadow-card">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-navy">4.5</span>
              <StarRating rating={4.5} size="md" />
            </div>
            <div className="h-6 w-px bg-border" />
            <span className="text-sm font-semibold text-slate-500">
              Google Rating
            </span>
            <span className="text-lg">🌟</span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              data-ocid={`reviews.item.${review.id}`}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
              style={{ boxShadow: "0 4px 24px -4px rgba(26,60,110,0.10)" }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-5 text-5xl font-black leading-none opacity-10"
                style={{ color: "oklch(0.31 0.09 255)" }}
              >
                "
              </div>

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.31 0.09 255), oklch(0.54 0.22 264))",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">
                    {review.name}
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Footer badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.54 0.22 264 / 0.1)",
                    color: "oklch(0.40 0.16 264)",
                  }}
                >
                  {review.tag}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" />
                  Verified Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About & Location Section ────────────────────────────────────────────────

function AboutSection() {
  const open = isShopOpen();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.03 255) 0%, oklch(0.97 0.02 255) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: About content */}
          <div>
            <span
              className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
                color: "oklch(0.62 0.22 43)",
              }}
            >
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-navy mb-5 leading-tight">
              About Online Square
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-base">
              Online Square is your trusted digital service center in Bhadohi.
              We provide a wide range of government, academic, financial, and
              document services under one roof. Our experienced team is
              dedicated to making digital services accessible and affordable for
              everyone in the community.
            </p>

            {/* Rating highlight */}
            <div
              className="rounded-2xl p-5 mb-6 border border-border"
              style={{ backgroundColor: "oklch(0.97 0.04 255)" }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-black text-navy">4.5</span>
                    <StarRating rating={4.5} size="md" />
                  </div>
                  <p className="text-sm text-slate-500">Google Rating</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-navy">100+</div>
                  <p className="text-sm text-slate-500">Happy Customers</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-navy">5+</div>
                  <p className="text-sm text-slate-500">Years Serving</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-5 border border-border shadow-card">
              <h3 className="text-base font-bold text-navy mb-3 flex items-center gap-2">
                <Clock
                  className="w-5 h-5"
                  style={{ color: "oklch(0.72 0.19 43)" }}
                />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Monday – Saturday</span>
                  <span className="font-semibold text-navy">
                    9:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-navy">
                    10:00 AM – 5:00 PM
                  </span>
                </div>
                <div className="pt-2 border-t border-border">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                      open
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                    />
                    {open ? "Currently Open" : "Currently Closed"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Address & Contact card */}
          <div id="contact" className="space-y-4">
            {/* Map placeholder card */}
            <div
              className="rounded-2xl overflow-hidden border border-border shadow-card"
              style={{ height: "220px", position: "relative" }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.31 0.09 255 / 0.9), oklch(0.22 0.12 264 / 0.9))",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
                >
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-lg mb-1">Online Square</p>
                <p className="text-sm text-white/75 text-center px-6">
                  Main Rd, near SUNDER CARPET, Maryadpatti
                </p>
                <p className="text-sm text-white/75">Bhadohi, 221401</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-card space-y-4">
              <h3 className="text-lg font-bold text-navy mb-2">
                Contact & Location
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.19 43 / 0.1)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(0.62 0.22 43)" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Main Rd, near SUNDER CARPET, Maryadpatti,
                    <br />
                    Bhadohi, Uttar Pradesh 221401
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.54 0.22 264 / 0.1)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(0.44 0.18 264)" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919389906180"
                    className="text-sm font-semibold text-navy hover:text-orange-brand transition-colors"
                  >
                    +91 93899 06180
                  </a>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/919389906180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Online+Square+Bhadohi+221401"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="about.primary_button"
                  className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.31 0.09 255), oklch(0.22 0.12 264))",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      data-ocid="footer.panel"
      className="text-white py-12"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.09 255), oklch(0.16 0.11 264))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/online-square-logo-transparent.dim_300x300.png"
                alt="Online Square"
                className="h-10 w-10 object-contain rounded-lg bg-white/10"
              />
              <span className="text-xl font-black font-display">
                Online Square
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your trusted digital service center in Bhadohi. Government forms,
              document services, and more — all under one roof.
            </p>
            <div className="flex items-center gap-2">
              <StarRating rating={4.5} size="sm" />
              <span className="text-sm font-bold text-yellow-400">4.5/5</span>
              <span className="text-sm text-white/50">Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Main Rd, near SUNDER CARPET, Maryadpatti, Bhadohi, UP 221401
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+919389906180"
                  className="hover:text-white transition-colors"
                >
                  +91 93899 06180
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/919389906180"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mon–Sat: 9AM–7PM | Sun: 10AM–5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/40">
          <p>© {year} Online Square. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Landing Page ─────────────────────────────────────────────────────────────

function LandingPage({
  onGovServicesClick,
  onAcademicServicesClick,
}: {
  onGovServicesClick: () => void;
  onAcademicServicesClick: () => void;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection
          onGovServicesClick={onGovServicesClick}
          onAcademicServicesClick={onAcademicServicesClick}
        />
        <FeaturesSection />
        <ReviewsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

type Page = "home" | "government-services" | "academic-services";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigateToGovtServices = () => {
    setCurrentPage("government-services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToAcademicServices = () => {
    setCurrentPage("academic-services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "government-services") {
    return <GovernmentServicesPage onBack={navigateHome} />;
  }

  if (currentPage === "academic-services") {
    return <AcademicServicesPage onBack={navigateHome} />;
  }

  return (
    <LandingPage
      onGovServicesClick={navigateToGovtServices}
      onAcademicServicesClick={navigateToAcademicServices}
    />
  );
}
