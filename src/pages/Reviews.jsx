import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Marcus Richardson',
      car: 'Tesla Model Y Owner',
      text: "Prism Detailing completely changed my car. I have two dogs and thought my interior was a lost cause, but it looks and smells brand new! Best mobile service I've ever used.",
      rating: 5
    },
    {
      name: 'Sarah Jennings',
      car: 'Range Rover Owner',
      text: "The 'Full Prism' package is worth every penny. My car has never been this shiny, even when I first bought it. Super professional and convenient.",
      rating: 5
    },
    {
      name: 'David Chen',
      car: 'Porsche 911 Owner',
      text: "Very meticulous work. They took their time with the paint correction and the ceramic coating looks incredible. Highly recommend for luxury vehicles.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-display py-20 px-6 lg:px-20">
      <Helmet>
        <title>Customer Reviews | Prism Detailing</title>
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Elite Car Care</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter">
            What Our <span className="text-primary italic">Happy Drivers</span> Say
          </h1>
          <div className="mt-6 h-1 w-20 rounded-full bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, idx) => (
            <div key={idx} className="group relative bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] flex flex-col transition-all hover:border-primary/30 hover:bg-white overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-primary" />
              </div>
              
              <div className="flex gap-1 text-primary mb-8">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-lg text-slate-600 font-bold leading-relaxed mb-10 flex-grow italic relative z-10">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10 pt-8 border-t border-slate-200">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">{rev.name}</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{rev.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 relative rounded-[3rem] bg-slate-900 border border-primary/10 p-12 lg:p-24 overflow-hidden text-center shadow-3xl">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Star size={300} className="text-white" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-10">
             <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">Trusted by hundreds <br/>of local enthusiasts.</h2>
             <p className="text-lg text-slate-300 font-medium">
               We maintain a 5-star rating across all platforms because we treat every car like it's our own.
             </p>
             
             <button className="bg-white text-slate-900 px-12 py-6 rounded-3xl font-black uppercase tracking-widest flex items-center gap-4 mx-auto shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm">
               <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
               View 150+ Reviews on Google
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
