import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6 lg:px-20 font-display">
      <Helmet>
        <title>Contact Us | Prism Detailing Mobile Car Care</title>
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Elite Car Care</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-8 text-slate-900 tracking-tighter">Get in <span className="text-primary italic">Touch</span></h1>
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Have a question about our packages or need a custom quote for your luxury vehicle? We're here to help you get the prism shine back.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Call or Text</p>
                  <p className="text-2xl font-black text-slate-900">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-2xl font-black text-slate-900">hello@prismdetailing.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-2xl font-black text-slate-900">Mobile Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-12 rounded-[3rem] border-2 border-slate-100 shadow-xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="Enter your name" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                <textarea rows="6" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none font-bold text-slate-900 placeholder:text-slate-300" placeholder="Details about your vehicle and preferred service..."></textarea>
              </div>
              <button className="w-full btn-prism py-6 text-xl flex items-center justify-center gap-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                Send Message <Send size={24} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-[3.5rem] h-[450px] shadow-3xl relative border-8 border-white bg-slate-100">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-slate-50 to-white">
            <div className="text-center">
               <div className="relative inline-block mb-8">
                 <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
                 <MapPin className="text-primary w-20 h-20 relative z-10 mx-auto animate-bounce" />
               </div>
               <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">Mobile Detailing Excellence</h3>
               <p className="text-primary font-black uppercase tracking-[0.3em] text-sm">We Bring the Shop to You</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
