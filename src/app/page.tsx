'use client';
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
export default function Home() {
  const mode = useSelector((state: any) => state.theme.mode);
  return (
    <main className={`${mode === 'dark' ? 'bg-neutral-900 dark text-white' : 'bg-white text-black'} relative`}>
      <Navbar />
      <Banner/>
    </main>
  );
}
