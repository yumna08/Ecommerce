import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  return (
    <main className="w-full bg-[#09090b] text-white">
      <section className="mx-auto w-full max-w-none px-4 py-16 md:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Login</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm leading-6 text-white/65">Sign in to continue shopping and manage your orders.</p>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white/75">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white/75">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
            </div>
            <Button className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
              Log in
            </Button>
          </form>

          <p className="mt-6 text-sm text-white/60">
            Don’t have an account? <Link to="/signup" className="text-white underline underline-offset-4">Sign up</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
