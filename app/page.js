import Greeting from "@/components/Greeting";
import Playlist from "@/components/Playlist";
import Gallery from "@/components/Gallery";
import CarePackage from "@/components/CarePackage";
import BreathingExercise from "@/components/BreathingExercise";

export default function Home() {
  return (
    <main className=" min-h-screen p-6 space-y-10 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <Greeting />
      <Playlist />
      <Gallery />
      <CarePackage />
      <BreathingExercise />
    </main>
  );
}
