'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

const socials = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/61581161894392' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/szenvy' },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/zenvy-e-commerce-2a5145387',
  },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ShopZenvy53946' },
  { name: 'Pinterest', icon: Globe, url: 'https://pinterest.com/zenvyecommerce' },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t px-4">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">Zenvypvt</h3>
            <p className="text-muted-foreground text-sm">
              Your one-stop destination for quality products at great prices.
              We&apos;re committed to providing exceptional shopping
              experiences.
            </p>
            {/* =========== SOCIAL ICONS ============== */}
            <div className="flex space-x-4">
              {socials.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2 rounded-full bg-gray-600 hover:bg-gray-600 transition"
                >
                  <Icon className="size-5 text-white hover:text-yellow-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/shipping"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Returns & Exchanges
              </Link>
              <Link
                href="/faq"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-2 py-2 text-sm border md:rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm md:rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Zenvypvt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}