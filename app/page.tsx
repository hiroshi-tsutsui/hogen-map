import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50">
      <header className="w-full bg-green-600 text-white p-4 shadow-md text-center">
        <h1 className="text-3xl font-bold">Hogen Map 方言マップ</h1>
        <p>Discover the dialects of Japan</p>
      </header>

      <div className="flex-1 w-full max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 flex items-center justify-center relative min-h-[400px]">
          <span className="text-gray-300 font-bold text-5xl">JAPAN MAP</span>
          
          <div className="absolute top-1/4 right-1/4 bg-yellow-100 border-2 border-yellow-400 p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl shadow-md">
            <p className="font-bold text-gray-800">Osaka</p>
            <p className="text-blue-600 font-bold text-lg">なんでやねん！</p>
          </div>

          <div className="absolute bottom-1/4 left-1/4 bg-blue-100 border-2 border-blue-400 p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl shadow-md">
            <p className="font-bold text-gray-800">Fukuoka</p>
            <p className="text-blue-600 font-bold text-lg">好いとーよ</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-green-700">Quiz: Guess the Meaning</h2>
            <div className="p-4 bg-gray-50 rounded mb-4">
              <p className="text-lg font-bold mb-2">"Menkoi" (Hokkaido/Tohoku)</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white border hover:bg-green-50 p-2 rounded text-left">A. Scary</button>
                <button className="bg-white border hover:bg-green-50 p-2 rounded text-left">B. Cute</button>
                <button className="bg-white border hover:bg-green-50 p-2 rounded text-left">C. Cold</button>
                <button className="bg-white border hover:bg-green-50 p-2 rounded text-left">D. Delicious</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
