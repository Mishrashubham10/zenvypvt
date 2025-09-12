"use client";

import { CartProvider } from '@/contexts/CartContext';
import { ReactNode } from 'react';

export default function GlobalContext({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}