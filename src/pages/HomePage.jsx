import React from "react";
import NavMenu from "../components/molecules/NavMenu";
import HeroArticle from "../components/molecules/HeroArticle";
import Article from "../components/molecules/Article";

function HomePage() {
  return (
    <main className="w-full min-h-full">
      <section className="flex w-full min-h-full  justify-center items-center">
        <NavMenu />
      </section>
      <section className="flex flex-col w-full px-[200px] py-[100px]">
        <div>
          <HeroArticle />
        </div>
        <div className="flex flex-col divide-x-1 w-[70%]">
          <Article />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
