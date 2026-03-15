import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  CalendarClock,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Trophy,
} from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OngoingApplication {
  id: number;
  name: string;
  body: string;
  openDate: string;
  lastDate: string;
  category: string;
}

interface UpcomingForm {
  id: number;
  name: string;
  body: string;
  openingDate: string;
  lastDate: string;
  category: string;
}

interface AnnouncedResult {
  id: number;
  name: string;
  body: string;
  resultDate: string;
  link: string;
  category: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ongoingApplications: OngoingApplication[] = [
  {
    id: 1,
    name: "BHU UET 2026",
    body: "Banaras Hindu University",
    openDate: "15 Feb 2026",
    lastDate: "20 Mar 2026",
    category: "University Entrance",
  },
  {
    id: 2,
    name: "UP Board Compartment Form 2025-26",
    body: "UP Madhyamik Shiksha Parishad",
    openDate: "01 Mar 2026",
    lastDate: "25 Mar 2026",
    category: "Board Exam",
  },
  {
    id: 3,
    name: "Allahabad University Entrance 2026",
    body: "University of Allahabad",
    openDate: "10 Feb 2026",
    lastDate: "30 Mar 2026",
    category: "University Entrance",
  },
  {
    id: 4,
    name: "UPTET 2026 Application",
    body: "UP Basic Education Board",
    openDate: "05 Mar 2026",
    lastDate: "05 Apr 2026",
    category: "Teacher Eligibility",
  },
  {
    id: 5,
    name: "NDA II 2026",
    body: "UPSC",
    openDate: "12 Mar 2026",
    lastDate: "01 Apr 2026",
    category: "Defence",
  },
  {
    id: 6,
    name: "SSC CGL 2026",
    body: "Staff Selection Commission",
    openDate: "18 Feb 2026",
    lastDate: "18 Mar 2026",
    category: "Government Job",
  },
  {
    id: 7,
    name: "CTET July 2026",
    body: "CBSE",
    openDate: "20 Mar 2026",
    lastDate: "19 Apr 2026",
    category: "Teacher Eligibility",
  },
];

const upcomingForms: UpcomingForm[] = [
  {
    id: 1,
    name: "BHU PET 2026",
    body: "Banaras Hindu University",
    openingDate: "01 Apr 2026",
    lastDate: "30 Apr 2026",
    category: "University Entrance",
  },
  {
    id: 2,
    name: "UP Scholarship Form 2026-27",
    body: "UP Samaj Kalyan Vibhag",
    openingDate: "15 Apr 2026",
    lastDate: "31 May 2026",
    category: "Scholarship",
  },
  {
    id: 3,
    name: "UPCET 2026",
    body: "Dr. APJ Abdul Kalam Technical University",
    openingDate: "10 Apr 2026",
    lastDate: "10 May 2026",
    category: "University Entrance",
  },
  {
    id: 4,
    name: "NEET UG 2026",
    body: "National Testing Agency (NTA)",
    openingDate: "05 Apr 2026",
    lastDate: "05 May 2026",
    category: "Medical Entrance",
  },
  {
    id: 5,
    name: "JEE Advanced 2026",
    body: "IIT Bombay",
    openingDate: "22 Apr 2026",
    lastDate: "05 May 2026",
    category: "Engineering Entrance",
  },
  {
    id: 6,
    name: "UP Police Constable 2026",
    body: "UPPBPB",
    openingDate: "20 Apr 2026",
    lastDate: "20 May 2026",
    category: "Government Job",
  },
];

const announcedResults: AnnouncedResult[] = [
  {
    id: 1,
    name: "UP Board Class 10 Result 2025",
    body: "UPMSP",
    resultDate: "27 Apr 2025",
    link: "https://upmsp.edu.in",
    category: "Board Result",
  },
  {
    id: 2,
    name: "UP Board Class 12 Result 2025",
    body: "UPMSP",
    resultDate: "27 Apr 2025",
    link: "https://upmsp.edu.in",
    category: "Board Result",
  },
  {
    id: 3,
    name: "UPTET 2025 Result",
    body: "UP Basic Education Board",
    resultDate: "15 Feb 2026",
    link: "https://updeled.gov.in",
    category: "Teacher Eligibility",
  },
  {
    id: 4,
    name: "BHU UET 2025 Result",
    body: "Banaras Hindu University",
    resultDate: "20 Jun 2025",
    link: "https://bhuonline.in",
    category: "University Entrance",
  },
  {
    id: 5,
    name: "SSC CGL 2024 Final Result",
    body: "Staff Selection Commission",
    resultDate: "10 Jan 2026",
    link: "https://ssc.nic.in",
    category: "Government Job",
  },
  {
    id: 6,
    name: "CTET Dec 2024 Result",
    body: "CBSE",
    resultDate: "18 Jan 2026",
    link: "https://ctet.nic.in",
    category: "Teacher Eligibility",
  },
  {
    id: 7,
    name: "UPSC Civil Services 2024 Final",
    body: "UPSC",
    resultDate: "22 Apr 2025",
    link: "https://upsc.gov.in",
    category: "Civil Services",
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function AcadNavbar({ onBack }: { onBack: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-border"
      style={{ boxShadow: "0 2px 20px rgba(26,60,110,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            data-ocid="acad.back.button"
            className="inline-flex items-center gap-2 font-semibold text-sm text-slate-600 hover:text-navy transition-colors px-3 py-2 rounded-lg hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/online-square-logo-transparent.dim_300x300.png"
              alt="Online Square Logo"
              className="h-8 w-8 object-contain rounded-lg"
            />
            <span className="text-navy font-bold text-lg font-display tracking-tight hidden sm:inline">
              Online Square
            </span>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919389906180"
              data-ocid="acad.call.button"
              className="inline-flex items-center gap-2 text-white font-bold px-4 py-2 rounded-full text-sm hover:scale-105 active:scale-95 transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.19 43), oklch(0.63 0.22 40))",
                boxShadow: "0 4px 16px oklch(0.72 0.19 43 / 0.40)",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919389906180"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="acad.whatsapp.button"
              className="inline-flex items-center gap-2 text-white font-bold px-4 py-2 rounded-full text-sm hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Mobile expanded CTAs */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-3 flex gap-3">
            <a
              href="tel:+919389906180"
              data-ocid="acad.call.button"
              className="flex-1 flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-full text-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.19 43), oklch(0.63 0.22 40))",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919389906180"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-full text-sm"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function AcadHero() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.25 0.10 255 / 0.97) 0%, oklch(0.18 0.13 260 / 0.95) 100%)",
      }}
    >
      {/* Background patterns */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/4"
        style={{ backgroundColor: "oklch(0.54 0.22 264)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border"
            style={{
              backgroundColor: "oklch(0.54 0.22 264 / 0.15)",
              borderColor: "oklch(0.54 0.22 264 / 0.4)",
              color: "oklch(0.80 0.14 264)",
            }}
          >
            <GraduationCap className="w-4 h-4" />
            Academic Form &amp; Exam Center
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4 text-white leading-tight">
          Academic{" "}
          <span style={{ color: "oklch(0.82 0.18 43)" }}>Services</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-6 leading-relaxed">
          Helping Bhadohi students with exam form filling, results, and admit
          cards — from BHU to UPTET, NEET to SSC, we keep you updated and guided
          through every step.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle
              className="w-4 h-4"
              style={{ color: "oklch(0.75 0.18 150)" }}
            />
            Expert Assistance
          </span>
          <span className="flex items-center gap-1.5">
            <Star
              className="w-4 h-4"
              style={{ color: "oklch(0.82 0.18 75)" }}
            />
            4.5 Google Rating
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin
              className="w-4 h-4"
              style={{ color: "oklch(0.72 0.19 43)" }}
            />
            Bhadohi, UP
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Category badge colors ────────────────────────────────────────────────────

const categoryColor: Record<string, { bg: string; text: string }> = {
  "University Entrance": {
    bg: "oklch(0.54 0.22 264 / 0.10)",
    text: "oklch(0.38 0.18 264)",
  },
  "Board Exam": {
    bg: "oklch(0.72 0.19 43 / 0.10)",
    text: "oklch(0.52 0.22 43)",
  },
  "Teacher Eligibility": {
    bg: "oklch(0.62 0.18 145 / 0.12)",
    text: "oklch(0.40 0.16 145)",
  },
  Defence: { bg: "oklch(0.45 0.16 30 / 0.10)", text: "oklch(0.38 0.18 30)" },
  "Government Job": {
    bg: "oklch(0.50 0.15 295 / 0.10)",
    text: "oklch(0.38 0.15 295)",
  },
  Scholarship: {
    bg: "oklch(0.68 0.18 55 / 0.12)",
    text: "oklch(0.50 0.20 55)",
  },
  "Medical Entrance": {
    bg: "oklch(0.55 0.20 15 / 0.10)",
    text: "oklch(0.42 0.18 15)",
  },
  "Engineering Entrance": {
    bg: "oklch(0.38 0.18 264 / 0.10)",
    text: "oklch(0.32 0.16 264)",
  },
  "Board Result": {
    bg: "oklch(0.62 0.18 145 / 0.10)",
    text: "oklch(0.42 0.16 145)",
  },
  "Civil Services": {
    bg: "oklch(0.45 0.15 30 / 0.10)",
    text: "oklch(0.38 0.18 30)",
  },
};

function getCategoryStyle(cat: string) {
  return (
    categoryColor[cat] || {
      bg: "oklch(0.54 0.22 264 / 0.10)",
      text: "oklch(0.38 0.18 264)",
    }
  );
}

// ─── Ongoing Application Card ─────────────────────────────────────────────────

function OngoingCard({
  app,
  index,
}: {
  app: OngoingApplication;
  index: number;
}) {
  const catStyle = getCategoryStyle(app.category);
  const waMsg = encodeURIComponent(
    `Hello, I need help with ${app.name} application form`,
  );

  return (
    <div
      data-ocid={`acad.ongoing.item.${index}`}
      className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 4px 24px -4px rgba(26,60,110,0.10)" }}
    >
      {/* Green top bar — open */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.65 0.18 145), oklch(0.55 0.20 150))",
        }}
      />

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-navy font-display leading-snug">
              {app.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {app.body}
            </p>
          </div>
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "#dcfce7", color: "#166534" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open Now
          </span>
        </div>

        {/* Category badge */}
        <div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: catStyle.bg,
              color: catStyle.text,
            }}
          >
            {app.category}
          </span>
        </div>

        {/* Dates */}
        <div className="flex flex-col gap-1.5 text-sm flex-1">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <CalendarCheck className="w-3.5 h-3.5" />
              Opening Date
            </span>
            <span className="text-xs font-semibold text-slate-700">
              {app.openDate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="flex items-center gap-1.5 text-xs font-bold"
              style={{ color: "oklch(0.52 0.22 43)" }}
            >
              <CalendarClock className="w-3.5 h-3.5" />
              Last Date
            </span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-lg"
              style={{
                backgroundColor: "oklch(0.72 0.19 43 / 0.12)",
                color: "oklch(0.50 0.22 43)",
              }}
            >
              {app.lastDate}
            </span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/919389906180?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`acad.ongoing.whatsapp.button.${index}`}
          className="mt-auto w-full inline-flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Get Help on WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── Upcoming Form Card ───────────────────────────────────────────────────────

function UpcomingCard({ form, index }: { form: UpcomingForm; index: number }) {
  const catStyle = getCategoryStyle(form.category);
  const waMsg = encodeURIComponent(`Hello, I need help with ${form.name} form`);

  return (
    <div
      data-ocid={`acad.upcoming.item.${index}`}
      className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 4px 24px -4px rgba(26,60,110,0.10)" }}
    >
      {/* Amber top bar — opening soon */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.78 0.18 75), oklch(0.70 0.20 65))",
        }}
      />

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-navy font-display leading-snug">
              {form.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {form.body}
            </p>
          </div>
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Opening Soon
          </span>
        </div>

        {/* Category badge */}
        <div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: catStyle.bg,
              color: catStyle.text,
            }}
          >
            {form.category}
          </span>
        </div>

        {/* Dates */}
        <div className="flex flex-col gap-1.5 text-sm flex-1">
          <div className="flex items-center justify-between">
            <span
              className="flex items-center gap-1.5 text-xs font-bold"
              style={{ color: "oklch(0.44 0.18 264)" }}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Opens On
            </span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-lg"
              style={{
                backgroundColor: "oklch(0.54 0.22 264 / 0.10)",
                color: "oklch(0.38 0.18 264)",
              }}
            >
              {form.openingDate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <CalendarClock className="w-3.5 h-3.5" />
              Last Date
            </span>
            <span className="text-xs font-semibold text-slate-700">
              {form.lastDate}
            </span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/919389906180?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`acad.upcoming.whatsapp.button.${index}`}
          className="mt-auto w-full inline-flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Get Notified via WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────────

function ResultCard({
  result,
  index,
}: {
  result: AnnouncedResult;
  index: number;
}) {
  const catStyle = getCategoryStyle(result.category);
  const waMsg = encodeURIComponent(
    `Hello, I need help checking ${result.name}`,
  );

  return (
    <div
      data-ocid={`acad.result.item.${index}`}
      className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 4px 24px -4px rgba(26,60,110,0.10)" }}
    >
      {/* Blue top bar — result */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.54 0.22 264), oklch(0.45 0.20 270))",
        }}
      />

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-navy font-display leading-snug">
              {result.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {result.body}
            </p>
          </div>
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "#dbeafe", color: "#1e40af" }}
          >
            <Trophy className="w-3 h-3" />
            Result Out
          </span>
        </div>

        {/* Category badge */}
        <div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: catStyle.bg,
              color: catStyle.text,
            }}
          >
            {result.category}
          </span>
        </div>

        {/* Result date */}
        <div className="flex items-center justify-between flex-1">
          <span
            className="flex items-center gap-1.5 text-xs font-bold"
            style={{ color: "oklch(0.44 0.18 264)" }}
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            Declared On
          </span>
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-lg"
            style={{
              backgroundColor: "oklch(0.54 0.22 264 / 0.10)",
              color: "oklch(0.38 0.18 264)",
            }}
          >
            {result.resultDate}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`acad.result.link.${index}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold px-3 py-2 rounded-xl text-xs transition-all duration-200 hover:scale-105 active:scale-95 text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.54 0.22 264), oklch(0.45 0.20 270))",
            }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Check Result
          </a>
          <a
            href={`https://wa.me/919389906180?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`acad.result.whatsapp.button.${index}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-white font-bold px-3 py-2 rounded-xl text-xs transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Get Help
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AcademicServicesPage({
  onBack,
}: {
  onBack: () => void;
}) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "oklch(0.97 0.02 255)" }}
    >
      {/* Navbar */}
      <AcadNavbar onBack={onBack} />

      {/* Hero */}
      <AcadHero />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(0.54 0.22 264 / 0.10)",
              color: "oklch(0.40 0.18 264)",
            }}
          >
            Latest Academic Updates
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-navy mb-3">
            Forms, Applications &amp; Results
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
            Stay updated with ongoing exam forms, upcoming applications, and
            declared results. We help you fill forms correctly and on time.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList
            data-ocid="acad.filter.tab"
            className="grid w-full grid-cols-3 mb-8 rounded-2xl p-1.5 h-auto gap-1"
            style={{
              backgroundColor: "oklch(0.93 0.03 255)",
              boxShadow: "inset 0 1px 4px rgba(26,60,110,0.08)",
            }}
          >
            <TabsTrigger
              value="ongoing"
              data-ocid="acad.ongoing.tab"
              className="flex items-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 data-[state=active]:text-white data-[state=active]:shadow-md"
              style={
                {
                  "--tw-data-active-bg": "oklch(0.65 0.18 145)",
                } as React.CSSProperties
              }
            >
              <ClipboardList className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Ongoing Applications</span>
              <span className="sm:hidden">Ongoing</span>
              <Badge
                className="text-xs font-bold ml-1"
                style={{
                  backgroundColor: "#dcfce7",
                  color: "#166534",
                  border: "none",
                }}
              >
                {ongoingApplications.length}
              </Badge>
            </TabsTrigger>

            <TabsTrigger
              value="upcoming"
              data-ocid="acad.upcoming.tab"
              className="flex items-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Upcoming Forms</span>
              <span className="sm:hidden">Upcoming</span>
              <Badge
                className="text-xs font-bold ml-1"
                style={{
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                  border: "none",
                }}
              >
                {upcomingForms.length}
              </Badge>
            </TabsTrigger>

            <TabsTrigger
              value="results"
              data-ocid="acad.results.tab"
              className="flex items-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Trophy className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Announced Results</span>
              <span className="sm:hidden">Results</span>
              <Badge
                className="text-xs font-bold ml-1"
                style={{
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  border: "none",
                }}
              >
                {announcedResults.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Ongoing Applications Tab */}
          <TabsContent value="ongoing" data-ocid="acad.ongoing.panel">
            <div
              className="mb-6 flex items-center gap-3 p-4 rounded-xl border"
              style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#dcfce7" }}
              >
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#166534" }}>
                  {ongoingApplications.length} Forms Currently Open
                </p>
                <p className="text-xs" style={{ color: "#15803d" }}>
                  Apply before the last date — we assist with form filling,
                  document upload, and fee payment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {ongoingApplications.map((app, idx) => (
                <OngoingCard key={app.id} app={app} index={idx + 1} />
              ))}
            </div>
          </TabsContent>

          {/* Upcoming Forms Tab */}
          <TabsContent value="upcoming" data-ocid="acad.upcoming.panel">
            <div
              className="mb-6 flex items-center gap-3 p-4 rounded-xl border"
              style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#fef3c7" }}
              >
                <CalendarClock
                  className="w-4 h-4"
                  style={{ color: "#d97706" }}
                />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#92400e" }}>
                  {upcomingForms.length} Forms Opening Soon
                </p>
                <p className="text-xs" style={{ color: "#b45309" }}>
                  Mark your calendar — contact us early to avoid last-minute
                  rush and ensure all documents are ready.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {upcomingForms.map((form, idx) => (
                <UpcomingCard key={form.id} form={form} index={idx + 1} />
              ))}
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" data-ocid="acad.results.panel">
            <div
              className="mb-6 flex items-center gap-3 p-4 rounded-xl border"
              style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <Trophy className="w-4 h-4" style={{ color: "#2563eb" }} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#1e40af" }}>
                  {announcedResults.length} Results Declared
                </p>
                <p className="text-xs" style={{ color: "#1d4ed8" }}>
                  Check your results directly on official websites — we also
                  help with marksheet download and re-checking applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {announcedResults.map((result, idx) => (
                <ResultCard key={result.id} result={result} index={idx + 1} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.31 0.09 255), oklch(0.22 0.12 264))",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "oklch(0.72 0.19 43)" }}
          >
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-black font-display mb-2">
            Need Help with Your Form?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Visit Online Square in Bhadohi or WhatsApp us directly — our team
            will fill your form correctly, upload documents, and pay fees on
            your behalf.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919389906180"
              data-ocid="acad.cta.call.button"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.19 43), oklch(0.63 0.22 40))",
                boxShadow: "0 4px 16px oklch(0.72 0.19 43 / 0.5)",
                color: "white",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <a
              href="https://wa.me/919389906180?text=Hello, I need help with an academic form or exam"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="acad.cta.whatsapp.button"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/25 transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-white py-8 mt-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.09 255), oklch(0.16 0.11 264))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <img
                src="/assets/generated/online-square-logo-transparent.dim_300x300.png"
                alt="Online Square"
                className="h-6 w-6 object-contain rounded"
              />
              <span className="font-semibold text-white/70">
                © {year} Online Square, Bhadohi
              </span>
            </div>
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
    </div>
  );
}
