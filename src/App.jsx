import React, { useEffect, useMemo, useState } from 'react';
import {
  AccessTime,
  AutoAwesome,
  BusinessCenter,
  Call,
  Close,
  Diamond,
  Email,
  ExpandMore,
  Favorite,
  FilterAlt,
  HealthAndSafety,
  Instagram,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocationOn,
  Public,
  School,
  ShoppingBag,
  Sort,
  Spa,
  Star,
  WhatsApp,
} from '@mui/icons-material';
import heroImage from '../image.png';

const navLinks = ['Home', 'About', 'Consultation', 'Shop', 'Testimonials', 'Contact'];

const heroSlides = [
  {
    headline: 'Accurate Astrology Guidance',
    subtext: 'Personalized horoscope solutions for life, career and relationships',
    button: 'Book Consultation',
  },
  {
    headline: 'Trusted Vedic Astrology Solutions',
    subtext: 'Expert consultation for marriage, business and health',
    button: 'Talk to Acharya Ji',
  },
  {
    headline: 'Authentic Rudraksha & Gemstones',
    subtext: 'Certified spiritual products for protection, clarity and prosperity',
    button: 'Visit Shop',
  },
];

const services = [
  {
    title: 'Kundli Analysis',
    text: 'Detailed birth chart reading with practical remedies for important life decisions.',
    icon: <AutoAwesome />,
  },
  {
    title: 'Match Making',
    text: 'Compatibility analysis for marriage with guna milan, dosha review and guidance.',
    icon: <Favorite />,
  },
  {
    title: 'Career Guidance',
    text: 'Planetary insights for job changes, education choices and professional growth.',
    icon: <School />,
  },
  {
    title: 'Business Astrology',
    text: 'Auspicious timing, partnership clarity and business direction based on Vedic charts.',
    icon: <BusinessCenter />,
  },
  {
    title: 'Gemstone Recommendation',
    text: 'Personalized gemstone suggestions based on planetary strength and suitability.',
    icon: <Diamond />,
  },
  {
    title: 'Vastu Consultation',
    text: 'Balanced home and workplace recommendations for peace, success and prosperity.',
    icon: <Spa />,
  },
];

const rudrakshaProducts = [
  ['One Mukhi Rudraksha', 1, 21000, 'Rare bead for spiritual focus, clarity and devotion.', '/assets/images/rudraksha/one-mukhi.jpg'],
  ['Two Mukhi Rudraksha', 2, 8500, 'Traditional bead for harmony, relationships and emotional balance.', '/assets/images/rudraksha/two-mukhi.jpg'],
  // ['Three Mukhi Rudraksha', 3, 4200, 'Energized bead for confidence, courage and release of past blocks.'],
  //['Four Mukhi Rudraksha', 4, 3600, 'Recommended for learning, communication and creative expression.'],
  // ['Five Mukhi Rudraksha', 5, 1499, 'Popular bead for focus, calmness and spiritual grounding.'],
  //['Six Mukhi Rudraksha', 6, 2800, 'Used for discipline, concentration and steady personal growth.'],
  //['Seven Mukhi Rudraksha', 7, 3900, 'Associated with prosperity, stability and financial clarity.'],
  // ['Eight Mukhi Rudraksha', 8, 5200, 'Chosen for obstacle removal, protection and determined action.'],
  //['Nine Mukhi Rudraksha', 9, 6800, 'Powerful bead for strength, devotion and inner resilience.'],
  // ['Ten Mukhi Rudraksha', 10, 7600, 'Protective bead for peace, confidence and balanced energy.'],
  ['Eleven Mukhi Rudraksha', 11, 9200, 'Sacred bead for spiritual discipline, courage and blessings.'],
].map(([name, mukhi, price, description, customImage]) => ({
  name,
  mukhi,
  category: 'Rudraksha',
  price,
  image: customImage || '/assets/images/rudraksha/rudraksha-bead.jpg',
  description,
}));

const products = [
  ...rudrakshaProducts,
  {
    name: 'Certified Blue Sapphire',
    category: 'Gemstones',
    price: 15999,
    image: '/assets/images/prod1.jpg',
    description: 'Premium gemstone selected for discipline, protection and progress.',
  },
  {
    name: 'Amethyst Silver Ring',
    category: 'Gemstones',
    price: 7499,
    image: '/assets/images/prod2.jpg',
    description: 'Elegant gemstone ring for calmness, intuition and spiritual poise.',
  },
  {
    name: 'Shri Yantra Ring',
    category: 'Yantras',
    price: 2499,
    image: '/assets/images/prod3.jpg',
    description: 'Sacred yantra design for prosperity, harmony and positive energy.',
  },
  {
    name: 'Natural Yellow Sapphire',
    category: 'Gemstones',
    price: 11999,
    image: '/assets/images/p1.jpg',
    description: 'Astrological gemstone for wisdom, confidence and abundance.',
  },
  {
    name: 'Navgraha Yantra',
    category: 'Yantras',
    price: 3299,
    image: '/assets/images/p2.jpg',
    description: 'Traditional yantra for planetary balance and daily worship.',
  },
];

const testimonials = [
  {
    name: 'Ritika Sharma',
    image: '/assets/images/c1.jpg',
    review: 'Acharya Ji explained my career phase with clarity and gave remedies that were simple to follow.',
  },
  {
    name: 'Arjun Mehta',
    image: '/assets/images/c2.jpg',
    review: 'The match making consultation helped both families understand compatibility in a calm, practical way.',
  },
  {
    name: 'Neha Kapoor',
    image: '/assets/images/c3.jpg',
    review: 'The gemstone guidance was transparent, professional and backed by a detailed kundli review.',
  },
];

const consultationTypes = [
  'Kundli Analysis',
  'Match Making',
  'Career Guidance',
  'Business Astrology',
  'Gemstone Recommendation',
  'Vastu Consultation',
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'low', label: 'Price: Low to High' },
  { value: 'high', label: 'Price: High to Low' },
];

function scrollToSection(label) {
  const id = label.toLowerCase();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}
    </div>
  );
}

function Header({ onBook }) {
  const [open, setOpen] = useState(false);

  const handleNav = (link) => {
    setOpen(false);
    scrollToSection(link);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('Home')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-amber-300/60 bg-amber-300/10 text-amber-200 sm:h-11 sm:w-11">
            <AutoAwesome fontSize="small" />
          </span>
          <span>
            <span className="block text-base font-bold text-white sm:text-lg">Acharya Ji</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-amber-200 sm:text-xs sm:tracking-[0.2em]">Vedic Astrology</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNav(link)}
              className="text-sm font-medium text-slate-200 transition hover:text-amber-200"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onBook}
          className="hidden rounded-full bg-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-200 lg:inline-flex"
        >
          Book Now
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`hamburger-button ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/96 px-4 py-4 shadow-2xl shadow-slate-950/60 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => handleNav(link)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:bg-white/8"
              >
                <span>{link}</span>
                <KeyboardArrowRight className="text-amber-200" fontSize="small" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="mt-3 rounded-full bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onBook }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  const move = (direction) => {
    setActive((index) => (index + direction + heroSlides.length) % heroSlides.length);
  };

  const handleCta = () => {
    if (active === 2) {
      scrollToSection('Shop');
      return;
    }
    onBook();
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.18),transparent_26rem),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.18),transparent_24rem),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-7 px-4 py-6 sm:min-h-[calc(100svh-5rem)] sm:px-5 md:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:px-8 lg:py-16">
        <div className="z-10 order-2 max-w-2xl animate-fade-up text-center lg:order-1 lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-3 py-2 text-xs font-semibold text-amber-100 backdrop-blur sm:px-4 sm:text-sm">
            <Star fontSize="small" /> Premium Vedic Consultation
          </p>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">{slide.headline}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg md:mt-6 md:text-xl md:leading-8 lg:mx-0 lg:max-w-2xl">{slide.subtext}</p>
          <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-2 lg:mx-0 lg:hidden">
            {[
              ['22+', 'Years'],
              ['18k+', 'Clients'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] px-2 py-3">
                <p className="text-lg font-black text-amber-200">{value}</p>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-300">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-9 md:gap-4 lg:justify-start">
            <button
              type="button"
              onClick={handleCta}
              className="rounded-full bg-amber-300 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-200 sm:px-7 sm:py-4"
            >
              {slide.button}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('About')}
              className="rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:border-amber-200 hover:text-amber-100 sm:px-7 sm:py-4"
            >
              Explore Services
            </button>
          </div>
        </div>

        <div className="relative z-10 order-1 mx-auto w-full max-w-[34rem] lg:order-2 lg:max-w-none">
          <div className="absolute -inset-3 rounded-[1.5rem] bg-amber-300/15 blur-2xl sm:-inset-5 sm:rounded-[2rem] sm:blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10 p-1.5 shadow-2xl shadow-slate-950/60 sm:rounded-[1.6rem] sm:p-2">
            <img
              src={heroImage}
              alt="Culture Astrology premium banner reference"
              className="hero-banner-image aspect-[10/9] w-full rounded-[1rem] object-cover sm:aspect-[4/3] sm:rounded-[1.15rem] lg:aspect-[4/3]"
            />
            <div className="absolute inset-1.5 rounded-[1rem] bg-gradient-to-t from-slate-950/92 via-slate-950/18 to-transparent sm:inset-2 sm:rounded-[1.15rem]" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/62 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-100 backdrop-blur sm:left-6 sm:top-6 sm:text-xs">
              <AutoAwesome fontSize="inherit" /> Live Guidance
            </div>
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <div className="rounded-2xl border border-white/15 bg-slate-950/68 p-4 backdrop-blur-md sm:p-5 lg:bg-slate-950/58">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-200 sm:text-sm sm:tracking-[0.2em]">Luxury Spiritual Platform</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white sm:text-base">
                  Private horoscope, relationship and career guidance from Acharya Ji.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-3 col-span-full flex items-center justify-center gap-6 pt-1 sm:justify-between">
          <div className="flex gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.headline}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all sm:h-2.5 ${active === index ? 'w-8 bg-amber-300 sm:w-10' : 'w-2 bg-white/40 sm:w-2.5'}`}
                aria-label={`Show banner ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-amber-200 sm:h-11 sm:w-11"
              aria-label="Previous banner"
            >
              <KeyboardArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-amber-200 sm:h-11 sm:w-11"
              aria-label="Next banner"
            >
              <KeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ onBook }) {
  return (
    <section id="about" className="section-band relative overflow-hidden px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-on-scroll relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3">
            <img src="/assets/images/about.jpg" alt="Acharya Ji consultation portrait placeholder" className="h-[520px] w-full rounded-[1.25rem] object-cover" />
          </div>
        </div>
        <div className="animate-on-scroll">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">About Acharya Ji</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Guidance rooted in Vedic wisdom and practical remedies.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Acharya Dev Sharma brings more than 22 years of astrology practice, combining classical Jyotish principles with clear, compassionate consultation. His work focuses on helping people make confident choices in marriage, career, finance, health and spiritual growth.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:gap-4">
            {[
              ['22+', 'Years Experience'],
              ['18k+', 'Consultations'],
              ['6', 'Specializations'],
            ].map(([value, label]) => (
              <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 min-[420px]:block min-[420px]:px-2 min-[420px]:text-center sm:rounded-2xl sm:p-5 sm:text-left">
                <p className="shrink-0 text-2xl font-black leading-none text-amber-200 min-[420px]:text-xl sm:text-3xl">{value}</p>
                <p className="ml-4 text-right text-xs font-semibold uppercase leading-4 tracking-[0.08em] text-slate-300 min-[420px]:ml-0 min-[420px]:mt-1 min-[420px]:text-center min-[420px]:text-[0.65rem] sm:text-left sm:text-sm sm:font-normal sm:normal-case sm:leading-normal sm:tracking-normal">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 text-slate-200 sm:grid-cols-2">
            {['Kundli and dasha analysis', 'Marriage and relationship guidance', 'Gemstone and rudraksha remedies', 'Muhurat, vastu and business astrology'].map((item) => (
              <p key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={onBook} className="rounded-full bg-amber-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-200">
              Book Appointment
            </button>
            <button type="button" onClick={() => scrollToSection('Services')} className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-amber-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Consultation({ onBook }) {
  return (
    <section id="consultation" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-r from-amber-300 to-orange-500 p-1 shadow-2xl shadow-amber-950/30">
        <div className="grid gap-8 rounded-[1.8rem] bg-slate-950/95 px-7 py-10 md:grid-cols-[1fr_auto] md:items-center lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Private Consultation</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">Need clarity before an important decision?</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Share your birth details and concern. Acharya Ji will review your chart and suggest a suitable consultation path.
            </p>
          </div>
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-amber-300 px-8 py-4 text-sm font-black uppercase tracking-wide text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-200"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, onBook, compact = false }) {
  return (
    <article className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-7 transition hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/[0.08] ${compact ? 'min-h-[23rem]' : ''}`}>
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-amber-300/15 text-amber-200 transition group-hover:bg-amber-300 group-hover:text-slate-950">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-slate-300">{service.text}</p>
      <button type="button" onClick={onBook} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-200 hover:text-amber-100">
        Consult Now <KeyboardArrowRight fontSize="small" />
      </button>
    </article>
  );
}

function SortDropdown({ value, onChange, fullWidth = false }) {
  const [open, setOpen] = useState(false);
  const selected = sortOptions.find((option) => option.value === value) ?? sortOptions[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex h-12 items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900 px-4 text-left transition hover:border-amber-300/50 ${fullWidth ? 'w-full' : 'w-72'}`}
        aria-expanded={open}
      >
        <span className="flex shrink-0 items-center gap-2 text-sm font-bold text-amber-200">
          <Sort fontSize="small" /> Sort
        </span>
        <span className="flex min-w-0 flex-1 items-center justify-end gap-1.5 text-right text-xs font-semibold text-white sm:gap-2 sm:text-sm">
          <span className="min-w-0 truncate">{selected.label}</span>
          <ExpandMore className={`shrink-0 transition ${open ? 'rotate-180' : ''}`} fontSize="small" />
        </span>
      </button>

      {open && (
        <div className={`absolute right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-1.5 shadow-2xl shadow-slate-950/50 ${fullWidth ? 'w-full' : 'w-72'}`}>
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${value === option.value ? 'bg-amber-300 text-slate-950' : 'text-slate-200 hover:bg-white/[0.06]'}`}
            >
              {option.label}
              {value === option.value && <span className="h-2 w-2 rounded-full bg-slate-950" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Services({ onBook }) {
  const [active, setActive] = useState(0);

  const move = (direction) => {
    setActive((index) => (index + direction + services.length) % services.length);
  };

  return (
    <section id="services" className="section-band px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Consultation Services"
        title="Precise readings for every major life question"
        text="Choose a focused consultation or combine services for complete chart-based guidance."
      />

      <div className="mx-auto max-w-sm md:hidden">
        <ServiceCard service={services[active]} onBook={onBook} compact />
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
            aria-label="Previous service"
          >
            <KeyboardArrowLeft />
          </button>
          <div className="flex gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-amber-300' : 'w-2.5 bg-white/30'}`}
                aria-label={`Show ${service.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
            aria-label="Next service"
          >
            <KeyboardArrowRight />
          </button>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}

function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const categories = ['All', 'Rudraksha', 'Gemstones', 'Yantras'];

  const visibleProducts = useMemo(() => {
    const filtered = category === 'All' ? products : products.filter((product) => product.category === category);
    return [...filtered].sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return products.findIndex((item) => item.name === a.name) - products.findIndex((item) => item.name === b.name);
    });
  }, [category, sort]);

  return (
    <section id="shop" className="px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Spiritual Shop"
        title="Certified remedies and sacred products"
        text="Browse energized rudraksha, gemstones and yantras selected for authentic spiritual use."
      />

      <div className="mx-auto mb-8 max-w-7xl">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3 md:hidden">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">Shop</p>
            <p className="mt-1 text-sm font-semibold text-slate-200">
              {category} · {visibleProducts.length} items
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2.5 text-sm font-bold text-slate-950"
          >
            <FilterAlt fontSize="small" /> Filter
          </button>
        </div>

        <div className="hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 md:flex md:flex-col md:gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              <FilterAlt fontSize="small" /> Filter Products
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? 'bg-amber-300 text-slate-950' : 'bg-slate-900 text-slate-200 hover:bg-slate-800'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters"
          />
          <aside className="absolute bottom-0 right-0 top-0 flex w-[86vw] max-w-sm flex-col border-l border-white/10 bg-slate-950 shadow-2xl shadow-slate-950">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">Shop Filters</p>
                <h3 className="mt-1 text-xl font-bold text-white">Filter & Sort</h3>
              </div>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white"
                aria-label="Close filters"
              >
                <Close />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <p className="mb-3 text-sm font-bold text-slate-200">Categories</p>
              <div className="grid gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${category === item ? 'bg-amber-300 text-slate-950' : 'bg-white/[0.055] text-slate-200'}`}
                  >
                    {item}
                    {category === item && <span className="h-2 w-2 rounded-full bg-slate-950" />}
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <SortDropdown
                  value={sort}
                  onChange={setSort}
                  fullWidth
                />
              </div>
            </div>

            <div className="border-t border-white/10 p-5">
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="h-12 w-full rounded-full bg-amber-300 text-sm font-black uppercase tracking-wide text-slate-950"
              >
                Show {visibleProducts.length} Products
              </button>
            </div>
          </aside>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article key={product.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055]">
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">{product.category}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
              <p className="mt-2 text-2xl font-black text-amber-200">Rs. {product.price.toLocaleString('en-IN')}</p>
              <p className="mt-3 min-h-14 leading-7 text-slate-300">{product.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button type="button" className="rounded-full border border-amber-300/40 px-4 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300/10">
                  Add to Cart
                </button>
                <button type="button" className="rounded-full bg-amber-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-200">
                  Buy Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="section-band px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by families, founders and professionals"
        text="Clients value clear explanations, practical remedies and respectful private guidance."
      />
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center md:p-10">
        <img src={testimonial.image} alt={testimonial.name} className="mx-auto h-20 w-20 rounded-full border-4 border-amber-300/30 object-cover" />
        <div className="mt-5 flex justify-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} fontSize="small" />
          ))}
        </div>
        <p className="mt-6 text-xl leading-9 text-slate-100">"{testimonial.review}"</p>
        <h3 className="mt-6 text-lg font-bold text-white">{testimonial.name}</h3>
        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${active === index ? 'w-9 bg-amber-300' : 'w-2.5 bg-white/30'}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Connect with Acharya Ji"
        text="Send your query or reach the consultation desk directly for appointment availability."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-7">
          {[
            [<LocationOn />, 'Address', 'Astro Shakti Kendra, Civil Lines, New Delhi'],
            [<Call />, 'Phone', '+91 98765 43210'],
            [<WhatsApp />, 'WhatsApp', '+91 98765 43210'],
            [<Email />, 'Email', 'consult@acharyaji.com'],
          ].map(([icon, label, value]) => (
            <div key={label} className="mb-6 flex gap-4 last:mb-0">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-300/15 text-amber-200">{icon}</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">{label}</p>
                <p className="mt-1 text-slate-100">{value}</p>
              </div>
            </div>
          ))}
          <div className="mt-8 grid h-56 place-items-center rounded-2xl border border-dashed border-amber-300/30 bg-slate-900/70 text-center text-slate-300">
            <div>
              <Public className="mb-3 text-amber-200" />
              <p className="font-semibold text-white">Google Maps Placeholder</p>
              <p className="mt-1 text-sm">Map embed can be connected here.</p>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-white/[0.055] p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="field" placeholder="Full Name" />
            <input className="field" placeholder="Phone" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Subject" />
          </div>
          <textarea className="field mt-4 min-h-36 w-full resize-none" placeholder="Message" />
          <button type="submit" className="mt-5 rounded-full bg-amber-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-200">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function BookingModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.target;
    const formData = new FormData(form);

    // The user's Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwHbvr29MalZNSm7P1OaDW2cMUz01KPWMV_GbqvKdwa0GuGlaIXqGmWNs_tGAJu3uTk/exec';

    try {
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error!', error.message);
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Booking Form</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Book Consultation</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white" aria-label="Close booking form">
            <Close />
          </button>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-8 text-center">
            <AutoAwesome className="text-emerald-200" />
            <h3 className="mt-4 text-2xl font-bold text-white">Consultation request received</h3>
            <p className="mt-3 text-slate-300">Thank you. The consultation desk will contact you shortly to confirm your appointment.</p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-amber-300 px-7 py-3 text-sm font-bold text-slate-950">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input required name="fullName" className="field" placeholder="Full Name" />
              <input required name="phone" className="field" placeholder="Phone" />
              <input required name="email" type="email" className="field" placeholder="Email" />
              <input required name="dob" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }} className="field" placeholder="Date of Birth" aria-label="Date of Birth" />
              <input required name="tob" type="time" className="field" aria-label="Time of Birth" />
              <input required name="pob" className="field" placeholder="Place of Birth" />
              <select required name="consultationType" className="field">
                <option value="">Consultation Type</option>
                {consultationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input required name="bookingSlot" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }} className="field" placeholder="Booking Slot" aria-label="Booking Slot" />
            </div>
            <textarea name="message" className="field mt-4 min-h-28 w-full resize-none" placeholder="Message" />
            <button type="submit" disabled={submitting} className="mt-5 w-full rounded-full bg-amber-300 px-7 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-amber-200 disabled:opacity-70">
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-amber-300/60 bg-amber-300/10 text-amber-200">
              <AutoAwesome fontSize="small" />
            </span>
            <div>
              <p className="text-lg font-bold text-white">Acharya Ji</p>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Vedic Astrology</p>
            </div>
          </div>
          <p className="mt-4 max-w-md leading-7 text-slate-300">Premium astrology consultations and certified spiritual products for clarity, balance and growth.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <button key={link} type="button" onClick={() => scrollToSection(link)} className="text-left text-slate-300 hover:text-amber-200">
                {link}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Social</h3>
          <div className="mt-4 flex gap-3">
            {[<WhatsApp />, <Instagram />, <Email />].map((icon, index) => (
              <button key={index} type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:border-amber-300 hover:text-amber-200">
                {icon}
              </button>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-400">Privacy Policy</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright 2026 Acharya Ji Astrology. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Header onBook={() => setBookingOpen(true)} />
      <main>
        <Hero onBook={() => setBookingOpen(true)} />
        <About onBook={() => setBookingOpen(true)} />
        <Consultation onBook={() => setBookingOpen(true)} />
        <Services onBook={() => setBookingOpen(true)} />
        <Shop />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

export default App;
