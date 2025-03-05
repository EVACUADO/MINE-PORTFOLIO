import React from "react";
import { motion } from "framer-motion";
import NatureHopGallery from "./NatureHopGallery";

function Project2() {
  const project = {
    title: "Other Projects",
    description:
      "A 32-bit pixel 2D game developed using Unity 2D and C#. Inspired by classic games like Mario, this game features multiple levels with obstacles, sharp pointy objects, and fruit collection mechanics. The game is still a work in progress.",
    features: [
      "Game Features:",
      "• 32-bit pixel art style",
      "• Multiple levels with increasing difficulty",
      "• Obstacles like sharp pointy objects that restart the level",
      "• Fruit collection mechanic in every level",
      "• Finish line to progress to the next level",
      "• Prefabs, scripts, and custom music integrated",
    ],
    technologies: ["Unity 2D", "C#", "Pixel Art", "Game Development"],
    status: "In Development",
    highlight:
      "Key Feature: A nostalgic 2D pixel art game with challenging levels and fruit collection mechanics.",
    videoUrl: "EMS/Videos/NatureHop_FruityAdventure.mp4", // Ensure correct path
  };

  return (
    <section id="project2" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ✅ Added "2nd Project" title */}
          <h2 className="text-3xl font-bold text-center mb-6">{project.title}</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
              <p className="text-blue-600 font-semibold mb-4">{project.highlight}</p>

              {/* ✅ Video Player */}
              <div className="mt-6 flex justify-center">
                <video
                  controls
                  width="1980"
                  height="1020"
                  className="w-full max-w-screen-xl h-auto rounded-lg shadow-lg"
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* ✅ Image Gallery */}
              <NatureHopGallery />

              <div className="mb-4 mt-6">
                <h4 className="text-xl font-semibold mb-3">Game Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className={
                        feature.startsWith("•")
                          ? "ml-4 text-gray-600"
                          : "font-semibold text-gray-800 mt-3"
                      }
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-3">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project2;
