import React from 'react';
import Header from './components/Header.jsx';
import BookingTabs from './components/BookingTabs.jsx';
import DarshanInfo from './components/DarshanInfo.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.06),transparent_60%)]">
      <Header />
      <BookingTabs />
      <DarshanInfo />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-amber-950">Why pilgrims choose us</h3>
            <ul className="mt-3 grid md:grid-cols-3 gap-4 text-amber-900/85">
              <li className="p-4 rounded-xl border bg-amber-50">Peaceful, spiritual interface designed for Tirupati journeys</li>
              <li className="p-4 rounded-xl border bg-amber-50">All modes covered: flights, trains, and local taxis</li>
              <li className="p-4 rounded-xl border bg-amber-50">Gentle reminders and guidance for seva and darshan</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
