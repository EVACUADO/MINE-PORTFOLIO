import React, { useState } from "react";
import { motion } from "framer-motion";

function NatureHopGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const natureHopScreenshots = [
    {
      url: "EMS/NatureHop/Level1.png",
      title: "Level 1 - The Beginning",
      description: "A simple level introducing movement and fruit collection.",
    },
    {
      url: "EMS/NatureHop/Level2.png",
      title: "Level 2 - Forest Challenge",
      description: "A more challenging level with obstacles and hazards.",
    },
    {
      url: "EMS/NatureHop/Level3.png",
      title: "Obstacle Mechanics",
      description: "Avoid spikes and sharp objects to stay alive!",
    },
    {
      url: "EMS/NatureHop/Level 4.png",
      title: "Fruit Collection",
      description: "Many obstacles to finish and collect fruits to earn points and progress through levels.",
    },
    {
      url: "EMS/NatureHop/LevelFinish.png",
      title: "Level Completion",
      description: "Reach the finish line to advance to the next stage.",
    },
  ];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {natureHopScreenshots.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-video bg-gray-100">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h5 className="font-semibold text-gray-900">{image.title}</h5>
              <p className="text-sm text-gray-600 mt-1">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white mt-4">
              <h5 className="text-2xl font-semibold">{selectedImage.title}</h5>
              <p className="text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NatureHopGallery;
