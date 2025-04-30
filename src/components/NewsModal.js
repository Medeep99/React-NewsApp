import React from "react";

const NewsModal = ({ element, onClose }) => {
  if (!element.article) return null;
  console.log(element);

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
      <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">{element.article.title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {element.article.author || "Unknown"} |{" "}
          {new Date(element.article.publishedAt).toGMTString()}
        </p>
        {element.article.urlToImage && (
          <img
            src={element.article.urlToImage}
            alt="News"
            className="w-full h-auto mb-4 rounded"
          />
        )}
        <p className="text-gray-800">{element.article.content || element.article.description}</p>
        <a
          href={element.article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 underline"
        >
          Read full article on source site
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
