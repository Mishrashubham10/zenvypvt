import { Truck, Clock, MapPin, Package } from 'lucide-react';

export default function Shipping() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Shipping Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our shipping policies and
              delivery options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                On orders over $50
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">2-5 business days</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Track Orders</h3>
              <p className="text-sm text-muted-foreground">
                Real-time tracking
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Package className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Safe Packaging</h3>
              <p className="text-sm text-muted-foreground">
                Secure & eco-friendly
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
              <div className="bg-card border rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-4">
                    <div>
                      <h3 className="font-medium">Standard Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        5-7 business days
                      </p>
                    </div>
                    <span className="font-semibold">$5.99</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-4">
                    <div>
                      <h3 className="font-medium">Express Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        2-3 business days
                      </p>
                    </div>
                    <span className="font-semibold">$12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Overnight Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        1 business day
                      </p>
                    </div>
                    <span className="font-semibold">$24.99</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Policies</h2>
              <div className="bg-card border rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Processing Time</h3>
                    <p className="text-muted-foreground">
                      Orders are processed within 1-2 business days. Orders
                      placed on weekends or holidays will be processed on the
                      next business day.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Shipping Zones</h3>
                    <p className="text-muted-foreground">
                      We currently ship to all 50 states in the US and offer
                      international shipping to select countries. International
                      orders may be subject to customs duties and taxes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Order Tracking</h3>
                    <p className="text-muted-foreground">
                      Once your order ships, you'll receive a tracking number
                      via email. You can track your package on our website or
                      the carrier's website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Delivery Issues</h3>
                    <p className="text-muted-foreground">
                      If your package is lost or damaged during shipping, please
                      contact our customer service team within 48 hours of the
                      expected delivery date.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}