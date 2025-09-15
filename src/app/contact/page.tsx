'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  // HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: 'Message sent successfully!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  //   HANDLE CHANE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ============ HERO SECTION =========== */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;d love to hear from you. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ============= CONTACT FORM =========== */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form
            className="space-y-4"
            action="https://formsubmit.co/zenvyecommerce43@gmail.com"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* =========== CONTACT INFORMATION ============= */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  Office no 104, Hari Om Plaza
                  <br />
                  Near Western Express Highway,
                  <br />
                  Borivali East, 400066
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone Number</h3>
                <p className="text-muted-foreground">
                  +91 7039650896
                  <br />
                  Monday - Friday, 10:30AM - 6PM EST
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email Address</h3>
                <p className="text-muted-foreground">
                  zenvyecommerce43@gmail.com
                  <br />
                  We typically respond within 2 hours
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 10:30 AM - 6:00 PM EST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM EST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* ========== FAQ SECTION =========== */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">
                  How long does shipping take?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Standard shipping typically takes 3-5 business days within the
                  US.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">
                  What&apos;s your return policy?
                </h4>
                <p className="text-sm text-muted-foreground">
                  We offer 30-day returns for unused items in original
                  condition.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">
                  Do you offer international shipping?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we ship to most countries. International delivery takes
                  7-14 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
