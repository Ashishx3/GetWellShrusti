"use client";

export default function Playlist() {
  return (
    <div className="p-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        🎶 Talwiinder Vibes
      </h2>
      <div className="space-y-4">
        <div className="p-3 bg-white rounded-xl shadow-md">
          <p className="font-semibold text-gray-700">1 Talwiinder Song❤️❤️</p>
          <audio controls className="w-full mt-2 rounded">
            <source src="./1.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="p-3 bg-white rounded-xl shadow-md">
          <p className="font-semibold text-gray-700"> 2nd Talwiinder Song🎀🎀 </p>
          <audio controls className="w-full mt-2 rounded">
            <source src="./2.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="p-3 bg-white rounded-xl shadow-md">
          <p className="font-semibold text-gray-700">Pink Lips 😚🎀❤️</p>
          <audio controls className="w-full mt-2 rounded">
            <source src="./3.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}
