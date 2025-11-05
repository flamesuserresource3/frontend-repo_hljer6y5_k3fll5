import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-amber-900">
            <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-400/40 grid place-items-center">
              <Sparkles className="h-4 w-4 text-amber-600" />
            </div>
            <span className="font-semibold">Tirupati Seva Travel</span>
          </div>
          <p className="text-sm text-amber-800/80 text-center md:text-right">
            May Lord Venkateswara bless your journey. Govinda • Govinda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
