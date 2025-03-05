import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

function Projects() {
  const project = {
    title: "DualSys - Integrated EMS & POS System",
    description:
      "A comprehensive system that combines Employee Management (EMS) and Point of Sale (POS) functionality. The system operates through a local network connection via modem/router, enabling seamless communication between modules without requiring internet access.",
    features: [
      "EMS Features:",
      "• Employee Information Management",
      "• Department Organization",
      "• Salary Management & Tracking",
      "• Attendance System Integration",
      "• Multi-shift Support (2 shifts/day)",
      "• Real-time Data Synchronization",

      "POS Features:",
      "• Product Management with Barcode Generation",
      "• Category Management",
      "• Inventory Tracking",
      "• User Management (Admin/Cashier roles)",
      "• Sales Reports (Daily/Weekly/Monthly/Yearly)",
      "• Stock Alerts and Notifications",

      "Integration Features:",
      "• Seamless data sync between EMS and POS",
      "• Automated salary updates based on attendance",
      "• Real-time employee status tracking",
      "• Unified reporting system",
      "• Mobile-friendly barcode scanning",
    ],
    technologies: [".Net", "C#", "MySQL", "Network Programming", "Zxing", "AForge"],
    status: "In Development",
    highlight:
      "Key Integration: Advanced employee management system with real-time synchronization to POS for comprehensive business operations.",
    videoUrl: "EMS/Videos/DUALSYS.mp4", // ✅ Added video URL
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
              <div className="mb-6">
                <p className="text-blue-600 font-semibold mb-4">{project.highlight}</p>
              </div>

              {/* ✅ Video Section Added */}
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
              <ImageGallery />

              <div className="mb-6 mt-8">
                <h4 className="text-xl font-semibold mb-4">System Features</h4>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className={
                        feature.startsWith("•")
                          ? "ml-4 text-gray-600"
                          : "font-semibold text-gray-800 mt-4"
                      }
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
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

export default Projects;
