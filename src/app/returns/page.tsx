import { RotateCcw, Shield, Clock, CheckCircle } from 'lucide-react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Returns & Exchanges
            </h1>
            <p className="text-lg text-muted-foreground">
              Easy returns and exchanges for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">
                Full refund or exchange
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                100% satisfaction promise
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quick Process</h3>
              <p className="text-sm text-muted-foreground">
                Fast return processing
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                Simple return process
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
              <div className="bg-card border rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Return Window</h3>
                    <p className="text-muted-foreground">
                      You have 30 days from the date of delivery to return items
                      for a full refund or exchange. Items must be in original
                      condition with tags attached.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Eligible Items</h3>
                    <p className="text-muted-foreground">
                      Most items are eligible for return, including clothing,
                      accessories, and home goods. Custom or personalized items
                      cannot be returned unless defective.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Return Shipping</h3>
                    <p className="text-muted-foreground">
                      We provide free return shipping labels for defective
                      items. For other returns, shipping costs are deducted from
                      your refund unless you have our premium membership.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
              <div className="bg-card border rounded-lg p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Request Return</h3>
                      <p className="text-muted-foreground">
                        Log into your account and select the items you want to
                        return from your order history.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Print Label</h3>
                      <p className="text-muted-foreground">
                        Download and print the prepaid return shipping label
                        we'll email you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Package Items</h3>
                      <p className="text-muted-foreground">
                        Pack items in original packaging when possible, attach
                        the return label, and drop off at any carrier location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Get Refund</h3>
                      <p className="text-muted-foreground">
                        Once we receive and process your return, your refund
                        will be issued to the original payment method within 5-7
                        business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Exchange Policy</h2>
              <div className="bg-card border rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Size & Color Exchanges</h3>
                    <p className="text-muted-foreground">
                      Need a different size or color? We offer free exchanges
                      within 30 days. Simply request an exchange when initiating
                      your return.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Defective Items</h3>
                    <p className="text-muted-foreground">
                      If you receive a defective item, we'll send a replacement
                      immediately at no charge. Contact customer service for
                      expedited processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Out of Stock Items</h3>
                    <p className="text-muted-foreground">
                      If your desired exchange item is out of stock, we'll issue
                      a full refund and notify you when the item is back in
                      stock.
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