import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Heart, Minus, Plus, Share, Truck, RotateCcw, Check } from 'lucide-react';
import { products } from '../../Data/products';

import { Button } from '../ui/button';
import Container from '../ui/Container';
import Layout from '../ui/layout';
import { Badge } from '../ui/badge';
import ProductCard from './ProductCard';

function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const product = products.find((currentProduct) => currentProduct.id === productId);
    const relatedProducts = useMemo(
      () => products.filter((currentProduct) => currentProduct.categoryId === product?.categoryId && currentProduct.id !== product?.id).slice(0, 4),
      [product]
    );

  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <Container className="py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </Container>
      </Layout>
    );
  }

 
  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  };

  // Get related products (same category)
//   const relatedProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

  return (
    <Layout>
      <Container className="py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <Badge className="mb-4 w-fit rounded-full bg-slate-950 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
              {product.category?.name}
            </Badge>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl mb-3">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex items-center gap-2 text-amber-500">
                {'★'.repeat(Math.max(1, Math.min(5, Math.round(product.avgRating || 4))))}
                <span className="text-slate-500 text-sm">({product.ratingCount || 128} reviews)</span>
              </div>

              {product.stock >= 5 ? (
                <Badge variant="secondary" className="flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700">
                  <Check className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" className="rounded-full">Out of Stock</Badge>
              )}
            </div>

            <div className="mb-5">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-slate-950">${product.price}</span>
                <span className="text-sm text-slate-500">Free shipping over $50</span>
              </div>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-700 mb-8">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-slate-950 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="h-11 w-11 rounded-l-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="h-11 w-14 border-y border-slate-300 flex items-center justify-center bg-white font-semibold text-slate-950">
                  {quantity}
                </div>
                <button
                  className="h-11 w-11 rounded-r-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-4 border-slate-300 hover:bg-red-50"
              >
                <Heart className="h-5 w-5 fill-red-500" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-4 border-slate-300"
                aria-label="Share product"
              >
                <Share className="h-5 w-5" />
              </Button>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Truck className="mr-2 mt-0.5 h-5 w-5 text-slate-500" />
                  <div>
                    <h4 className="font-medium text-slate-950">Free Shipping</h4>
                    <p className="text-sm text-slate-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw className="mr-2 mt-0.5 h-5 w-5 text-slate-500" />
                  <div>
                    <h4 className="font-medium text-slate-950">Easy Returns</h4>
                    <p className="text-sm text-slate-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-black text-slate-950 mb-6">You May Also Like</h2>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default ProductDetail