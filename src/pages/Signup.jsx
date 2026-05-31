import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Signup() {
  return (
    <main className="w-full bg-[#09090b] text-white">
      <section className="mx-auto w-full max-w-none px-4 py-16 md:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Signup</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm leading-6 text-white/65">Join EthioShop to save favorites and shop electronics faster.</p>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white/75">Full name</Label>
              <Input id="name" placeholder="Your name" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white/75">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white/75">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
            </div>
            <Button className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
              Create account
            </Button>
          </form>

          <p className="mt-6 text-sm text-white/60">
            Already have an account? <Link to="/login" className="text-white underline underline-offset-4">Log in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
