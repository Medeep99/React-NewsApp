import React from "react";
import { motion } from "framer-motion";
import './mine.css'


export default function NewsModal({selectedContent}) {
  
  return (
    <div>


      <div className="popup-container"
 
      
      >
        <div>
          <div className="p-6 mt-3 pt-0">
            <img src={selectedContent.urlToImage} alt="" />
          </div>
          <div className="p-5 pt-0">
            <h1 className="h1 text-base font-large text-gray-900 line-clamp-2">
              {selectedContent.title}
            </h1>
            <p>{selectedContent.description}</p>
            {/* <p>{selectedContent.content}</p> */}
            <div>
              <hr className="bg-slate-500 text-slate-300"></hr>
              <p>
                By <b>{selectedContent.author || "Unknown"}</b> <br />
                Published at: <b>{new Date(selectedContent.publishedAt).toGMTString()}</b>
              </p>
            </div>

            <motion.a
              style={{
                maxWidth: "300px",
                margin: "0 auto",
                textAlign: "center",

                textDecoration: "none",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 1,
                backgroundColor: "rgba(0, 0, 0, 1)",
                color: "white",
                transition: { duration: 0.0001 },
                
              }}
              
              href={selectedContent.url}
            
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 text-xs font-bold text-center uppercase transition-all rounded-lg bg-black/10 text-black"
            >
              Go to {selectedContent.source.name}
            </motion.a>
          </div>
        </div>
      </div>

    </div>
  );
}
