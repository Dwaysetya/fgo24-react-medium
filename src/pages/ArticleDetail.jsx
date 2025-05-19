import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiChatFollowUpLine } from "react-icons/ri";
import axios from "axios";
import Chip from "../components/atom/Chip";
import { BiLike } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiBookmarkPlus } from "react-icons/ci";

function ArticleDetail() {
  const { username } = useParams();
  const [isData, setIsData] = useState([]);
  console.log(username);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/dataArticle.json");
      const filtering = data.filter(
        (item) => item.userName.toLowerCase() === username.toLowerCase()
      );
      setIsData(filtering);
    };
    fetchData();
  }, [username]);

  return (
    <>
      {isData.map((data, index) => (
        <main className="w-full min-h-ful">
          <section className="flex flex-col w-full px-[300px]  py-[100px]">
            <div key={index} className="flex flex-col shadow-2xl min-h-full">
              <div className="flex flex-col justify-center items-center m-10">
                <h1 className="font-extrabold text-6xl m-10">{data.judul}</h1>
                <p className="font-light ">{data.paragraf}</p>{" "}
              </div>
              <div className="flex p-[30px] items-center gap-5 shadow-md">
                <p className="font-light">Di susun oleh :</p>
                <span>{data.userName}</span>
                <Chip>Follow</Chip>
                <RiChatFollowUpLine />
              </div>
              <div className="h-20 shadow-md flex justify-between items-center px-10">
                <div className="flex gap-5">
                  <BiLike />
                  <TfiCommentAlt />
                </div>
                <div>
                  <CiBookmarkPlus />
                </div>
              </div>
              <img src={data.image} alt="image" />
            </div>
            <div>
              <h5 className=" text-2xl text-justify mt-10">{data.body}</h5>
            </div>
          </section>
        </main>
      ))}
    </>
  );
}

export default ArticleDetail;
