import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSystem, setActiveSystem] = useState('pos');

  const systemScreenshots = {
    ems: [
      {
        url: "EMS/Employee Form.png",
        title: "Employee Management",
        description: "Complete employee profile management with department assignment"
      },
      {
        url: "EMS/SalaryForm.png",
        title: "Salary Management",
        description: "Comprehensive salary tracking and management system"
      },
      {
        url: "EMS/Department Form.png",
        title: "Department Management",
        description: "Department organization and employee assignment"
      },
    ],
    pos: [
      {
        url: "EMS/POS/CashierDashboardForm.png",
        title: "Admin Dashboard",
        description: "Overview of users, customers, daily income, and total revenue"
      },
      {
        url: "EMS/POS/AddUser.png",
        title: "User Management",
        description: "Add and manage users with role-based access control"
      },
      {
        url: "EMS/POS/AddCategories.png",
        title: "Product Categories",
        description: "Organize products into categories for better management"
      },
      {
        url: "EMS/POS/Admin Add Product.png",
        title: "Product Management",
        description: "Add and manage products with barcode generation"
      },
      {
        url: "EMS/POS/CustomerAdmin.png",
        title: "Customer Transactions",
        description: "Track customer orders and payment details"
      },
      {
        url: "EMS/POS/ReportForm.png",
        title: "Sales Reports",
        description: "Comprehensive reporting with weekly, monthly, and yearly views"
      },
      {
        url: "EMS/POS/Form1.png",
        title: "Login Interface",
        description: "Secure authentication for system access"
      },
      {
        url: "EMS/POS/attendance log.png",
        title: "Attendance System",
        description: "Employee clock in/out interface"
      }
    ]
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveSystem('ems')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeSystem === 'ems'
              ? 'bg-maroon-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          EMS Screenshots
        </button>
        <button
          onClick={() => setActiveSystem('pos')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeSystem === 'pos'
              ? 'bg-maroon-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          POS Screenshots
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {systemScreenshots[activeSystem].map((image, index) => (
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

export default ImageGallery;
