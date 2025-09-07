"use client";
import { useState } from "react";

export default function CarePackage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl shadow-xl text-center">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">
        🎁 Virtual Care Package
      </h2>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="bg-orange-500 text-white px-5 py-3 rounded-xl shadow hover:bg-orange-600 transition font-semibold"
        >
          Open Gift 🎀
        </button>
      ) : (
        <div className="space-y-3 text-lg font-medium text-gray-800">
          <p>🌸 Fresh Flowers</p>
          <p>☕ Hot Chocolate</p>
          <p>🧣 Cozy Blanket</p>
          <p>😂 A funny meme -that is me</p>
        </div>
      )}
    </div>
  );
}
