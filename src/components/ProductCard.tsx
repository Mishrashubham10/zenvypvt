'use client';

import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Product } from '@/contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card className="group hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 border-0 shadow-[var(--card-shadow)]">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg w-full h-64">
          <Image
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.rating})
            </span>
          </div>

          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              {Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 2,
              }).format(product.price)}
            </span>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={()=>router.push(`/products/${product.id}`)}
          disabled={!product.inStock}
          className="w-full"
          variant={product.inStock ? 'default' : 'secondary'}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}