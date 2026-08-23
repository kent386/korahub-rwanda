import React from 'react';
import { Search, ShieldCheck, Globe, Lock, Car, Gavel, Home, Camera, Brush, Briefcase } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. DISCLAIMER - ICYITONDERWA CY'AMATEGEKO */}
      <div className="bg-slate-900 text-amber-500 text-center py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4">
        ⚠️ KoraHub ni urubuga rwigenga ry'abikorera • Ntabwo ari urwa Leta y'u Rwanda cyangwa Irembo.
      </div>

      {/* 2. NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-5 border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black text-slate-800 tracking-tighter">
          Kora<span className="text-amber-500">Hub</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600 uppercase tracking-tight">
          <a href="#" className="hover:text-amber-500 transition">Services</a>
          <a href="#" className="hover:text-amber-500 transition">Providers</a>
          <a href="#" className="hover:text-amber-500 transition">Help Center</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center text-xs font-bold border-2 border-slate-100 px-3 py-2 rounded-xl hover:bg-slate-50 transition">
            <Globe className="w-4 h-4 mr-2 text-amber-500"/> Kinyarwanda
          </button>
          <button className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-amber-200 hover:bg-amber-600 transition-all active:scale-95">
            INJIRA
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
            Gishaka, booka, <br /> 
            <span className="text-amber-500 italic">wishyure</span> serivisi.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Uburyo bwa mbere bworoshye bwo kubona abanyamwuga bo kwizera mu Rwanda muri serivisi z'abikorera.
          </p>
          
          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-amber-500 rounded-3xl blur-xl opacity-20 group-focus-within:opacity-40 transition"></div>
            <div className="relative flex items-center">
              <Search className="absolute left-6 text-slate-400 group-focus-within:text-amber-500 transition" />
              <input 
                type="text" 
                placeholder="Shaka: Car rental, Lawyer, Cleaning, Photography..." 
                className="w-full pl-16 pr-6 py-6 rounded-2xl border-2 border-slate-100 focus:border-amber-500 outline-none shadow-2xl text-lg transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 4. CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ibyiciro bya Serivisi</h2>
            <p className="text-slate-500 font-medium">Hitamo icyiciro cy'ibyo ukeneye uyu munsi</p>
          </div>
          <button className="text-amber-600 font-bold text-sm hover:underline">Reba zose →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Car />, name: "Transport", color: "bg-blue-50 text-blue-600" },
            { icon: <Gavel />, name: "Legal", color: "bg-purple-50 text-purple-600" },
            { icon: <Home />, name: "Home Care", color: "bg-green-50 text-green-600" },
            { icon: <Briefcase />, name: "Business", color: "bg-amber-50 text-amber-600" },
            { icon: <Camera />, name: "Photography", color: "bg-pink-50 text-pink-600" },
            { icon: <Brush />, name: "Beauty", color: "bg-orange-50 text-orange-600" },
            { icon: <ShieldCheck />, name: "Security", color: "bg-slate-50 text-slate-600" },
            { icon: <Briefcase />, name: "Consulting", color: "bg-indigo-50 text-indigo-600" },
          ].map((cat, i) => (
            <div key={i} className="group p-8 rounded-[32px] border-2 border-slate-50 hover:border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-100 text-center">
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-black text-slate-800">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRUST SECTION */}
      <section className="bg-slate-900 py-24 px-6 text-white rounded-[60px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Kuki ukwiye <br /> <span className="text-amber-500">kwizera</span> KoraHub?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-xl"><ShieldCheck className="text-amber-500" /></div>
                <div>
                  <h4 className="font-bold text-xl">Providers bagenzuwe</h4>
                  <p className="text-slate-400">Buri muryango cyamaduka akorera kuri KoraHub abanza kugenzurwa.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-xl"><Lock className="text-amber-500" /></div>
                <div>
                  <h4 className="font-bold text-xl">Umutekano mu kwishyura</h4>
                  <p className="text-slate-400">Amakuru yawe arinzwe kandi wishyura serivisi wayihariwe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-amber-500 rounded-full blur-[120px] opacity-20 absolute inset-0"></div>
            <div className="relative bg-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl">
               <div className="space-y-4">
                  <div className="h-4 w-1/2 bg-slate-700 rounded-full"></div>
                  <div className="h-4 w-3/4 bg-slate-700 rounded-full"></div>
                  <div className="h-24 w-full bg-slate-700 rounded-3xl"></div>
                  <div className="h-12 w-full bg-amber-500 rounded-2xl"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-black text-slate-900 mb-6">Kora<span className="text-amber-500">Hub</span></div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                Urubuga rwa mbere mu Rwanda rwigenga rwo gushaka no kwishyura serivisi z'abanyamwuga.
              </p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li className="hover:text-amber-500 cursor-pointer">Reba serivisi</li>
                <li className="hover:text-amber-500 cursor-pointer">Twandikire</li>
                <li className="hover:text-amber-500 cursor-pointer">Amategeko</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Indimi</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li className="text-slate-900 underline">Kinyarwanda</li>
                <li className="hover:text-amber-500 cursor-pointer">English</li>
                <li className="hover:text-amber-500 cursor-pointer">Français</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-12 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest gap-6">
            <p>© 2024 KoraHub Rwanda. All rights reserved.</p>
            <div className="flex space-x-8">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
            }
