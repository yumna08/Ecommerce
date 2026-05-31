import React from 'react'
import { Button } from './ui/button'

function Promosection() {
  return (
    <section className="py-16 text-white">
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className="grid grid-cols-1 gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur md:grid-cols-2 md:items-center md:p-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sound, style, and savings in one dark collection.
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              Explore featured headphones, speakers, and accessories chosen for a clean visual and a premium listening setup.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full border-white/20 bg-white text-black font-medium transition-colors duration-200 hover:bg-zinc-200 hover:text-black"
            >
              Shop the Sale
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black/40 p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">Fast Delivery</h3>
              <p className="text-white/70">On all electronics over $50</p>
            </div>
            <div className="rounded-2xl bg-black/40 p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">30-Day Returns</h3>
              <p className="text-white/70">Hassle-free return policy</p>
            </div>
            <div className="rounded-2xl bg-black/40 p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">New Drops</h3>
              <p className="text-white/70">Fresh tech weekly</p>
            </div>
            <div className="rounded-2xl bg-black/40 p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">Member Discount</h3>
              <p className="text-white/70">15% off for members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promosection