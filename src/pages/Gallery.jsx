import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Camera, Filter, CheckCircle } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Midnight Pearl Correction',
      category: 'Exteriors',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdpagREG47rLYOIQHV506FdCEdcBWxIR7SZsfjzqo9UfDFD3OvSv64YfYc3HEriVrsbmAangb3yFGdeTlGzko8ix28et7rVGXp-zslJXMzkaE3CWsWpcKYiOjnJjvNZri-wb3tnJ4sYcYI95mwiwqYvlpi6ohHAtRJ3_cywxUjPhMAICynGSniHkmGs1i54XfmIfpi1bylRAe9yXBw8gVmFTSS8fzlZl3fVAbeo6s9aOCaDzbv5l0boki7HDRWZ0yxpAZb5-igfbcw',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdpagREG47rLYOIQHV506FdCEdcBWxIR7SZsfjzqo9UfDFD3OvSv64YfYc3HEriVrsbmAangb3yFGdeTlGzko8ix28et7rVGXp-zslJXMzkaE3CWsWpcKYiOjnJjvNZri-wb3tnJ4sYcYI95mwiwqYvlpi6ohHAtRJ3_cywxUjPhMAICynGSniHkmGs1i54XfmIfpi1bylRAe9yXBw8gVmFTSS8fzlZl3fVAbeo6s9aOCaDzbv5l0boki7HDRWZ0yxpAZb5-igfbcw',
      rating: 5,
      desc: 'Full multi-stage paint correction and ceramic sealant.'
    },
    {
      id: 2,
      title: 'Luxe Interior Restoration',
      category: 'Interiors',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hPQ49GsBTmK-boJ4BnJeCqmj64ncoJvgAEWziGuE9e49lCuNPoHAr3SI_OskYkpKWrzgSGfymYFranJyNiUdUO00wnLJyKtnSRaz54AYIoORBhhYNcScufGlQt8n3Ao1ts6Q4yXzrDCbhDWWb3SWyUVab34f7bjrRWFmDgxzt-umiP9LkzGvFLITGauVNrs8Ggda_CPOTNKVN_v_CuqVDz0kk-hOiFRTpnmllR3_D42dWXw2ZasyCUgpFfM15bz6dLvPqylccU2H',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDULjS5tSNsaXsJhwWhLHzPqRTfchTOMaamJTD78ZkUm5j6eNK5y8Q7mrWgtfU6lEQLD9WINdOGj6PH2PoHh4bi2spobCsv4DFyVA0I7MAbitjT986r0ZjgUi5723ubNeZa5cxNAW4kk9V7CL02Y7BfCYP1302MhVeGA2BVh4euwEaETTpJSUnwqtHu8KAExjNdMbnEARHmA9pFJD13P-yVV9j9Ua0rYWLiDCNNZDIe6m_SqEcvklnToQLwAxcgV4uO9odb9UkBxFWB',
      rating: 5,
      desc: 'Steam cleaning, leather conditioning, and odor removal.'
    },
    {
      id: 3,
      title: 'Glass Shield Coating',
      category: 'Ceramic',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTBjY853N_tsLWgpHosW-6fVDvQaugmfuOLUY1YanFUSmBzzQ9kXWqOCpCSs--I_QSAig-O3Ar2PSMT6JRQqGTA8LFKDLwA99upo46Dyo7vCB_VATsSUDxyrNqsiSM_n9YzU5ynDj4QmlTxbMD8DB0sazyb1XUvn7UANhhwnvYf3gzSQt3JQsnXpdSbxf0HvyeDJhC8cobm40sW8j4pVw98owgIHA3cvNnw2Kf75q2usTVzw6eWAUqc0nenU9XRV-k2jiAwiKhkShj',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1Hi7K0dxCo0CssyTPN-sZzmRXfn7iOEeXfQjidoPLr8_kan1dI7MN7Cb1Mw639bTRQlXnFJytDQCXq1j2ZNEGOQZz-x_wylBccoJ6xoh0PexboZfpsqUsEg6cL-gFKQU17NTK1WC4W6eI9WDlVCg3paBXY3irFETmvdQqo78cnaJEW63xQlZq4Cbaa-RglhCo9z6GECqsWD0dSKUQreduLEZmX8bxwtO5_bdhwTwwGU9NgeVAj3I8FnGHOS55PIVpSxrhY71xpsNQ',
      rating: 5,
      desc: 'Ultra-hydrophobic ceramic coating for permanent shine.'
    },
    {
      id: 4,
      title: 'High-Gloss Wheel Detail',
      category: 'Exteriors',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITWnxiUQ0BHm-CDa9DRh5dlul961bGTJNB0vyXOBQfhnV2-ndWNLC0XgpUcB5ERp-qH5HP6y1DGyrRNEy1E3NlENXxMX7L_FJB_TyLDYyhGpEPNmY9TY1bMt0CuB5W8njN55d6vDKNToyEinpbz4KpwzCf6-a1ILMYBTLL2lWBLQQSKoy4MSn0IbPdkGs98cOsa6Z1R-AD7Ni5z1ZcxT8r9LNyf8R3QtYQouW3SFB-7QDZmoxCDKc8EISfymyibMw8fglEQoJyPIL',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1hck36m9qR_fuEArv7jVfmmKaIZgjN99G-D5VkxA0ObZzcOhg4RDyrFh_kK0Lxy1vcNuAvHZkrTyVZak6OU2NMuYfd9u6N71LuB_ZKLhrIepZhnydbItyT6RNiUKkCPfl1prht6DiW5PhMOn-iXg3hBMrO1OkRYJNafJy2b6mAHD-MkBJYNCnBxt7y1rkpgUWYfUyPaEnJ0sYGL9B8-6AhLFebXseA9BFHfb2cVPxLXFEVtpl0Kd2ygptAt2cYS76uSnGWmzvixtQ',
      rating: 5,
      desc: 'Precision wheel cleaning and tire dressing.'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-display">
      <Helmet>
        <title>Transformation Portfolio | Prism Detailing</title>
      </Helmet>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
        {/* Gallery Header */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Elite Car Care</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 mb-6 tracking-tighter">
                Witness the <span className="text-primary italic">Transformation</span>
              </h1>
              <p className="text-lg text-slate-600 font-medium">
                Experience the pinnacle of mobile car detailing. Our precision and passion bring out a showroom shine you have to see to believe.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['All', 'Interiors', 'Exteriors', 'Ceramic'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white shadow-xl shadow-primary/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="relative aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl">
                <div className="absolute inset-0 grid grid-cols-2 gap-px bg-slate-200">
                  <div className="relative group/side overflow-hidden">
                    <img src={project.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover/side:scale-105" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-white/10 uppercase tracking-widest">Before</div>
                  </div>
                  <div className="relative group/side overflow-hidden">
                    <img src={project.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover/side:scale-105" />
                    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white shadow-lg uppercase tracking-widest">After</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">{project.category}</span>
                    <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                    <div className="flex gap-0.5 text-primary">
                      {[...Array(project.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-slate-500 text-sm max-w-md font-bold">{project.desc}</p>
                </div>
                <div className="h-12 w-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <CheckCircle size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight */}
        <section className="mt-40 rounded-[3rem] bg-slate-900 border border-primary/10 p-12 lg:p-24 relative overflow-hidden text-center shadow-3xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Camera size={400} className="text-primary" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">Every car has a <br/><span className="text-primary italic">Spectacular Shine</span> waiting to be revealed.</h2>
            <p className="text-lg text-slate-300 font-medium">
              We treat every vehicle as a unique project, using specialized light spectrum analysis to identify and eliminate micro-scratches, swirl marks, and contamination.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/book" className="px-12 py-6 bg-primary text-white font-black rounded-3xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                BOOK YOUR DETAIL <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;

