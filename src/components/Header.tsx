'use client';

import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import ZenvyLogo from '@/asserts/logo/zenvy-logo.webp';
import Image from 'next/image';
import { ThemeToggler } from './ThemeToggler';

export function Header() {
  const { state } = useCart();
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl text-primary">
            <Image
              src={ZenvyLogo.src ?? ZenvyLogo}
              alt="Zenvy Logo"
              className="h-12 w-auto"
              height={40}
              width={40}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Category
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex-1 max-w-sm mx-6 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/cart" className="relative">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
