'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useParams } from 'next/navigation';
import BackLink from '@/components/BackLink';
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const productId = params?.productId as string;
  console.log('Actual productId is here!!!', productId);
  const { dispatch } = useCart();
  const { toast } = useToast();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      dispatch({ type: 'ADD_TO_CART', product });
      toast({
        title: 'Added to cart',
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <BackLink href="/products">Products</BackLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* ======== PRODUCT IMAGE ======== */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* =========== PRODUCT INFO ========== */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.rating} rating)
              </span>
              <Badge variant={product.inStock ? 'default' : 'secondary'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>

            <p className="text-3xl font-bold text-primary mb-6">
              {Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 2,
              }).format(product.price)}
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4 text-muted-foreground" />
                <span>30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============== PRODUCT FEATURES ============== */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold mb-6">Product Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Premium Quality</h4>
              <p className="text-muted-foreground text-sm">
                Made with the finest materials and attention to detail.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fast Delivery</h4>
              <p className="text-muted-foreground text-sm">
                Get your order delivered within 2-3 business days.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Secure Payment</h4>
              <p className="text-muted-foreground text-sm">
                Your payment information is always protected.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Customer Support</h4>
              <p className="text-muted-foreground text-sm">
                24/7 support for all your questions and concerns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ============= RELATED PRODUCTS =========== */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
