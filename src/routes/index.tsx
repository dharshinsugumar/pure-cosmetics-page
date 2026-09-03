import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImage from "../assets/hero-cosmetics.png";
import productPetalGlow from "../assets/product-petal-glow-cream.png";
import productMousseLip from "../assets/product-mousse-lip-balm.png";
import productPeachyBlush from "../assets/product-peachy-blush.png";
import productCloudHair from "../assets/product-cloud-hair-mist.png";
import productNudeCushion from "../assets/product-nude-cushion.png";
import productDewyEye from "../assets/product-dewy-eye-gel.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bloomling | Premium Soft Beauty" },
      { name: "description", content: "Shop luxury skincare, makeup, lip care and hair care in soft pastel formulas." },
      { property: "og:title", content: "Bloomling | Premium Soft Beauty" },
      { property: "og:description", content: "Shop luxury skincare, makeup, lip care and hair care in soft pastel formulas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  {
    name: "Skincare",
    bg: "bg-blush",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 0-5 5c0 2 1.5 3.5 3 5l-3 8h10l-3-8c1.5-1.5 3-3 3-5a5 5 0 0 0-5-5Z" />
      </svg>
    ),
  },
  {
    name: "Makeup",
    bg: "bg-lilac",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M12 4v16" />
        <path d="M15 8h2" />
      </svg>
    ),
  },
  {
    name: "Lip Care",
    bg: "bg-peach",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10c-1.5 1-2 3-1 4.5s3.5 2 5 2 3.5-.5 4-2c.5-1.5-.5-3.5-2-4.5" />
        <path d="M9 10c-1-1-1-2.5 0-3s2.5 0 3 1c.5-1 2-1.5 3-1s1 2 0 3" />
      </svg>
    ),
  },
  {
    name: "Hair Care",
    bg: "bg-mint",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a6 6 0 0 0-6 6c0 2 1 3.5 2 5l-2 9h12l-2-9c1-1.5 2-3 2-5a6 6 0 0 0-6-6Z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
];


const products = [
  { id: 1, name: "Petal Glow Cream", price: "$38", image: productPetalGlow, bg: "bg-blush" },
  { id: 2, name: "Mousse Lip Balm", price: "$18", image: productMousseLip, bg: "bg-lilac" },
  { id: 3, name: "Peachy Blush", price: "$26", image: productPeachyBlush, bg: "bg-peach" },
  { id: 4, name: "Cloud Hair Mist", price: "$32", image: productCloudHair, bg: "bg-mint" },
  { id: 5, name: "Nude Cushion", price: "$44", image: productNudeCushion, bg: "bg-blush" },
  { id: 6, name: "Dewy Eye Gel", price: "$29", image: productDewyEye, bg: "bg-lilac" },
];

const reviews = [
  {
    id: 1,
    text: "The Petal Glow Cream left my skin dewy and happy. It's become my morning ritual.",
    author: "Maya R. · Verified",
  },
  {
    id: 2,
    text: "Candy-soft packaging and the blush actually melts in. My new favorite.",
    author: "Priya K. · Verified",
  },
  {
    id: 3,
    text: "The Cloud Hair Mist smells like a spa day and never weighs my hair down.",
    author: "Sofia L. · Verified",
  },
];

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-cream font-body text-cocoa-dark antialiased">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-cocoa">
            bloomling
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-cocoa md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-cocoa-dark"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-cocoa transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 rounded-full bg-cocoa transition-all ${isMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-4"}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-cocoa/10 bg-cream px-5 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-4 text-base font-medium text-cocoa">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors hover:text-cocoa-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="px-5 pb-10 pt-28 md:pt-32 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-nude">
              Calm beauty, candy-soft
            </p>
            <h1 className="mx-auto max-w-[14ch] font-display text-4xl font-semibold leading-tight text-cocoa-dark text-balance lg:mx-0 lg:text-5xl xl:text-6xl">
              Glow that feels like a warm hug
            </h1>
            <p className="mx-auto mt-5 max-w-[42ch] text-base text-cocoa/80 text-pretty lg:mx-0 lg:text-lg">
              Featherlight formulas in blushy, mood-lifting shades — made to feel
              as good as they look.
            </p>
            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cocoa px-8 py-3.5 text-sm font-semibold text-cream ring-2 ring-cocoa/15 transition-transform hover:scale-[1.02]"
            >
              Shop Now
              <span className="text-lg leading-none">→</span>
            </a>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
            <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-lilac/70 petal-slow lg:-left-8 lg:h-28 lg:w-28" />
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-mint/70 petal lg:-bottom-8 lg:-right-8 lg:h-24 lg:w-24" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-blush ring-1 ring-cocoa/5">
              <img
                src={heroImage}
                alt="Bloomling soft pastel cosmetics collection with rose petal cream jar"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-5 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 font-display text-xl font-semibold text-cocoa-dark text-balance md:text-2xl">
            Shop by mood
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.bg} shrink-0 basis-28 snap-start rounded-3xl p-4 text-center ring-1 ring-cocoa/5 transition-transform hover:-translate-y-1 md:basis-auto`}
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-cream/70 text-2xl">
                  {category.icon}
                </div>
                <p className="font-display text-sm font-semibold text-cocoa-dark md:text-base">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-5 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center md:text-left">
            <h2 className="font-display text-2xl font-semibold text-cocoa-dark md:text-3xl">
              Loved by many
            </h2>
            <p className="mt-2 text-sm text-cocoa/70 md:text-base">
              Six little luxuries to start your ritual.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`${product.bg} group rounded-3xl p-3 ring-1 ring-cocoa/5 transition-transform hover:-translate-y-1 lg:p-4`}
              >
                <div className="aspect-square overflow-hidden rounded-2xl bg-cream/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 font-display text-sm font-semibold text-cocoa-dark lg:text-base">
                  {product.name}
                </p>
                <p className="mt-1 text-xs text-cocoa/60 lg:text-sm">{product.price}</p>
                <button className="mt-3 w-full rounded-full bg-cocoa py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-cocoa-dark lg:text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-10 lg:py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-blush p-8 text-center ring-1 ring-cocoa/5 lg:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-nude">
            Our story
          </p>
          <h2 className="font-display text-2xl font-semibold text-cocoa-dark text-balance md:text-3xl">
            Beauty that breathes
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-base text-cocoa/80 text-pretty lg:text-lg">
            Small-batch, plant-kissed formulas crafted in soft pastels. We keep
            it calm, kind and quietly joyful — no fuss, just glow.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-5 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-cocoa-dark md:text-3xl">
            Sweet words
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl bg-cream p-6 ring-1 ring-cocoa/5"
              >
                <p className="text-sm text-cocoa/80 text-pretty lg:text-base">
                  "{review.text}"
                </p>
                <p className="mt-4 font-display text-xs font-semibold text-cocoa lg:text-sm">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="contact" className="px-5 py-10 lg:py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-lilac p-6 text-center ring-1 ring-cocoa/5 lg:p-12">
          <h2 className="font-display text-xl font-semibold text-cocoa-dark md:text-2xl">
            Join the glow list
          </h2>
          <p className="mt-2 text-sm text-cocoa/70 md:text-base">
            Soft drops, gentle tips, zero spam.
          </p>

          {joined ? (
            <p className="mt-6 rounded-full bg-cream py-3 text-sm font-semibold text-cocoa">
              You're on the list — welcome to the glow!
            </p>
          ) : (
            <form
              onSubmit={handleJoin}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full bg-cream px-5 py-3.5 text-sm text-cocoa outline-none ring-1 ring-cocoa/5 placeholder:text-cocoa/40 focus:ring-2 focus:ring-cocoa/20"
              />
              <button
                type="submit"
                className="rounded-full bg-cocoa px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cocoa-dark"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pb-10 pt-8">
        <div className="mx-auto max-w-7xl border-t border-cocoa/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
            <div className="text-center md:text-left">
              <span className="font-display text-lg font-bold text-cocoa">
                bloomling
              </span>
              <p className="mt-2 text-xs text-cocoa/60">
                Soft beauty for gentle days.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cocoa/70 md:justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cocoa-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] text-cocoa/40">
            © 2025 bloomling · Frontend prototype
          </p>
        </div>
      </footer>
    </div>
  );
}
