import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import Promosection from "../components/Promosection";
import ProductCard from "../components/product/ProductCard";
import { Button } from "../components/ui/button";
import { products } from "../Data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const categories = Array.from(
    new Set(products.map((product) => product.category?.name).filter(Boolean))
  );

  return (
    <main className="w-full">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(9,9,11,0.35)_48%,_rgba(9,9,11,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.82),rgba(0,0,0,0.42))]" />
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/b2/a3/e2/b2a3e289ef8054a8e5edcc0d4e6cc33d.jpg')] bg-no-repeat bg-center bg-[length:68%] opacity-35 blur-[1px] scale-105" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="space-y-7">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Electronics store
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Premium electronics, sharper prices, and a darker storefront that feels modern.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                Discover headphones, speakers, accessories, and everyday tech in a clean, high-contrast store designed for fast browsing and confident buying.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white px-7 text-black hover:bg-zinc-200">
                <Link to="#featured">Shop electronics</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                <Link to="/products/568e41ab-5d2f-4318-bfac-8758e3555c94">Explore deal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Category</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{category}</h3>
              <p className="mt-1 text-sm text-white/65">Hand-picked products built for everyday use.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Featured products</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">Popular electronics customers keep coming back for</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65">
            A tighter storefront starts with a clear catalog. These are the strongest products in the collection, arranged for quick browsing and easy buying.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Promosection />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-6 rounded-[2rem] bg-white/5 px-6 py-8 text-white md:grid-cols-2 md:px-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/65">Why shop here</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">A more complete experience for browsing and buying.</h2>
          </div>
          <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            {[
              "Featured collections and product detail pages",
              "Mobile-friendly navigation and layout",
              "Clear pricing, stock status, and categories",
              "Stronger visual hierarchy across the site",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
