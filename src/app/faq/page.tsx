"use client"

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    category: 'Orders & Payment',
    questions: [
      {
        question: 'How do I place an order?',
        answer:
          "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase.",
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay.',
      },
      {
        question: 'Can I modify or cancel my order?',
        answer:
          'Orders can be modified or cancelled within 2 hours of placing them. After this time, the order enters processing and cannot be changed.',
      },
      {
        question: 'Do you offer payment plans?',
        answer:
          'Yes, we offer installment payment options through Klarna and Afterpay for qualifying orders over $100.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        question: 'How long does shipping take?',
        answer:
          'Standard shipping takes 5-7 business days, express shipping takes 2-3 days, and overnight shipping takes 1 business day.',
      },
      {
        question: 'Do you ship internationally?',
        answer:
          'Yes, we ship to select international destinations. International shipping times vary by location and may take 7-21 business days.',
      },
      {
        question: 'How can I track my order?',
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly on the carrier's website.",
      },
      {
        question: 'What if my package is lost or damaged?',
        answer:
          "If your package is lost or arrives damaged, please contact our customer service team within 48 hours. We'll investigate and provide a replacement or full refund.",
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer:
          'We offer 30-day returns for most items in original condition. Items must have original tags and packaging.',
      },
      {
        question: 'How do I return an item?',
        answer:
          'Log into your account, select the items to return from your order history, print the prepaid return label, and drop off the package at any carrier location.',
      },
      {
        question: 'When will I receive my refund?',
        answer:
          'Refunds are processed within 5-7 business days after we receive your returned items. The refund will appear on your original payment method.',
      },
      {
        question: 'Can I exchange for a different size or color?',
        answer:
          'Yes, we offer free exchanges within 30 days. Simply request an exchange when initiating your return process.',
      },
    ],
  },
  {
    category: 'Account & Support',
    questions: [
      {
        question: 'How do I create an account?',
        answer:
          "Click 'Sign Up' at the top of any page, enter your email and create a password. You can also sign up during checkout.",
      },
      {
        question: 'I forgot my password. How do I reset it?',
        answer:
          "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link.",
      },
      {
        question: 'How do I contact customer service?',
        answer:
          'You can reach us via email at support@shophub.com, phone at 1-800-SHOP-HUB, or through our live chat feature available 24/7.',
      },
      {
        question: 'Do you have a loyalty program?',
        answer:
          'Yes! Our ShopHub Rewards program offers points for every purchase, exclusive discounts, and early access to sales. Sign up is free!',
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about shopping with ShopHub
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-card border rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const key = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={itemIndex}
                        className="border-b last:border-b-0 pb-4 last:pb-0"
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex justify-between items-center w-full text-left py-2 hover:text-primary transition-colors"
                        >
                          <h3 className="font-medium text-foreground">
                            {item.question}
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="mt-3 pb-2">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Our customer service team is
              here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:zenvypvt@gmail.com"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a
                href="#"
                className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
