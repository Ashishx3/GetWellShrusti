"use client";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        📸 Sweet Memories (ye mat sochna stalker hu 😭😭)
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image src="/im/1.jpg" alt="memory 1" fill className="object-cover" />
        </div>
        <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image src="/im/2.jpg" alt="memory 2" fill className="object-cover" />
        </div>
        <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image src="/im/3.jpg" alt="memory 3" fill className="object-cover" />
        </div>
        <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image src="/im/4.jpg" alt="memory 4" fill className="object-cover" />
        </div>
        <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition col-span-2">
          <Image src="/im/5.jpg" alt="memory 5" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
