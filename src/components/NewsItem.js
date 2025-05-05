import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import "./mine.css";
import NewsModal from "./NewsModal";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  publishedTime,
  source,
  element,
}) => {
  const [selectedContent, setSelectedContent] = useState(undefined);

  return (
    <motion.div
     
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "tween" }}
      layoutId={"card-" + element.url}
      className=" relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
    >
      <span className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-full z-10 overflow-y-visible">
        {source}
      </span>
      <div className="flex flex-col justify-between h-full">
        <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl h-64">
          <img
            src={imageUrl}
            alt="news"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="px-6 pt-4">
        <div className="mb-2">
          <p className="text-base font-medium text-gray-900 line-clamp-2">
            {title}
          </p>
        </div>
      </div>

      {/* <div className="px-6 pt-4">
        <p className="text-sm text-gray-700 opacity-90 line-clamp-3">{description}</p>
      </div>

      <div className="px-6">
        <hr className="opacity-50 my-3 border-gray-300" />
      </div>

      <div className="px-6">
        <p className="text-sm text-gray-700 opacity-75">
          By <b>{author || "Unknown"}</b> on {publishedTime}
        </p>
      </div> */}
      <div className="p-6 mt-3 pt-0">
        <motion.a
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.95,
            backgroundColor: "rgba(0, 0, 0, 1)",
            color: "white",
            transition: { duration: 0.0001 },
          }}
          className="block w-full py-3 px-6 text-xs font-bold text-center uppercase transition-all rounded-lg bg-black/10 text-black"
          onClick={() => {
            setSelectedContent(element);
            document.body.style.overflow = "hidden";
          }}
        >
          Read More
        </motion.a>
      </div>
      <AnimatePresence>
        {selectedContent && (

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
            onClick={() => {
              setSelectedContent(undefined);
              document.body.style.overflow = "auto";
            }}
          >
            <div
              className="relative z-60"
              onClick={(e) => e.stopPropagation()} // Prevent modal clicks from bubbling to parent
            >
              <NewsModal selectedContent={selectedContent} />
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsItem;
