import React from 'react';
import { Plane, Train, Car, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 via-amber-100 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 relative">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-amber-500/10 border border-amber-400/40 grid place-items-center">
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xl font-semibold text-amber-900 tracking-tight">Tirupati Seva Travel</p>
              <p className="text-xs text-amber-700/80 -mt-0.5">Flights • Trains • Taxis</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-amber-900/80">
            <a href="#booking" className="hover:text-amber-900 transition">Book</a>
            <a href="#darshan" className="hover:text-amber-900 transition">Darshan</a>
            <a href="#why" className="hover:text-amber-900 transition">Why us</a>
          </div>
        </nav>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-900">
              Spiritual journeys to Lord Venkateswara’s abode
            </h1>
            <p className="mt-4 text-amber-900/80 leading-relaxed">
              Book flights, trains, and taxis to Tirumala-Tirupati with a serene, devotional experience. 
              Plan your darshan with ease and focus on your prayers while we take care of the travel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-amber-800/80">
              <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-amber-300/60 px-3 py-1.5 rounded-full"><Plane className="h-4 w-4"/>Flights</span>
              <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-amber-300/60 px-3 py-1.5 rounded-full"><Train className="h-4 w-4"/>Trains</span>
              <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-amber-300/60 px-3 py-1.5 rounded-full"><Car className="h-4 w-4"/>Taxis</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-amber-200/10 to-transparent rounded-3xl" />
            <div className="relative border border-amber-300/50 rounded-3xl p-6 bg-amber-50/60 backdrop-blur">
              <div className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full bg-amber-100 border border-amber-300 grid place-items-center">
                  <Sparkles className="h-10 w-10 text-amber-600" />
                </div>
                <p className="mt-4 text-lg font-semibold text-amber-900">Govinda • Govinda</p>
                <p className="mt-1 text-sm text-amber-800/80">May your journey be blessed and your darshan fulfilled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
