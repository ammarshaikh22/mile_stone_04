import About from "@/components/About";
import Article from "@/components/Article";
import Banner from "@/components/Banner";
import BlogPost from "@/components/BlogPost";
import News from "@/components/News";
import React from "react";

export default function Home() {
  return (
    <main className="2xl:max-w-[1536px] mx-auto">
      <Banner />
      <About />
      <BlogPost />
      <News />
      <Article/>
    </main>
  );
}
