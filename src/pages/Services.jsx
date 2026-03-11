import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Sparkles, Shield, Droplets, Zap, ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Interior Refresh',
      price: '$120+',
      time: '3-4 Hrs',
      desc: 'Deep steam clean, sanitization, and conditioning of all leather and upholstery surfaces. We leave no corner untouched.',
      features: ['Deep Vacuum & Air Purge', 'Steam Treatment of Vents', 'Leather/Fabric Protection', 'Odor Neutralization'],
      icon: <Sparkles className="text-primary" size={24} />,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkGuMnXq3Tb3w0Fh_rANlFm9DpuJ-RDmwF4w_bS20euRZqR9WL9mh1811e--OhHe00tXSLPQoYFUnM8pvy4iED2CjqDdo5TNm8pDvBvjRxFBT8xjT8i7mMrCA5hU8al8h1agB9e8A-5bPGahfNwDOfAJOkBi9zvYlTJOCUAKchYSJcXZNIe-ocqNBx_PDSGGDrsh5V_kJS_Xft88kgvoO23SbNrbs1bftLUisM2ALlSu-Qvo92f15ffzChq13WM2kD_Xb45kgMjxR0'
    },
    {
      title: 'Exterior Glow',
      price: '$150+',
      time: '2-3 Hrs',
      desc: 'Meticulous hand wash using the two-bucket method, clay bar treatment, and hand-applied ceramic spray wax.',
      features: ['Foam Cannon Pre-Wash', 'Clay Bar Decontamination', 'Premium Ceramic Sealant', 'Wheel & Wheel Well Detail'],
      icon: <Droplets className="text-primary" size={24} />,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsDoCSsFtBKrF-D-fHtk83khhsQR6yAx6Rame16aKgi1xqAr0bQ_UUgklESrnT2w9lLkv4yX8D_ZhizB7CoTjA9BjPLKNsMrejmB6S35pz8CqetyzMX3-xYeThzyQWx5Een475nFVSxcs_GWShKpL3isuWPufj0eFl8ZEBXo_ZqLJeDXlyP7Rqfg6Y1iVedvDO9uuXQP7lgfaADH-lli2R4eZYXp48Aa-FDamZvz92ld_BLA408pQ-5xONVZrSYrA6qXSlmH1yuZzP'
    },
    {
      title: 'The Full Prism',
      price: '$280+',
      time: '5-7 Hrs',
      desc: 'Our signature service combining both Interior and Exterior packages. Includes engine bay cleaning and fine brush detailing.',
      features: ['Full Interior Rejuvenation', 'Multi-Stage Exterior Wash', 'Engine Bay Detail', 'Windshield Hydrophobic Coating'],
      icon: <Zap className="text-primary" size={24} />,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqWno23LwhwRelfxMjB9KwmAPrdbQT6RDZrNHRsVRNIROAVkBzeMOPE14DnD1Mz21pumr31injLTbz-i0OfY2n4c8_MDDmOVg8Yz9ZtJkejf1hy0PcXVbZ7KRjJ7XzxBLVqRVrwr5L42tKYsLzRoBs89QGrjn6YY_07hmdFmUx8EpKgaYBxkW00_He5Fkat7YoP1Ej9cMUdW4fH0UhpP0gEgNAGYt-uqiu0IEMNYGiTfAvKW03Q_p_3N1QRdgxmA0f3ZGrjE4UR7pq',
      featured: true
    },
    {
      title: 'Ceramic Coating',
      price: '$499+',
      time: '1-2 Days',
      desc: 'The ultimate protection. A nano-ceramic layer that chemically bonds to your paint, providing unmatched hydrophobic properties.',
      features: ['9H Hardness Protection', 'Extreme Hydrophobic Effect', 'UV & Chemical Resistance', 'Candy-Like High Gloss'],
      icon: <Shield className="text-primary" size={24} />,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpUHWxo7CeiT7sC1pC0Nq7SmRT8iD7RCNunyRiOpaAzJA624_yp64mPp-LOox7Zvo5BjZ9VZVKikUuQWHosWu7RWfRYhEZFSrj7x8aCEoWC8b5n712E4cs4SZS-5KR_xpchWwzzwwKOeYBv9EeYLdpxKprpAfe_L0LmlKxZUPYgy8-AVPJgk0Sbnmkug03hwaWzleHLSNKd4-KTc3EMWwCaw6JETCZEWf1ACofmN39D4lhGZBMbdefI36yPLj_i7xWr7ZUdcq8Vke7'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 antialiased font-display">
      <Helmet>
        <title>Professional Services | Prism Detailing</title>
        <meta name="description" content="Explore our range of premium mobile detailing services. From interior refreshes to elite ceramic coatings." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-20">
        {/* Services Hero */}
        <section className="mb-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Elite Car Care</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.1] text-slate-900 lg:text-7xl tracking-tighter">
              Precision Care <br/>for Your <span className="text-primary italic">Pride & Joy</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Professional automotive rejuvenation with a focus on vibrant finishes and meticulous protection. Choose the package that best fits your vehicle's needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <section 
              key={idx} 
              className={`group flex flex-col md:flex-row items-stretch rounded-[2.5rem] overflow-hidden border ${service.featured ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-slate-200 bg-slate-50/50'} transition-all hover:border-primary/50`}
            >
              <div className="w-full md:w-1/3 h-72 md:h-auto overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-slate-500 text-xs font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Clock size={14} /> {service.time}</span>
                        <span className="text-primary">•</span>
                        <span>Professional Grade</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{service.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Package Price</span>
                    <span className="text-4xl font-black text-slate-900">{service.price}</span>
                  </div>
                  <Link 
                    to="/book" 
                    className={`rounded-2xl px-10 py-5 text-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 w-full sm:w-auto justify-center ${service.featured ? 'bg-primary text-white shadow-xl shadow-primary/30' : 'bg-white text-primary border-2 border-primary/20 hover:border-primary'}`}
                  >
                    Reserve Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Feature Spotlight - Nano Technology */}
        <section className="mt-32 rounded-[3rem] bg-slate-900 border border-primary/10 p-12 lg:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Zap size={400} className="text-primary" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
                Technology Spotlight
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">Nano-Ceramic <br/><span className="text-primary italic">Shield Architecture</span></h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                We don't just wash cars; we engineer surface resilience. Our ceramic coatings create a permanent molecular bond that protects against environmental hazards while providing a mirror-like depth that traditional wax simply cannot achieve.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Heat & UV Resistance</h4>
                    <p className="text-slate-400 font-medium">Prevents paint oxidation and fading from harsh UV exposure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Self-Cleaning Properties</h4>
                    <p className="text-slate-400 font-medium">Extreme hydrophobics repel water, dirt, and grime, keeping your car cleaner for longer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCU-Ad_H5XaOUYT7rcnAKOnWB2mfimetsuQSIrVk02lmA1xtNVoNyVUnO-u0iO53qZdvIIAPOe_Evj5UD8qvIzOyQhuPH3onezXsErTjh_1rYEGlM39ObhIWgMV9cwF89hdQ769O45ET2KOkOoVMJCuYALBwCZWdRgYbKdWdwWWcTtztLEjdaJP8iMV-W_OpdxikdHpaUZECrvxpyKRuSeukAURio99gnRvdMpn9amPF4QcLZfJF9G8D5r8EMpM-1ShBQJ7vBT8g" 
                  alt="Ceramic coating close up" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block border-4 border-slate-900">
                <Star size={48} className="text-white" fill="white" />
                <p className="text-white font-black text-3xl mt-4 leading-tight">5 Year<br/>Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Ready for the prism sparkle?</h2>
            <p className="text-xl text-slate-500 font-bold">Slots fill up fast. Secure your session today and let us transform your vehicle at your location.</p>
            <Link 
              to="/book" 
              className="inline-block rounded-3xl bg-primary px-16 py-8 text-xl font-black text-white shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              BOOK YOUR DETAIL NOW
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
