import { Users, Award, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import DirectorImage from "@/asserts/logo/image.png";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ============= HERO SECTION =========== */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          About Zenvypvt
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re dedicated to offering premium products at affordable prices.
          Since day one, we&apos;ve aimed to deliver unmatched quality and
          outstanding customer support.
        </p>
      </section>

      {/* =========== DIRECTOR SECTION ============ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Director</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-120 rounded-lg overflow-hidden">
            {/* ======= DIRECTOR IMG ======= */}
            <Image
              src={DirectorImage}
              alt="Director Image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Mr. Abhishek Pandey</h3>
            <h2 className='text-xl font-bold mb-4'>Zenvy E-commerce Private Limited</h2>
            <p className="text-muted-foreground mb-3">
              Abhishek Pandey, the driving force behind Zenvypvt, brings years
              of leadership and business expertise.
            </p>
            <p className="text-muted-foreground mb-3">
              Under his guidance, the company has grown from a small startup
              into a trusted global brand.
            </p>
            <p className="text-muted-foreground mb-3">
              His unwavering vision ensures that every customer receives
              exceptional value and quality.
            </p>
            <p className="text-muted-foreground mb-3">
              He believes in innovation, integrity, and long-term customer
              relationships.
            </p>
            <p className="text-muted-foreground">
              His leadership continues to inspire the entire team toward
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* =========== STORY SECTION ============ */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Zenvypvt began with a mission to make high-quality products
              accessible to everyone. What started as a small family-run venture
              has now grown into a trusted shopping destination for thousands
              worldwide.
            </p>
            <p className="text-muted-foreground">
              We work directly with manufacturers and reliable suppliers,
              ensuring every product delivers exceptional value. Quality and
              customer satisfaction remain at the heart of everything we do.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg"
                alt="Our Story Image"
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
              Our products are carefully chosen and tested to meet the highest
              standards.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <p className="text-sm text-muted-foreground">
              Your satisfaction matters most. We support you at every step.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Serving customers worldwide with smooth delivery and reliable
              support.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">
              We value meaningful relationships with our customers and partners.
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
            <h3 className="font-semibold mb-1">Abhishek Pandey</h3>
            <p className="text-sm text-primary mb-2">Founder & CEO</p>
            <p className="text-sm text-muted-foreground">
              Leading Zenvypvt with strong vision and passion for excellence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-muted/30 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Naresh Rao</h3>
            <p className="text-sm text-primary mb-2">Head of Operations</p>
            <p className="text-sm text-muted-foreground">
              Ensuring seamless operations and timely product delivery.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-muted/30 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Pramod Pandey</h3>
            <p className="text-sm text-primary mb-2">Customer Success</p>
            <p className="text-sm text-muted-foreground">
              Delivering excellent support and building customer trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}