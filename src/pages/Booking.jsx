import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Clock, MapPin, Calendar, User, Phone, Mail, Car, ChevronRight, ShieldCheck, Star, Sparkles, Droplets, Zap, Shield } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, title: 'Interior Refresh', price: '$120+', icon: <Sparkles size={24} />, desc: 'Deep steam clean & sanitization.' },
    { id: 2, title: 'Exterior Glow', price: '$150+', icon: <Droplets size={24} />, desc: 'Hand wash & ceramic spray wax.' },
    { id: 3, title: 'The Full Prism', price: '$280+', icon: <Zap size={24} />, desc: 'Complete rejuvenation package.', featured: true },
    { id: 4, title: 'Ceramic Coating', price: '$499+', icon: <Shield size={24} />, desc: 'Elite long-term protection.' }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-display">
      <Helmet>
        <title>Book Your Detail | Prism Detailing</title>
      </Helmet>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Booking Form */}
          <div className="flex-1 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Elite Car Care</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Schedule Your <span className="text-primary italic">Transformation</span></h1>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mb-12">Complete the form below to book your professional mobile detailing session. We'll bring the sparkle to your driveway.</p>
            </section>

            {/* Stepper Progress */}
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4 flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-100 text-slate-400 border border-slate-200'}`}>
                    {step > s ? <CheckCircle size={18} /> : s}
                  </div>
                  {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? 'bg-primary' : 'bg-slate-200'}`}></div>}
                </div>
              ))}
            </div>

            {/* Step 1: Services */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  Select Your Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`group relative text-left p-8 rounded-[2rem] border-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${selectedService?.id === service.id ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-slate-200 bg-white hover:border-primary/40 shadow-sm hover:shadow-lg'}`}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl ${selectedService?.id === service.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                          {service.icon}
                        </div>
                        {service.featured && <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-500 mb-6 font-medium">{service.desc}</p>
                      <div className="flex justify-between items-center text-primary font-black text-xl">
                        {service.price}
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-slate-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Scheduling */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                  <button onClick={() => setStep(1)} className="text-slate-400 hover:text-primary transition-colors text-2xl leading-none">←</button>
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  Appointment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 shadow-sm">
                    <label className="block space-y-3">
                      <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Calendar size={14}/> Preferred Date</span>
                      <input type="date" className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all text-slate-900 font-bold" />
                    </label>
                    <label className="block space-y-3">
                      <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Clock size={14}/> Preferred Time</span>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all text-slate-900 font-bold">
                        <option>Morning (8AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Early Evening (4PM - 7PM)</option>
                      </select>
                    </label>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 shadow-sm space-y-6">
                    <label className="block space-y-3">
                      <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Car size={14}/> Vehicle Type</span>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all text-slate-900 font-bold">
                        <option>Sedan / Coupe</option>
                        <option>SUV / Crossover</option>
                        <option>Large Truck / Van</option>
                        <option>Exotic / Luxury</option>
                      </select>
                    </label>
                    <button onClick={() => setStep(3)} className="w-full bg-primary text-white font-black py-5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">
                      Continue →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                  <button onClick={() => setStep(2)} className="text-slate-400 hover:text-primary transition-colors text-2xl leading-none">←</button>
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  Contact Information
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 rounded-[2.5rem] bg-slate-50 border-2 border-slate-100 shadow-sm">
                  <div className="space-y-3">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><User size={12}/> Your Name</span>
                    <input type="text" placeholder="John Smith" className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none text-slate-900 font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Phone size={12}/> Phone</span>
                    <input type="tel" placeholder="(555) 123-4567" className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none text-slate-900 font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Mail size={12}/> Email</span>
                    <input type="email" placeholder="your@email.com" className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none text-slate-900 font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><MapPin size={12}/> Service Address</span>
                    <input type="text" placeholder="Street Address, Zip Code" className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 focus:border-primary outline-none text-slate-900 font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <button className="md:col-span-2 bg-primary text-white font-black py-6 rounded-2xl text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 mt-4 uppercase tracking-widest">
                    Confirm Booking Request
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[380px]">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-xl">
                <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4 uppercase tracking-widest">Estimate Summary</h3>
                <div className="space-y-6">
                  {selectedService ? (
                    <div className="flex items-center gap-6">
                      <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        {selectedService.icon}
                      </div>
                      <div>
                        <p className="font-black text-lg text-slate-900">{selectedService.title}</p>
                        <p className="text-sm text-slate-500 font-medium">Professional Detail Package</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-400 italic font-medium">No package selected yet</p>
                  )}

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">Booking Status</span>
                      <span className={`font-black ${selectedService ? 'text-primary' : 'text-slate-400'}`}>{selectedService ? 'In Progress' : 'Awaiting Selection'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">Service Area</span>
                      <span className="text-slate-900 font-black">Los Angeles, CA</span>
                    </div>
                    <div className="flex justify-between pt-6 border-t border-slate-100">
                      <span className="text-lg font-black text-slate-900">Estimated</span>
                      <span className="text-3xl font-black text-primary">{selectedService?.price || '—'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 flex items-center justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-900 font-black mt-1">Certified Pro</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Licensed & Insured</p>
                </div>
                <ShieldCheck size={48} className="text-primary/30" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Booking;
