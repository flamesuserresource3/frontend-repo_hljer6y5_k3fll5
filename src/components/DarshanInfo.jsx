import React from 'react';
import { Sparkles, HandHeart, Shield, Clock } from 'lucide-react';

const DarshanInfo = () => {
  return (
    <section id="darshan" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-amber-50/60 backdrop-blur p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-amber-100 border border-amber-300 grid place-items-center shrink-0">
              <Sparkles className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-amber-950">Plan your holy darshan</h2>
              <p className="mt-1 text-amber-900/80">
                We guide you through Special Entry (Seva) booking windows, recommended timings, and gentle reminders so you can focus on devotion.
              </p>

              <div className="mt-5 grid md:grid-cols-3 gap-4" id="why">
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-amber-900 font-semibold"><Clock className="h-4 w-4"/>Timing guidance</div>
                  <p className="mt-2 text-sm text-amber-900/80">Best days and slots for smoother queues and peaceful darshan.</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-amber-900 font-semibold"><Shield className="h-4 w-4"/>Trust & transparency</div>
                  <p className="mt-2 text-sm text-amber-900/80">Clear pricing with no hidden charges. Your journey, your pace.</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-amber-900 font-semibold"><HandHeart className="h-4 w-4"/>Assisted seva</div>
                  <p className="mt-2 text-sm text-amber-900/80">Personalized assistance for seniors and families when needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarshanInfo;
