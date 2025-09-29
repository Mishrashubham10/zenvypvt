'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import BackLink from '@/components/BackLink';
import Image from 'next/image';
import { IndianRupee } from 'lucide-react';

// FOR EMAIL AND WHATSAPP
import emailjs from '@emailjs/browser';
import CheckoutPopup from '@/components/CheckoutPopup';
import { useState } from 'react';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  // UPDATE QUANTITY
  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  // REMOVE ITEM FROM CONTEXT
  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    toast({
      title: 'Item removed',
      description: 'Item has been removed from your cart.',
    });
  };

  // CLER CART
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your cart.',
    });
  };

  // SEND ORDER EMAIL
  const sendOrderEmail = () => {
    emailjs
      .send(
        'service_cxgjg3j',
        'template_zwmoijn',
        {
          items: state.items.map((i) => `${i.quantity} x ${i.name}`).join(', '),
          total: state.total,
        },
        'eyr5k3eHevA14Ajnw'
      )
      .then(() => {
        alert('Order details sent to your email!');
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
      });
  };

  const sendWhatsApp = () => {
    const phoneNumber = '91XXXXXXXXXX'; // your WhatsApp
    const message = encodeURIComponent(
      `📦 New Order:\n${state.items
        .map((i) => `${i.quantity} x ${i.name}`)
        .join('\n')}\n💰 Total: $${state.total}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCheckout = () => {
    setOpen(true);
    const formattedItems = state.items
      .map(
        (item) =>
          `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`
      )
      .join('\n');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // SERVICE ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // TEMPLATE ID
        {
          user_name: 'Shubham Mishra', // you can collect this from a form
          user_email: 'shubham@example.com', // or let user enter it
          cart_items: formattedItems,
          cart_total: state.total.toString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID // PUBLIC KEY
      )
      .then((res) => {
        console.log('✅ Email sent!', res.status, res.text);
      })
      .catch((err) => {
        console.error('Email error:', err);
      });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven&apos;t added any products to your cart yet.
          </p>
          <BackLink
            href="/products"
            // className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            Start Shopping
          </BackLink>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <BackLink
          href="/products"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          Continue Shopping
        </BackLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <Button variant="outline" size="sm" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          <div className="space-y-4">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="object-cover rounded-md"
                        fill
                      />
                    </div>

                    <div className="flex-1">
                      <Link
                        href={`/product/${item.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        <h3 className="font-semibold">{item.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.category}
                      </p>
                      <p className="font-bold mt-2">
                        {Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          maximumFractionDigits: 2,
                        }).format(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-3 py-2 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ========== ORDER SUMMARY ============= */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="flex gap-1 items-center">
                      <IndianRupee className="w-4 h-4" />
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="flex gap-1 items-center">
                    <IndianRupee className="w-4 h-4" />
                    {state.total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="flex gap-1 items-center">
                    <IndianRupee className="w-4 h-4" />
                    {(state.total * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="flex gap-1 items-center">
                  <IndianRupee className="w-4 h-4" />
                  {(state.total * 1.08).toFixed(2)}
                </span>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              <CheckoutPopup
                open={open}
                setOpen={setOpen}
                title="Order Successful 🎉"
                description="Thank you for shopping with us. Your order has been placed and
              will be delivered soon!"
              />

              <p className="text-xs text-muted-foreground text-center">
                Secure checkout with SSL encryption
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}