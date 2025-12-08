import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { url: "https://source.unsplash.com/random/800x600?nature", title: "Nature" },
    { url: "https://source.unsplash.com/random/800x600?mountain", title: "Mountains" },
    { url: "https://source.unsplash.com/random/800x600?beach", title: "Beach" },
    { url: "https://source.unsplash.com/random/800x600?forest", title: "Forest" },
    { url: "https://source.unsplash.com/random/800x600?city", title: "City Life" },
    { url: "https://source.unsplash.com/random/800x600?flowers", title: "Flowers" },
    { url: "https://source.unsplash.com/random/800x600?road", title: "Road Trip" },
    { url: "https://source.unsplash.com/random/800x600?landscape", title: "Landscape" },
    { url: "https://source.unsplash.com/random/800x600?ocean", title: "Ocean" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-6 py-12">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-10 drop-shadow">
        ✨ Stunning Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay Title */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500 flex justify-center items-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                {img.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.img
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              src={selectedImg.url}
              alt=""
              className="rounded-xl max-w-[85%] max-h-[85%] shadow-2xl border-4 border-white"
            />

            {/* Close Button */}
            <button
              className="absolute top-8 right-10 text-white text-5xl font-bold hover:scale-110 transition"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
