import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const image = product.images?.[0];
  const stock = product.stock ?? 0;
  const isLowInStock = stock <= 5;

  return (
    <Card className="group overflow-hidden border-white/10 bg-white/5 p-0 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur">
      <CardHeader className="p-0">
        <Link to={`/products/${product.id}`} className="block overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
            />
          </AspectRatio>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-lg text-white">{product.name}</CardTitle>
            <CardDescription className="mt-2 text-sm text-white/60">
              {product.category?.name}
            </CardDescription>
          </div>
          {isLowInStock ? (
            <Badge variant="destructive">Low stock</Badge>
          ) : (
            <Badge variant="outline">In stock</Badge>
          )}
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-white/65">{product.description}</p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Price</p>
            <p className="text-2xl font-black text-white">${product.price}</p>
          </div>
          <Button asChild className="rounded-full bg-white px-4 text-black hover:bg-zinc-200">
            <Link to={`/products/${product.id}`}>
              <ShoppingBag className="h-4 w-4" />
              View item
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
