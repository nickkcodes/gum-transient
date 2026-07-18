import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  BedDouble,
  Camera,
  Car,
  Clock,
  Facebook,
  Home,
  Image as ImageIcon,
  Layers,
  MapPin,
  MessageCircle,
  Menu,
  Mountain,
  Send,
  Sofa,
  Sparkles,
  Star,
  Trees,
  Wifi,
  Wind,
  X,
  ZoomIn,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const MESSENGER_URL = "https://m.me/";
const FACEBOOK_URL = "https://facebook.com/";
const MAPS_URL = "https://maps.google.com/?q=Baguio+City+Philippines";

/* ---------------- helpers ---------------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="label-accent mb-3">{label}</div>
      <h2 className="text-3xl md:text-5xl text-navy font-semibold leading-tight">{title}</h2>
      <div className="mt-4 flex justify-center"><span className="gold-divider" /></div>
      {subtitle && <p className="mt-5 text-muted-ink text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ---------------- nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#rooms", label: "Rooms" },
    { href: "#amenities", label: "Amenities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-navy/85 backdrop-blur-md shadow-md" : "bg-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 py-4 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-gold text-xl md:text-2xl">G.U.M Transient House</span>
          <span className="text-white/80 text-[11px] tracking-wider uppercase">Baguio City</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/90 hover:text-gold transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-5 py-2.5 text-sm hover:bg-navy hover:text-gold hover:scale-105 border border-gold transition-all"
          >
            Book Now
          </a>
        </nav>
        <button
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2 border-b border-white/10 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-5 py-3 text-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #2b4a6e 0%, #1A2B4A 50%, #0f1a2f 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(160deg, transparent 0%, rgba(21,60,50,0.6) 40%, rgba(26,43,74,0.9) 100%)",
        }}
      />
      {/* mountain silhouettes */}
      <svg className="absolute bottom-24 inset-x-0 w-full opacity-60" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0f1a2f" d="M0,224L120,192L240,240L360,160L480,224L600,144L720,208L840,128L960,192L1080,160L1200,224L1320,176L1440,224L1440,320L0,320Z" />
      </svg>
      <svg className="absolute bottom-24 inset-x-0 w-full opacity-90" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0b1424" d="M0,256L120,240L240,272L360,208L480,256L600,208L720,240L840,192L960,240L1080,208L1200,256L1320,224L1440,256L1440,320L0,320Z" />
      </svg>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,43,74,0.8), rgba(26,43,74,0.4))" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-32">
        <div className="label-accent mb-5 flex items-center justify-center gap-2">
          <span>✦</span> Baguio City, Philippines
        </div>
        <h1 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] font-semibold">
          Your Mountain <br className="hidden md:block" />
          <span className="text-gold italic">Escape</span> Awaits
        </h1>
        <p className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Experience comfort, warmth, and convenience in the heart of Baguio. Fully furnished
          rooms starting at <span className="text-gold font-semibold">₱1,500/night</span>.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-7 py-4 text-sm md:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={18} /> Message Us on Messenger
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 text-white font-semibold px-7 py-4 text-sm md:text-base hover:bg-white hover:text-navy transition-all"
          >
            View Our Rooms
          </a>
        </div>
      </div>

      {/* wave divider */}
      <svg className="absolute bottom-0 inset-x-0 w-full text-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,90.7C1120,85,1280,43,1360,21.3L1440,0L1440,100L0,100Z" />
      </svg>
    </section>
  );
}

/* ---------------- rooms ---------------- */

const ROOMS = [
  {
    icon: Home,
    name: "Spectacular Attic",
    desc: "A spacious, charming retreat featuring a beautiful wooden lounge and a dedicated TV area — perfect for relaxing after a day of exploring.",
    tags: ["Wooden Lounge", "TV Area", "Attic Vibe"],
  },
  {
    icon: Sofa,
    name: "Extreme Unit 4",
    desc: "Enjoy your meals in style with a full dining table setup and the comfort of exclusive private unit access.",
    tags: ["Dining Table", "Private Access", "Spacious"],
  },
  {
    icon: BedDouble,
    name: "Studio 3",
    desc: "A clean, well-organized bedroom setup complete with cozy bunk beds — ideal for small groups and budget-conscious travelers.",
    tags: ["Bunk Beds", "Clean Setup", "Studio"],
  },
  {
    icon: Layers,
    name: "Wow Unit 2",
    desc: "Wake up to the Baguio breeze in this bright, airy room featuring stunning balcony glass doors flooding the space with natural light.",
    tags: ["Balcony", "Glass Doors", "Bright & Airy"],
  },
  {
    icon: Wind,
    name: "Haven Unit 1",
    desc: "Sink into the comfort of a warm living room adorned with elegant dark leather sofas — a true haven for rest and relaxation.",
    tags: ["Living Room", "Leather Sofas", "Cozy Haven"],
  },
];

function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            label="Our Accommodations"
            title="Find Your Perfect Stay"
            subtitle="Every unit is thoughtfully designed for comfort, privacy, and that cozy Baguio feel."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ROOMS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.name} delay={i * 80}>
                <article className="group bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
                  <div className="aspect-[4/3] relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2B4A 0%, #253c66 60%, #C9A84C 140%)" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                        <Icon size={36} className="text-gold" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-4 text-white/60 text-xs uppercase tracking-widest">G.U.M</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-navy text-xl">{r.name}</h3>
                    <p className="mt-2 text-muted-ink text-sm leading-relaxed">{r.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-navy">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href="#booking" className="mt-5 inline-flex items-center gap-1 text-gold font-semibold text-sm hover:gap-2 transition-all">
                      View Details <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- gallery ---------------- */

const GALLERY = [
  { h: 300, icon: ImageIcon },
  { h: 180, icon: Camera },
  { h: 260, icon: ImageIcon },
  { h: 200, icon: Camera },
  { h: 300, icon: Camera },
  { h: 180, icon: ImageIcon },
  { h: 220, icon: ImageIcon },
  { h: 280, icon: Camera },
];

function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader label="Photo Gallery" title="Moments at G.U.M" />
        </Reveal>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {GALLERY.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={i} delay={i * 60} className="mb-5 break-inside-avoid">
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer"
                  style={{
                    height: g.h,
                    background: `linear-gradient(${135 + i * 20}deg, #1A2B4A 0%, #253c66 50%, #C9A84C 130%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition">
                    <Icon size={52} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn size={22} className="text-navy" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold text-navy font-semibold px-7 py-3.5 text-sm hover:bg-gold transition-all"
          >
            <Facebook size={16} /> Follow Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- amenities ---------------- */

const AMENITIES = [
  { icon: Sparkles, title: "Clean & Fully Furnished Rooms", desc: "Every unit is professionally cleaned and comes fully furnished — nothing to bring but yourself." },
  { icon: Wifi, title: "Free High-Speed Wi-Fi", desc: "Stay connected whether you're working remotely, streaming, or video-calling loved ones." },
  { icon: Car, title: "Dedicated Parking Available", desc: "Arrive by car with zero hassle. We offer dedicated parking space for all guests." },
  { icon: Trees, title: "Near Burnham Park", desc: "Just minutes away from the iconic Burnham Park — perfect for morning jogs and scenic strolls." },
  { icon: MapPin, title: "Near Session Road & SM Baguio", desc: "Shopping, dining, and entertainment are all at your doorstep on the famous Session Road." },
  { icon: Mountain, title: "Cozy Mountain Atmosphere", desc: "Breathe in the cool Baguio air and unwind in a property designed for comfort and relaxation." },
];

function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader label="Why Choose Us" title="Everything You Need, Right Here" />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {AMENITIES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 70}>
                <div className="bg-surface rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-navy">
                    <Icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-navy text-xl">{a.title}</h3>
                  <p className="mt-2 text-muted-ink text-sm leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- pricing ---------------- */

const TIERS = [
  { pax: "2 Pax (Base)", rate: "₱1,500", included: ["2 Guest slots", "Free Wi-Fi", "Parking", "Furnished Room"], popular: false },
  { pax: "3 Pax", rate: "₱2,100", included: ["3 Guest slots", "Free Wi-Fi", "Parking", "Furnished Room"], popular: true },
  { pax: "4 Pax", rate: "₱2,700", included: ["4 Guest slots", "Free Wi-Fi", "Parking", "Furnished Room"], popular: false },
  { pax: "5–6 Pax", rate: "₱3,300", included: ["Up to 6 Guest slots", "Free Wi-Fi", "Parking", "Furnished Room"], popular: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            label="Rates & Pricing"
            title="Transparent Pricing, No Surprises"
            subtitle="All rates are per night. Base rate is good for 2 guests — additional guests at ₱600/head."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((t, i) => (
            <Reveal key={t.pax} delay={i * 80}>
              <div
                className={`relative bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col ${
                  t.popular ? "border-2 border-gold lg:-translate-y-3" : "border-2 border-hairline"
                }`}
              >
                {t.popular && (
                  <div className="absolute top-4 right-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Most Popular
                  </div>
                )}
                <div className="bg-navy text-white px-6 py-5">
                  <div className="text-xs uppercase tracking-widest text-white/60">Package</div>
                  <div className="mt-1 font-serif text-2xl">{t.pax}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-center py-2">
                    <div className="font-serif text-gold text-4xl md:text-5xl">{t.rate}</div>
                    <div className="text-muted-ink text-xs uppercase tracking-wider mt-1">per night</div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-ink flex-1">
                    {t.included.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-gold text-navy font-semibold py-3 text-sm hover:bg-navy hover:text-gold border border-gold transition-all"
                  >
                    Book This Rate
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center italic text-muted-ink text-sm">
          Rates are subject to availability. Contact us to confirm your booking dates.
        </p>
      </div>
    </section>
  );
}

/* ---------------- booking form ---------------- */

type FormState = {
  name: string;
  email: string;
  phone: string;
  unit: string;
  checkin: string;
  checkout: string;
  guests: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  unit: "",
  checkin: "",
  checkout: "",
  guests: "2",
  message: "",
};

function Booking() {
  const [data, setData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const validate = (d: FormState) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!d.name.trim()) e.name = "Please enter your full name.";
    if (!d.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email address.";
    if (!d.phone.trim()) e.phone = "Phone number is required.";
    if (!d.unit) e.unit = "Please select a unit.";
    if (!d.checkin) e.checkin = "Check-in date is required.";
    if (!d.checkout) e.checkout = "Check-out date is required.";
    else if (d.checkin && d.checkout <= d.checkin) e.checkout = "Check-out must be after check-in.";
    const g = Number(d.guests);
    if (!g || g < 1 || g > 6) e.guests = "Guests must be between 1 and 6.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSuccess(true);
      setData(emptyForm);
      setTimeout(() => setSuccess(false), 6000);
    }
  };

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-ink/70 focus:outline-none focus:ring-2 focus:ring-gold/50 transition";
  const errCls = (k: keyof FormState) => (errors[k] ? "border-destructive" : "border-hairline");

  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            label="Make a Reservation"
            title="Ready to Book Your Stay?"
            subtitle="Fill out the form below and we'll get back to you as soon as possible via Facebook Messenger."
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="bg-navy text-white rounded-2xl p-8 md:p-10 h-full shadow-md">
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6">
                <span className="font-serif text-gold text-2xl">GUM</span>
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-tight">Clean. Comfortable. <span className="text-gold italic">Convenient.</span></p>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                A modern mountain escape in the heart of Baguio City — thoughtfully appointed for
                travelers who want more than just a place to sleep.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Baguio City, Benguet, Philippines</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Reach us on Facebook Messenger</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Available 7 days a week</span>
                </div>
              </div>
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold py-3.5 text-sm hover:brightness-110 transition"
              >
                <MessageCircle size={18} /> Message Us on Messenger
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-white rounded-2xl shadow-lg p-6 md:p-9 border border-hairline"
            >
              {success && (
                <div className="mb-6 rounded-xl bg-gold/15 border border-gold text-navy px-4 py-3 text-sm font-medium">
                  ✓ Your inquiry has been sent! We'll message you on Facebook Messenger shortly.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.name}>
                  <input aria-label="Full Name" className={`${inputBase} ${errCls("name")}`} placeholder="Your Full Name" value={data.name} onChange={(e) => set("name", e.target.value)} />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input type="email" aria-label="Email Address" className={`${inputBase} ${errCls("email")}`} placeholder="your@email.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input type="tel" aria-label="Phone Number" className={`${inputBase} ${errCls("phone")}`} placeholder="+63 9XX XXX XXXX" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                </Field>
                <Field label="Preferred Unit" error={errors.unit}>
                  <select aria-label="Preferred Unit" className={`${inputBase} ${errCls("unit")}`} value={data.unit} onChange={(e) => set("unit", e.target.value)}>
                    <option value="">Select a Unit</option>
                    {ROOMS.map((r) => (
                      <option key={r.name} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Check-in Date" error={errors.checkin}>
                  <input type="date" aria-label="Check-in Date" min={today} className={`${inputBase} ${errCls("checkin")}`} value={data.checkin} onChange={(e) => set("checkin", e.target.value)} />
                </Field>
                <Field label="Check-out Date" error={errors.checkout}>
                  <input type="date" aria-label="Check-out Date" min={data.checkin || today} className={`${inputBase} ${errCls("checkout")}`} value={data.checkout} onChange={(e) => set("checkout", e.target.value)} />
                </Field>
                <Field label="Number of Guests" error={errors.guests}>
                  <input type="number" aria-label="Number of Guests" min={1} max={6} className={`${inputBase} ${errCls("guests")}`} value={data.guests} onChange={(e) => set("guests", e.target.value)} />
                </Field>
                <Field label="Special Requests" className="md:col-span-2">
                  <textarea aria-label="Special Requests" rows={4} className={`${inputBase} ${errCls("message")}`} placeholder="Any special requests or questions?" value={data.message} onChange={(e) => set("message", e.target.value)} />
                </Field>
              </div>
              <button
                type="submit"
                aria-label="Send Inquiry"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white font-semibold py-4 text-sm hover:bg-gold hover:text-navy transition-all"
              >
                <Send size={16} /> Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-14">
          <div>
            <div className="font-serif text-gold text-2xl">G.U.M Transient House</div>
            <p className="mt-3 text-white/80 text-sm italic">"Your comfort is our priority."</p>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              A modern transient house in Baguio City offering fully furnished rooms, warm hospitality,
              and easy access to everything the City of Pines has to offer.
            </p>
          </div>
          <div>
            <div className="label-accent mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {[
                ["Rooms", "#rooms"],
                ["Amenities", "#amenities"],
                ["Pricing", "#pricing"],
                ["Book Now", "#booking"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-white/85 hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-accent mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Baguio City, Philippines</li>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold"><Facebook size={16} className="text-gold" /> Facebook Page</a></li>
              <li><a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold"><MessageCircle size={16} className="text-gold" /> Facebook Messenger</a></li>
              <li className="flex items-center gap-3"><Clock size={16} className="text-gold" /> Open 7 Days a Week</li>
            </ul>
          </div>
        </div>

        {/* map placeholder */}
        <div className="pb-10">
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center px-6"
            style={{ height: 280, background: "linear-gradient(135deg, #253c66, #1A2B4A 60%, #0f1a2f)" }}
          >
            <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-3">
              <MapPin size={24} className="text-navy" />
            </div>
            <p className="text-white/90 text-sm md:text-base max-w-md">
              Baguio City, Philippines — Exact address shared upon booking confirmation
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-6 py-2.5 text-sm hover:brightness-110 transition"
            >
              Get Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 text-center">
          <p className="text-white/80 text-sm">© 2025 G.U.M Transient House Baguio. All Rights Reserved.</p>
          <p className="text-white/50 text-xs mt-1">Built with ♥ for Baguio travelers</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- scroll to top ---------------- */

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 300);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gold text-navy shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center"
    >
      <ArrowUp size={20} />
    </button>
  );
}

/* ---------------- page ---------------- */

function LandingPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />
      <main>
        <Hero />
        <Rooms />
        <Gallery />
        <Amenities />
        <Pricing />
        <Booking />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
