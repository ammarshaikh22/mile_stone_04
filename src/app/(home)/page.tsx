'use client';
import About from "@/components/About";
import Article from "@/components/Article";
import Banner from "@/components/Banner";
import BlogPost from "@/components/BlogPost";
import News from "@/components/News";
import React, { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      new LocomotiveScroll();
    }
  }, []);
  return (
    <main className="2xl:max-w-[1536px] mx-auto" data-scroll-container>
      <Banner data-scroll />
      <About data-scroll />
      <BlogPost data-scroll />
      <News data-scroll />
      <Article data-scroll />
    </main>
  );
}
