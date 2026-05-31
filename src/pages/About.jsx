import { Button } from "../components/ui/button";

export default function About() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-none px-4 py-16 md:px-6 lg:px-10 lg:py-20">
        <div className="max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">About us</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Designed for people who want a cleaner, better way to shop electronics.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            EthioShop keeps the experience simple: strong products, clear details, and a layout that feels calm, modern, and easy to trust.
          </p>
          <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            We focus on making browsing feel effortless. Every page is built to help customers scan faster, understand products quickly, and move through the store without distraction.
          </p>
          <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            The result is a premium shopping experience with better readability, better structure, and a more polished first impression.
          </p>
          <Button className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
            Explore products
          </Button>
        </div>
      </section>
    </main>
  );
}
