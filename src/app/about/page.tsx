import { Users, Award, Globe, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ============= HERO SECTION =========== */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          About Zenvypvt
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re passionate about bringing you the best products at unbeatable
          prices. Since our founding, we&apos;ve been committed to exceptional
          quality and customer service.
        </p>
      </section>

      {/* =========== STORY SECTION ============ */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Zenvypvt was born from a simple idea: everyone deserves access to
              quality products without breaking the bank. What started as a
              small family business has grown into a trusted destination for
              thousands of customers worldwide.
            </p>
            <p className="text-muted-foreground">
              We carefully curate every product in our catalog, working directly
              with manufacturers and trusted suppliers to ensure you get the
              best value for your money. Our commitment to quality and customer
              satisfaction drives everything we do.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
            {/* <p className="text-muted-foreground">Our Story Image</p> */}
            <div className="relative w-full h-full">
              <Image
                src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg"
                alt="Hero Image"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== VALUES SECTION ============ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Quality First</h3>
            <p className="text-sm text-muted-foreground">
              Every product is carefully selected and tested to meet our high
              standards.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <p className="text-sm text-muted-foreground">
              Your satisfaction is our top priority. We&apos;re here to help every
              step of the way.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Serving customers worldwide with fast, reliable shipping and
              support.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">
              Building lasting relationships with our customers and partners.
            </p>
          </div>
        </div>
      </section>

      {/* =========== TEAM SECTION ========== */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-muted/30 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-sm text-primary mb-2">Founder & CEO</p>
            <p className="text-sm text-muted-foreground">
              Leading ShopHub with vision and passion for customer excellence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-muted/30 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Mike Chen</h3>
            <p className="text-sm text-primary mb-2">Head of Operations</p>
            <p className="text-sm text-muted-foreground">
              Ensuring smooth operations and timely delivery of your orders.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-muted/30 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Emily Rodriguez</h3>
            <p className="text-sm text-primary mb-2">Customer Success</p>
            <p className="text-sm text-muted-foreground">
              Dedicated to providing exceptional support and service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
