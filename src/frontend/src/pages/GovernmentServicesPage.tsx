import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Clock,
  CreditCard,
  FileText,
  Home,
  IdCard,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  Shield,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface GovService {
  id: number;
  name: string;
  icon: React.ElementType;
  description: string;
  documents: string[];
  steps: string[];
  fee: string;
  time: string;
  subServices?: string[];
  waMessage: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const governmentServices: GovService[] = [
  {
    id: 1,
    name: "PAN Card Application",
    icon: CreditCard,
    description:
      "Permanent Account Number — mandatory for income tax, banking, and financial transactions. Required by all Indian citizens and entities for financial dealings.",
    documents: [
      "Aadhaar card (identity + address proof)",
      "Passport-size photo (recent)",
      "Filled Form 49A (we help you fill it)",
    ],
    steps: [
      "Fill Form 49A online on NSDL/UTIITSL portal",
      "Upload scanned documents and photo",
      "Pay fees online (₹110 for Indian address)",
      "Submit application & receive acknowledgment number",
      "PAN card delivered by India Post in 15–20 working days",
    ],
    fee: "₹110 (Indian address) / ₹1,020 (foreign address)",
    time: "15–20 working days",
    waMessage: "Hello, I need help with PAN Card Application",
  },
  {
    id: 2,
    name: "Aadhaar Card Services",
    icon: Shield,
    description:
      "UID-based identity card — required for almost all government schemes, KYC verification, and banking. We assist with all Aadhaar-related services.",
    subServices: [
      "New Enrollment",
      "Name / DOB / Gender Correction",
      "Address Update",
      "Mobile Number Update",
      "Biometric Update",
      "Aadhaar Reprint",
    ],
    documents: [
      "Proof of identity (Voter ID / Passport / PAN)",
      "Proof of address (electricity bill / rent agreement)",
      "Proof of birth — for children (birth certificate)",
    ],
    steps: [
      "Visit Aadhaar enrollment center (we guide you)",
      "Fill enrollment / correction form",
      "Biometric capture (fingerprints + iris scan)",
      "Receive acknowledgment slip",
      "Aadhaar issued and delivered within 90 days",
    ],
    fee: "New enrollment FREE | Updates ₹50 per request",
    time: "90 days (new) / 30 days (update)",
    waMessage: "Hello, I need help with Aadhaar Card Services",
  },
  {
    id: 3,
    name: "Voter ID (EPIC Card)",
    icon: Users,
    description:
      "Electoral Photo Identity Card — official proof of Indian citizenship and mandatory for voting in elections. We handle new registrations, corrections, and duplicates.",
    subServices: [
      "New Registration (Form 6)",
      "Correction / Name Change (Form 8)",
      "Duplicate Card (Form 001)",
    ],
    documents: [
      "Proof of age (birth certificate / Class 10 marksheet)",
      "Proof of address (Aadhaar / electricity bill / ration card)",
      "Passport-size photo (recent, plain background)",
    ],
    steps: [
      "Fill relevant form on voterportal.eci.gov.in",
      "Upload required documents and photo",
      "Submit application and note reference number",
      "BLO (Booth Level Officer) verification at your home",
      "Voter ID card printed and delivered by post",
    ],
    fee: "Absolutely FREE",
    time: "30–45 days",
    waMessage: "Hello, I need help with Voter ID (EPIC Card)",
  },
  {
    id: 4,
    name: "Birth / Death Certificate",
    icon: ScrollText,
    description:
      "Official government record of birth or death — required for school admission, passport, property transactions, and insurance claims.",
    documents: [
      "Hospital discharge summary or birth record",
      "Parents' Aadhaar / ID proofs",
      "Marriage certificate of parents (for birth certificate)",
      "Medical certificate of death from doctor (for death certificate)",
    ],
    steps: [
      "Apply within 21 days at local municipal office (free); late registration incurs fee",
      "Fill registration form at the Registrar's office",
      "Submit required documents along with form",
      "Registrar verifies and issues the certificate",
      "Collect certificate from office or receive by post",
    ],
    fee: "₹5–₹20 (varies by district) | Late registration up to ₹50",
    time: "7–15 days",
    waMessage: "Hello, I need help with Birth / Death Certificate",
  },
  {
    id: 5,
    name: "Income Certificate",
    icon: Wallet,
    description:
      "State-issued certificate for UP residents proving annual family income — essential for scholarships, educational loans, and government scheme reservations.",
    documents: [
      "Ration card (for family details)",
      "Aadhaar card of applicant",
      "Self-declaration affidavit on ₹10 stamp paper",
      "Passport-size photo",
    ],
    steps: [
      "Apply online on e-sathi.up.gov.in portal",
      "Upload scanned copies of required documents",
      "Pay service charge (₹10–₹30)",
      "Tehsildar verification of application details",
      "Certificate issued digitally — download from portal",
    ],
    fee: "₹10–₹30 service charge",
    time: "7–15 working days",
    waMessage: "Hello, I need help with Income Certificate",
  },
  {
    id: 6,
    name: "Caste Certificate (SC/ST/OBC)",
    icon: BookOpen,
    description:
      "Verifies caste status for UP residents — required for reservations in government jobs, educational institutions, and various government welfare schemes.",
    documents: [
      "Aadhaar card of applicant",
      "Ration card (for family details)",
      "Proof of caste (father's caste certificate or old records)",
      "Passport-size photo",
    ],
    steps: [
      "Apply online on e-sathi.up.gov.in portal",
      "Submit all supporting caste documents",
      "SDM / Tehsildar verification process",
      "Pay applicable service charge",
      "Certificate issued digitally — download from portal",
    ],
    fee: "₹10–₹30 service charge",
    time: "15–30 working days",
    waMessage: "Hello, I need help with Caste Certificate",
  },
  {
    id: 7,
    name: "Domicile / Niwas Praman Patra",
    icon: Home,
    description:
      "Residential proof certificate for UP — required for state government job applications, educational admissions, and government schemes exclusive to UP residents.",
    documents: [
      "Aadhaar card of applicant",
      "Ration card (with address)",
      "Electricity bill or water bill",
      "Proof of 3+ years residence in Uttar Pradesh",
    ],
    steps: [
      "Apply online on e-sathi.up.gov.in portal",
      "Upload all residence proof documents",
      "Pay applicable service charge",
      "Verification by local authority / Tehsildar",
      "Certificate issued digitally — download from portal",
    ],
    fee: "₹10–₹30",
    time: "7–15 working days",
    waMessage:
      "Hello, I need help with Domicile Certificate (Niwas Praman Patra)",
  },
  {
    id: 8,
    name: "Passport Assistance",
    icon: IdCard,
    description:
      "Complete assistance with Passport Seva Portal application — from form filling to document checklist, appointment booking, and step-by-step guidance for fresh and renewal applications.",
    documents: [
      "Aadhaar card and PAN card",
      "Birth certificate (for age proof)",
      "Address proof (electricity bill / bank statement)",
      "Existing passport (for renewal applications)",
      "Class 10 certificate (for date of birth proof)",
      "2 recent passport-size photos (white background)",
    ],
    steps: [
      "Register and create account on passportindia.gov.in",
      "Fill online application form with all details",
      "Book appointment at nearest PSK / POPSK center",
      "Visit center on appointment day with original documents",
      "Police verification conducted at home address",
      "Passport dispatched by Speed Post to registered address",
    ],
    fee: "₹1,500 (fresh, 36 pages) | ₹2,000 (60 pages) | ₹3,500 (tatkal)",
    time: "30–45 days (normal) | 1–3 days (tatkal)",
    waMessage: "Hello, I need help with Passport Application",
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function GovNavbar({ onBack }: { onBack: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-border shadow-nav"
      style={{ boxShadow: "0 2px 20px rgba(26,60,110,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            data-ocid="govt.back.button"
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
              data-ocid="govt.call.button"
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
              data-ocid="govt.call.button"
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

function GovHero() {
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
              backgroundColor: "oklch(0.72 0.19 43 / 0.15)",
              borderColor: "oklch(0.72 0.19 43 / 0.4)",
              color: "oklch(0.88 0.14 43)",
            }}
          >
            <FileText className="w-4 h-4" />
            Official Document Assistance
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4 text-white leading-tight">
          Government{" "}
          <span style={{ color: "oklch(0.82 0.18 43)" }}>Services</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-6 leading-relaxed">
          Helping Bhadohi residents navigate government paperwork with ease.
          From PAN cards to Passports — we guide you through every step of the
          process.
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

// ─── Service Card (Accordion) ─────────────────────────────────────────────────

function ServiceAccordionItem({
  service,
  index,
}: {
  service: GovService;
  index: number;
}) {
  const Icon = service.icon;
  const itemIndex = index + 1;

  return (
    <AccordionItem
      value={`service-${service.id}`}
      data-ocid={`govt.service.item.${itemIndex}`}
      className="bg-white border border-border rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-card transition-shadow duration-300"
      style={{ borderRadius: "1rem" }}
    >
      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors [&>svg]:hidden">
        <div className="flex items-center gap-4 w-full text-left">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.31 0.09 255 / 0.08), oklch(0.54 0.22 264 / 0.12))",
            }}
          >
            <Icon
              className="w-6 h-6"
              style={{ color: "oklch(0.31 0.09 255)" }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-navy font-display">
              {service.name}
            </h3>
            <p className="text-sm text-slate-500 mt-0.5 line-clamp-1 hidden sm:block">
              {service.description.split("—")[0].trim()}
            </p>
          </div>

          {/* Right badges */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <span
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
                color: "oklch(0.55 0.22 43)",
              }}
            >
              <Clock className="w-3 h-3" />
              {service.time.split(" / ")[0]}
            </span>
            <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 accordion-chevron" />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-6 pb-6">
        <div className="pt-2">
          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Sub-services if present */}
          {service.subServices && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-navy mb-2.5 uppercase tracking-wide">
                Available Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.subServices.map((sub) => (
                  <Badge
                    key={sub}
                    variant="secondary"
                    className="text-xs font-medium"
                    style={{
                      backgroundColor: "oklch(0.54 0.22 264 / 0.1)",
                      color: "oklch(0.38 0.16 264)",
                    }}
                  >
                    {sub}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            {/* Documents Required */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-3 flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.54 0.22 264 / 0.15)" }}
                >
                  <FileText
                    className="w-3 h-3"
                    style={{ color: "oklch(0.44 0.18 264)" }}
                  />
                </div>
                Documents Required
              </h4>
              <ul className="space-y-2">
                {service.documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.62 0.19 150)" }}
                    />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Process */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-3 flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.19 43 / 0.15)" }}
                >
                  <ScrollText
                    className="w-3 h-3"
                    style={{ color: "oklch(0.62 0.22 43)" }}
                  />
                </div>
                Step-by-Step Process
              </h4>
              <ol className="space-y-2">
                {service.steps.map((step, stepIdx) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: "oklch(0.31 0.09 255)",
                        color: "white",
                        minWidth: "1.25rem",
                      }}
                    >
                      {stepIdx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Fee & Time badges */}
          <div className="flex flex-wrap gap-3 mb-5">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
                color: "oklch(0.50 0.22 43)",
              }}
            >
              <Wallet className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide mr-1 opacity-60">
                Fee:
              </span>
              {service.fee}
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: "oklch(0.54 0.22 264 / 0.1)",
                color: "oklch(0.40 0.16 264)",
              }}
            >
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide mr-1 opacity-60">
                Time:
              </span>
              {service.time}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/919389906180?text=${encodeURIComponent(service.waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`govt.whatsapp.button.${itemIndex}`}
            className="inline-flex items-center gap-2.5 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-4 h-4" />
            Get Help on WhatsApp
            <span className="text-xs font-normal opacity-80">→</span>
          </a>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function GovernmentServicesPage({
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
      <GovNavbar onBack={onBack} />

      {/* Hero */}
      <GovHero />

      {/* Services Accordion */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Section header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(0.72 0.19 43 / 0.1)",
              color: "oklch(0.55 0.22 43)",
            }}
          >
            8 Services Available
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-navy mb-3">
            All Government Services
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
            Click on any service to view detailed requirements, step-by-step
            process, fees, and get direct WhatsApp assistance.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {governmentServices.map((service, index) => (
            <ServiceAccordionItem
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.31 0.09 255), oklch(0.22 0.12 264))",
          }}
        >
          <h3 className="text-2xl font-black font-display mb-2">
            Need Personalized Help?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Visit Online Square in Bhadohi or contact us directly — our team
            will guide you through the exact documents and process for your
            specific case.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919389906180"
              data-ocid="govt.call.button"
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
              href="https://wa.me/919389906180?text=Hello, I need help with a government service"
              target="_blank"
              rel="noopener noreferrer"
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
