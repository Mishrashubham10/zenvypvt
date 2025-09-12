'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Grid, Package } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories with product counts
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category]++;
    return acc;
  }, {} as Record<string, number>);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore our curated collection organized by category
        </p>
      </div>

      {!selectedCategory ? (
        <>
          {/* ============= CATEGORIES GRID ============= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.entries(categories).map(([category, count]) => (
              <Card
                key={category}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/20"
                onClick={() => setSelectedCategory(category)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {count} {count === 1 ? 'product' : 'products'}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Browse {category}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ============= CATEGORY STAT ============= */}
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Grid className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Collection Overview</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {Object.keys(categories).length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {products.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {products.filter((p) => p.inStock).length}
                </div>
                <div className="text-sm text-muted-foreground">In Stock</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {(
                    products.reduce((sum, p) => sum + p.rating, 0) /
                    products.length
                  ).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* ============= CATEGORY HEADER ============= */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">{selectedCategory}</h2>
              <p className="text-muted-foreground mt-2">
                {filteredProducts.length} products in this category
              </p>
            </div>
            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
              ← Back to Categories
            </Button>
          </div>

          {/* ============= PRODUCTS GRID ============= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}