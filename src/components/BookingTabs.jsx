import React, { useMemo, useState } from 'react';
import { Plane, Train, Car, Users, Calendar, MapPin } from 'lucide-react';

const tabConfig = [
  { key: 'flight', label: 'Flights', icon: Plane, color: 'from-amber-500/20 to-amber-300/20', accent: 'text-amber-700', button: 'bg-amber-600 hover:bg-amber-700' },
  { key: 'train', label: 'Trains', icon: Train, color: 'from-emerald-500/20 to-emerald-300/20', accent: 'text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700' },
  { key: 'taxi', label: 'Taxis', icon: Car, color: 'from-sky-500/20 to-sky-300/20', accent: 'text-sky-700', button: 'bg-sky-600 hover:bg-sky-700' },
];

const BookingTabs = () => {
  const [active, setActive] = useState('flight');
  const [form, setForm] = useState({
    from: '',
    to: 'Tirupati',
    date: '',
    passengers: 1,
    class: 'Economy',
  });

  const activeTab = useMemo(() => tabConfig.find(t => t.key === active) || tabConfig[0], [active]);

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    // In a later step, this will call the backend. For now we just show a friendly alert.
    alert(`${activeTab.label} search submitted\nFrom: ${form.from || '—'}\nTo: ${form.to}\nDate: ${form.date || '—'}\nPassengers: ${form.passengers}\nClass: ${form.class}`);
  };

  return (
    <section id="booking" className="relative py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex gap-2">
          {tabConfig.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                active === key
                  ? 'bg-white border-amber-300 text-amber-900 shadow-sm'
                  : 'bg-amber-50/40 border-amber-200 text-amber-800/80 hover:bg-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className={`rounded-2xl border bg-white p-6 shadow-sm relative overflow-hidden`}> 
          <div className={`absolute inset-0 bg-gradient-to-tr ${activeTab.color} pointer-events-none`} />
          <form onSubmit={submit} className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-amber-900 flex items-center gap-2"><MapPin className="h-4 w-4"/>From</span>
              <input
                type="text"
                value={form.from}
                onChange={(e) => update('from', e.target.value)}
                placeholder="Your city"
                className="mt-1 w-full rounded-lg border border-amber-300/70 bg-white px-3 py-2 text-amber-900 placeholder-amber-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-amber-900 flex items-center gap-2"><MapPin className="h-4 w-4"/>To</span>
              <input
                type="text"
                value={form.to}
                onChange={(e) => update('to', e.target.value)}
                placeholder="Tirupati"
                className="mt-1 w-full rounded-lg border border-amber-300/70 bg-white px-3 py-2 text-amber-900 placeholder-amber-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-amber-900 flex items-center gap-2"><Calendar className="h-4 w-4"/>Date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="mt-1 w-full rounded-lg border border-amber-300/70 bg-white px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-amber-900 flex items-center gap-2"><Users className="h-4 w-4"/>Passengers</span>
              <input
                type="number"
                min={1}
                value={form.passengers}
                onChange={(e) => update('passengers', Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-amber-300/70 bg-white px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <label className="block lg:col-span-1 md:col-span-2">
              <span className="text-sm font-medium text-amber-900">Class</span>
              <select
                value={form.class}
                onChange={(e) => update('class', e.target.value)}
                className="mt-1 w-full rounded-lg border border-amber-300/70 bg-white px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>Economy</option>
                <option>Business</option>
                <option>First</option>
                <option>Sleeper (Train)</option>
                <option>Non-AC (Taxi)</option>
                <option>AC (Taxi)</option>
              </select>
            </label>

            <div className="lg:col-span-5 flex justify-end">
              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium ${activeTab.button} transition`}
              >
                Search {activeTab.label}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingTabs;
