
import React from "react";


const NewsItem = ({ title, description, imageUrl, newsUrl, author, publishedTime, source ,element}) => {
  


  return (
    <div className=" relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full" >
       <span className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-full z-10 overflow-y-visible">
        {source}
        </span>
      <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl h-64">
        <img
          src={imageUrl}
          alt="news"
          className="object-cover w-full h-full"
        />
        
      </div>

   
     <div className="px-6 pt-4">
        <div className="mb-2">
          <p className="text-base font-medium text-gray-900 line-clamp-2">{title}</p>
        </div>
        <p className="text-sm text-gray-700 opacity-90 line-clamp-3">{description}</p>
      </div>

      <div className="px-6">
        <hr className="opacity-50 my-3 border-gray-300" />
      </div>

      <div className="px-6">
        <p className="text-sm text-gray-700 opacity-75">
          By <b>{author || "Unknown"}</b> on {publishedTime}
        </p>
      </div>

      <div className="p-6 mt-3 pt-0">
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-6 text-xs font-bold text-center uppercase transition-all rounded-lg bg-black/10 text-black hover:scale-105"
        >
          Read More
        </a>
      </div>
     </div>
  
  );
};

export default NewsItem;
