import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export default function Contact() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-none px-4 py-16 md:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Contact</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Talk to us about your next electronics purchase.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Need help with products, orders, or support? Send a message and our team will get back to you.
            </p>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-white/65">123 Bole, Design District, Adama, ET 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-white/65">+251-91223-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-white/65">support@EthioShop.com</p>
                </div>
              </div>
              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="text-sm text-white/70">Follow us</p>
                <div className="mt-3 flex gap-3">
                  <a href="#" className="rounded-full bg-white/5 p-2 text-white/75 hover:text-white"><Twitter className="h-4 w-4" /></a>
                  <a href="#" className="rounded-full bg-white/5 p-2 text-white/75 hover:text-white"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="rounded-full bg-white/5 p-2 text-white/75 hover:text-white"><Linkedin className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white/75">Full name</Label>
                <Input id="name" placeholder="Your name" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white/75">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="border-white/10 bg-black/20 text-white placeholder:text-white/30" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-white/75">Message</Label>
                <Textarea id="message" placeholder="Tell us what you need help with..." className="min-h-40 border-white/10 bg-black/20 text-white placeholder:text-white/30" />
              </div>
              <Button className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
