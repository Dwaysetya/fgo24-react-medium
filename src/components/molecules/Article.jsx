import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeroArticle from "./HeroArticle";
import { FaRegHandRock, FaRegCommentAlt } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import axios from "axios";

function Article() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const limit = 5;
  const totalPages = Math.ceil(count / limit);

  async function fetchArticles(page = 1, query = "") {
    try {
      const offset = (page - 1) * limit;
      const { data } = await axios.get("/dataArticle.json");
      console.log("Raw data length:", data.length);
      const display = data.filter((obj) =>
        obj.judul.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered data length:", display.length);
      console.log("Current page:", page, "Offset:", offset);
      setCount(display.length);
      setData(display.slice(offset, offset + limit));
      console.log("Displayed data:", display.slice(offset, offset + limit));
      console.log("Total pages:", Math.ceil(display.length / limit));
    } catch (error) {
      console.error("Error fetching articles:", error);
      setCount(0);
      setData([]);
    }
  }

  useEffect(() => {
    const query = searchParams.get("search") || "";
    console.log("Search query:", query);
    setCurrentPage(1);
    fetchArticles(1, query);
  }, [searchParams]);

  const handleClick = (item) => {
    navigate(`/article/${item.userName}/${item.slug}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      console.log("Navigating to page:", page);
      setCurrentPage(page);
      const query = searchParams.get("search") || "";
      fetchArticles(page, query);
      window.scrollTo(0, 0);
    }
  };

  const renderPagination = () => {
    console.log("Rendering pagination, totalPages:", totalPages);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          style={{ minWidth: "40px" }}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center mt-10 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          style={{ minWidth: "100px" }}
        >
          Sebelumnya
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          style={{ minWidth: "100px" }}
        >
          Selanjutnya
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      {searchParams.get("search") && (
        <p className="mt-2 text-gray-600 italic">
          Hasil pencarian untuk: "{searchParams.get("search")}"
        </p>
      )}
      <div className="mt-10">
        <HeroArticle />
      </div>
      {data.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">
          Tidak ada artikel yang ditemukan.
        </p>
      ) : (
        data.map((item) => (
          <div
            className="w-full flex flex-col items-center p-5 shadow-md mt-10 cursor-pointer"
            key={item.slug}
            onClick={() => handleClick(item)}
          >
            <div className="flex">
              <div className="flex flex-col">
                <h1 className="font-bold text-4xl">{item.judul}</h1>
                <p className="font-light">{item.paragraf}</p>
              </div>
              <div>
                <img src={item.image} alt="image" />
              </div>
            </div>
            <div className="flex gap-5 w-full p-5 justify-between">
              <div className="flex gap-5">
                <FaRegHandRock />
                <FaRegCommentAlt />
              </div>
              <div>
                <CiBookmarkPlus />
              </div>
            </div>
          </div>
        ))
      )}
      {count > 0 ? (
        totalPages > 1 ? (
          renderPagination()
        ) : (
          <p className="text-center text-gray-600 mt-10">
            Hanya ada satu halaman data.
          </p>
        )
      ) : null}
    </div>
  );
}

export default Article;
