import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowRight, Shield, Award, Verified } from 'lucide-react';
import heroGif from '../assets/prisim detailing hero.gif';

const Home = () => {
  const packages = [
    {
      title: 'Interior Refresh',
      price: '$120+',
      desc: 'Deep steam clean, sanitization, and conditioning of all leather and upholstery surfaces.',
      features: ['Deep Vacuum', 'Steam Treatment', 'Odor Neutralizer'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjCz7dgJ3zPkrnJbrSFJCTJ-6OxPTeTQeV52On3fAINjsDlxJ1OsuyhOvqpdl07wN_EZTaGdaoMndXG1Hoa0LcsiE7ZSIRkXxe0maVq44wWTGxdlAkLUwus7jTHDG2m1RldW6jWIGumADZiqMMvbm6FkaFulQQBk38u6HXDsK3MJ14hQalHsMF7GZ_-iEYBbMudGgJQsu_ATM4OqpH6GaOkpacYb9SGrmLKyFsF_rTnDvVgNKlszR0FXWQC1KN-FuXFJGNPG9Dqkmp'
    },
    {
      title: 'Exterior Glow',
      price: '$150+',
      desc: 'High-gloss foam wash, clay bar treatment, and hand-applied ceramic spray wax.',
      features: ['Foam Cannon Wash', 'Iron Decontamination', 'Ceramic Wax Shield'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk0p71mYu4Cm7AOLls4T4jWqRu16QupCi7Ti5julpL4b4IgJxJQQyK2UBmPxM3ULOXfFnStf_-nhZ7tHXMuygKIrazzhVlKJ46UyZV90V2DUp6JjmngfGninh-miz-NZXSxb6RRqEHUCrGP9wU75_YYgUh6c4K3LxkqNYFbMbINjuU55K2BTrCcFdBAKBrL3GInTdamjbc_ru4h5KUpVBeumd8vr5iDgL5pwyiIpB0m7M4hX4AcoSm5ss_vJAUvDZv2Px9YXkZTCuU',
      popular: true
    },
    {
      title: 'The Full Prism',
      price: '$280+',
      desc: 'The ultimate top-to-bottom transformation for owners who demand nothing but the best.',
      features: ['Interior & Exterior', 'Engine Bay Detail', 'Paint Correction'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASMn1cM5KuJejY2dPFdpO3dUH6pX-7RvZvNWy4M4BfkeFeOzhl79if9h796X4vNk5Yl_qiNrW97-cXZMqlDiOG7FrFpqBW1DrTWZ3MzrsqPKc83PKsUHu2mTJ7xToeY8mblpDOprJ_w1mzFryt86FuagLLjuHPdakZfqoAAjxi2CFJg-O3rs2xb4l3f4BrIWvFQfMAZR3kksAAtGfgPOqQD0B8hty8cmNVmnkUIPI0eVbiyLNtQaZnEfbVujx0MlWBVqg57HPy1Aja'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 antialiased font-display">
      <Helmet>
        <title>Prism Detailing | Mobile Car Detailing Excellence</title>
        <meta name="description" content="Perfection from Every Angle – Sparkling Mobile Detailing. Vibrant, professional mobile car detailing brought straight to your door." />
      </Helmet>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-12 lg:px-20 lg:py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl border border-primary/10">
              <div className="absolute inset-0 opacity-80">
                <img 
                  className="h-full w-full object-cover object-center" 
                  alt="Prism Detailing Hero" 
                  src={heroGif}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex min-h-[600px] flex-col justify-center p-8 lg:p-20 max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 w-fit backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Elite Car Care</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight text-white lg:text-7xl tracking-tight">
                  Perfection from <br/>Every Angle – <span className="text-primary italic">Sparkling</span> Results
                </h1>
                <p className="mt-6 text-lg text-slate-200 lg:text-xl leading-relaxed max-w-xl font-medium">
                  Vibrant, professional mobile car detailing brought straight to your door. Experience the Prism shine with our signature ceramic finish.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/book" className="rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all text-center">
                    Book Your Session
                  </Link>
                  <Link to="/services" className="rounded-2xl bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-center">
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="px-6 lg:px-20 mb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex items-center gap-5 rounded-3xl bg-slate-50 p-8 border border-slate-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">1,250+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Vehicles Perfected</p>
                </div>
              </div>
              <div className="flex items-center gap-5 rounded-3xl bg-slate-50 p-8 border border-slate-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Star size={32} fill="currentColor" />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">4.9/5</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Google Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-5 rounded-3xl bg-slate-50 p-8 border border-slate-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Verified size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">100%</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-24 lg:px-20 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-center text-center">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-4">Elite Packages</span>
              <h2 className="text-4xl font-extrabold lg:text-5xl text-slate-900">Our Signature Transformations</h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`group flex flex-col overflow-hidden rounded-[2rem] bg-white border ${pkg.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-slate-200'} transition-all hover:border-primary/50`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={pkg.title} src={pkg.img}/>
                    {pkg.popular && (
                      <div className="absolute top-6 right-6 rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase text-white tracking-widest shadow-xl">Most Popular</div>
                    )}
                    <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 backdrop-blur-md px-4 py-2 border border-slate-200">
                      <span className="text-xl font-black text-slate-900">{pkg.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{pkg.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{pkg.desc}</p>
                    <ul className="mb-10 space-y-4">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <CheckCircle size={18} className="text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/book" className={`mt-auto rounded-2xl py-5 text-sm font-black uppercase tracking-widest transition-all text-center border-2 ${pkg.popular ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-transparent text-primary border-primary/20 hover:border-primary'}`}>
                      Book This Session
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Teaser */}
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-white">
          <div className="absolute -top-40 -left-40 h-96 w-96 bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-xs font-black uppercase tracking-widest text-primary mb-4 block text-center lg:text-left">Visual Excellence</span>
                <h2 className="text-4xl font-extrabold lg:text-5xl text-slate-900 text-center lg:text-left">Witness the Transformation</h2>
                <p className="mt-4 text-lg text-slate-500 text-center lg:text-left font-medium">Actual results from our recent clients. No filters, just hard work and the best products on the market.</p>
              </div>
              <Link className="group flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest text-primary border-2 border-primary/20 rounded-full px-10 py-5 hover:border-primary transition-all shadow-sm" to="/gallery">
                View All Projects <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Wheel Revive', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN9qRCgEjM_aq_UhpjzLY0boAG_T31zoFAa6_g3yvHvYipro6RnLHCvlGlY5S7pPUqpbrq0FZoRb0ULKGYQ3vfAJFH5beU3lHlhS65gIKizNViwr9Ew3mcTfysWc-N5hZc67X1YyoT0xRFO4Qc0IlHkLR8Kxm2uPC7ZmXt7sqTSJGpC4JK9AfuGCU82j8xgKsZ_Fc5dTCGu1zWLBLn_zBUhjbFMicKzzji-wkMJkz_KOtvf1Gqygl1aUC9bay4OBU8WbwV7LasX9i2' },
                { title: 'Cockpit Clean', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQFfGU-Kp68RIBew7tiSsXKqtwu4Dee0LU79nX2EBH5-YWHCKvh3WEv35mi6XT7fy-ZUGyRRjKdsKcv3vnl3sAsgt2yEUMOfuTfhVfPTtLLIDgEhRL4BXKOgTlxuz1prMao632AKZB9xnC2KiIZOax8xJzgoYTw0oxNXsAGPnELgjPId_85VJRfGQBU8smoPdAFjbSslbrC6p4_NpcYDPrOGmflG9DUxFOxwjAQ0rOy17Brns-yOMpNaVLPzxKGvPdqn7c3t0lX0MY' },
                { title: 'Paint Correction', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH7_nH-IdktC8ba29LQDSxCGPeqDw7zXxLxCYCl9lXGbPnS2mbFQSgChkfonYppzIXeYvi4hv8kUmSCldPUsvxEEBOLg5cArWDOYJt4KS4Ae3_tozk-NShyfptpMjFUZB6DAjNK1gurInh1SPH78vFCZEZuXrBFEFGXgkzIW7gFMnTS-8tB7GmXIHl48PewMi7Vx1BgBxmfi2Df6tF8TFvOmT92lk5bjlb4w_XDjDB8tHbQjReeG4m2owXcuevPRy_9H3abikv3XFy' },
                { title: 'Signature Finish', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiUjpa6Ht1jIrjoX1kn-bSQVxaZXpk1tWmupHHeTedM82A9ZEdxmBhknrxwi6waIAAKqzSujxnSET9NlhvjwwGksAF8nVim6Z2KrB4RtNFADPhWFzJuf_IztxRL7SFw-wcM1hTGgqnrpQ_pfwk3uwm6xmhTTGnzMaK4hT38M5KZSNC-oxsjBj6MqcpawyyTTKaF34nX4Ti9bB0pfFao4d09i5tc7VVc3GTLcMY0tSEDr1QexHsoDpehef1nudyuurxVmksA5GDF-Iq' }
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 border border-slate-200">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} src={item.img}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-white font-black text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-20 text-center lg:py-28 shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                <h2 className="text-5xl font-black text-white lg:text-6xl tracking-tighter">Ready for that Showroom Glow?</h2>
                <p className="mt-8 text-xl text-white/90 leading-relaxed font-bold">Book your appointment today and let us bring the prism sparkle to your driveway. Mobile service designed for excellence.</p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                  <Link to="/book" className="rounded-2xl bg-white px-12 py-5 text-lg font-black text-primary shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                    Book Now
                  </Link>
                  <Link to="/contact" className="rounded-2xl bg-slate-900 px-12 py-5 text-lg font-black text-white hover:bg-black transition-all text-center uppercase tracking-widest">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
