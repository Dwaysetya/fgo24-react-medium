import Article from "../components/molecules/Article";
import Recommend from "../components/molecules/Recommend";

function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <section className="flex w-full py-[100px] justify-center">
        <div className="flex flex-col w-[50%] max-w-[800px]">
          <Article />
        </div>
        <div className="w-[30%] max-w-[400px] ml-10">
          <Recommend />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
