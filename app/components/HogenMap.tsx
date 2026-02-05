'use client';

import { useState } from 'react';

type Region = {
  id: string;
  name: string;
  dialectName: string;
  phrases: {
    standard: string;
    local: string;
    note: string;
  }[];
  color: string;
};

const REGIONS: Region[] = [
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    dialectName: 'Hokkaido-ben',
    phrases: [
      { standard: "It is cold.", local: "Shibareru ne.", note: "Shibareru = Freezing" },
      { standard: "Very/Extremely", local: "Namara", note: "Namara oishii = Very delicious" }
    ],
    color: 'bg-cyan-600'
  },
  {
    id: 'tohoku',
    name: 'Tohoku (Aomori)',
    dialectName: 'Tsugaru-ben',
    phrases: [
      { standard: "Me (Watashi)", local: "Wa", note: "Shortened form." },
      { standard: "You (Anata)", local: "Na", note: "" },
      { standard: "Please eat.", local: "Ke.", note: "Super short!" }
    ],
    color: 'bg-blue-600'
  },
  {
    id: 'kanto',
    name: 'Kanto (Tokyo)',
    dialectName: 'Hyojungo (Standard)',
    phrases: [
      { standard: "Thank you", local: "Arigatou", note: "Standard Japanese." },
      { standard: "Isn't it?", local: "Desho?", note: "" }
    ],
    color: 'bg-green-600'
  },
  {
    id: 'kansai',
    name: 'Kansai (Osaka)',
    dialectName: 'Kansai-ben',
    phrases: [
      { standard: "Thank you", local: "Ookini", note: "Classic merchant greeting." },
      { standard: "Really?", local: "Honma?", note: "Used constantly." },
      { standard: "No good / Useless", local: "Akan", note: "Dame -> Akan" }
    ],
    color: 'bg-yellow-600'
  },
  {
    id: 'hiroshima',
    name: 'Chugoku (Hiroshima)',
    dialectName: 'Hiroshima-ben',
    phrases: [
      { standard: "Because/Therefore", local: "Jaken", note: "Famous Yakuza movie slang too." },
      { standard: "Painful/Tough", local: "Tai-gi", note: "" }
    ],
    color: 'bg-orange-600'
  },
  {
    id: 'hakata',
    name: 'Kyushu (Fukuoka)',
    dialectName: 'Hakata-ben',
    phrases: [
      { standard: "...you know?", local: "...to?", note: "Sentence ending particle." },
      { standard: "Very/Amazing", local: "Bari", note: "Bari umai = Super tasty." }
    ],
    color: 'bg-red-600'
  },
  {
    id: 'okinawa',
    name: 'Okinawa',
    dialectName: 'Uchinaaguchi',
    phrases: [
      { standard: "Hello", local: "Haisai (M) / Haitai (F)", note: "Iconic greeting." },
      { standard: "Thank you", local: "Nifeedeebiru", note: "Very distinct from mainland." },
      { standard: "Welcome", local: "Mensoure", note: "" }
    ],
    color: 'bg-teal-600'
  }
];

export default function HogenMap() {
  const [activeRegion, setActiveRegion] = useState<Region>(REGIONS[2]); // Default Tokyo

  return (
    <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto p-4 gap-4">
      
      {/* Map Area (Left) */}
      <div className="flex-1 bg-blue-50 rounded-2xl border-2 border-blue-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="absolute top-6 left-6 text-2xl font-bold text-blue-900/30 uppercase tracking-widest">Select Region</h2>
        
        {/* Abstract Map Visualization */}
        <div className="flex flex-col gap-2 w-full max-w-sm">
            {/* Hokkaido */}
            <button onClick={() => setActiveRegion(REGIONS[0])} className={`h-16 w-3/4 self-end rounded-lg ${REGIONS[0].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Hokkaido</button>
            
            <div className="flex gap-2 w-full h-48">
                {/* Main Body */}
                <div className="flex-1 flex flex-col gap-2">
                    <button onClick={() => setActiveRegion(REGIONS[1])} className={`flex-1 rounded-lg ${REGIONS[1].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Tohoku</button>
                    <button onClick={() => setActiveRegion(REGIONS[2])} className={`flex-1 rounded-lg ${REGIONS[2].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Kanto</button>
                </div>
                <div className="flex-1 flex flex-col gap-2 mt-8">
                     <button onClick={() => setActiveRegion(REGIONS[3])} className={`flex-1 rounded-lg ${REGIONS[3].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Kansai</button>
                     <button onClick={() => setActiveRegion(REGIONS[4])} className={`flex-1 rounded-lg ${REGIONS[4].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Chugoku</button>
                </div>
            </div>

            <div className="flex gap-2 w-3/4 self-start pl-8">
                {/* Shikoku/Kyushu */}
                <button onClick={() => setActiveRegion(REGIONS[5])} className={`h-16 w-full rounded-lg ${REGIONS[5].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Kyushu</button>
            </div>
            
            {/* Okinawa */}
            <button onClick={() => setActiveRegion(REGIONS[6])} className={`h-12 w-24 self-start mt-4 ml-2 rounded-lg ${REGIONS[6].color} text-white font-bold shadow hover:scale-105 transition-transform flex items-center justify-center`}>Okinawa</button>
        </div>
      </div>

      {/* Detail Area (Right) */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col">
         <div className="mb-8">
             <span className={`px-3 py-1 rounded-full text-white text-xs font-bold uppercase ${activeRegion.color}`}>
                 {activeRegion.name}
             </span>
             <h1 className="text-4xl font-black text-slate-800 mt-2">{activeRegion.dialectName}</h1>
         </div>

         <div className="space-y-4 overflow-y-auto pr-2">
             {activeRegion.phrases.map((phrase, i) => (
                 <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                     <div className="flex justify-between items-end mb-2">
                         <h3 className="text-2xl font-bold text-slate-800">{phrase.local}</h3>
                         <span className="text-sm font-mono text-slate-400">{phrase.standard}</span>
                     </div>
                     {phrase.note && <p className="text-sm text-slate-500 italic border-l-2 border-slate-300 pl-2">{phrase.note}</p>}
                 </div>
             ))}
         </div>

         <div className="mt-auto pt-8 text-center text-slate-400 text-sm">
             Select a region on the map to explore local words.
         </div>
      </div>
    </div>
  );
}
