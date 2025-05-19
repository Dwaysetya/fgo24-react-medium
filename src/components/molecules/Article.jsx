import React from "react";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Article() {
  const dataArticle = [
    {
      userName: "Yasir",
      slug: "The-Only-7-Signs-of-AI-Writing",
      judul: "The Only 7 Signs of AI Writing You Need to Remove in Your Text",
      paragraf: "Never be accused of using AI again.",
      body: "Note: This was originally published as a guest post to Sorab Gaswalla’s newsletter, All About Content … And AI.AI-generated content is fast. But it often feels robotic. Lifeless. Readers can tell. Editors can tell. Even AI detectors, faulty as they can be, can tell (at least, sometimes). It’s because AI lacks that human spark. The emotions, the experiences — that nameless way that they bleed into our words. They’ll all missing in lazy, completely-AI text. This is what creates that conflict: people read low quality AI content, hate it, and then generalize all “AI text” to be this way.",
    },
    {
      userName: "Nanda",
      slug: "The-Only-7-Signs-of-AI-Writing",
      judul: "Say Goodbye To Axios In 2025",
      paragraf:
        "Discover the Future of Web Requests: Lightweight, Intelligent, and Seamlessly Integrated",
      body: "For over a decade, Axios has been the go-to HTTP request library for frontend developers, thanks to its simple API design and support for both browser and Node.js environments. However, as modern frontend frameworks evolve and engineering demands increase, Alova.js emerges as a lighter, smarter, and more modern alternative.",
    },
    {
      userName: "Faisal",
      slug: "The-Only-7-Signs-of-AI-Writing",
      judul:
        "How I Started Writing With No Followers, No Experience, and No Hope",
      paragraf:
        "For the writer who doesn’t think they have anything to offer — and why you’re dead wrong",
      body: "I didn’t have a brand. I didn’t have confidence. I didn’t even have a bed. Just two kids, a floor to sleep on, and a voice too ashamed to use. No followers. No experience. No hope. But I wrote anyway — not because I believed in myself, but because I didn’t know what else to do. If you think you have nothing to offer, I’ve been where you are. But I’m here to tell you",
    },
    {
      userName: "Hosea",
      slug: "The-Only-7-Signs-of-AI-Writing",
      judul: "Interview Experience: Senior Frontend Engineer at Quizizz",
      paragraf:
        "For the writer who doesn’t think they have anything to offer — and why you’re dead wrong",
      body: "I recently interviewed for a Senior Frontend Engineer role at Quizizz. The overall process was smooth, with four rounds covering JavaScript fundamentals, problem-solving, low-level design, and behavioral aspects. Although I wasn’t selected, the experience was incredibly insightful, and I learned a lot along the way. Here’s a breakdown of my journey:",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/article/${item.userName}/${item.slug}`);
  };

  return (
    <>
      {dataArticle.map((item) => (
        <div
          className="w-full flex flex-col items-center p-5 shadow-xs mt-10 cursor-pointer"
          key={item.slug}
          onClick={() => handleClick(item)}
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">{item.judul}</h1>
            <p className="font-light ">{item.paragraf}</p>
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
      ))}
    </>
  );
}

export default Article;
