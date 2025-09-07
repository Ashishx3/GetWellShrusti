"use client";
import { useState, useEffect } from "react";

export default function BreathingExercise() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.3 : 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-green-100 rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">🌿 Breathe with Me</h2>
      <div
        className="w-24 h-24 mx-auto rounded-full bg-green-400 transition-transform duration-4000"
        style={{ transform: `scale(${scale})` }}
      ></div>
      <p className="mt-4 text-gray-700">Inhale... Exhale... Relax 💆‍♀️</p>
    </div>
  );
}
