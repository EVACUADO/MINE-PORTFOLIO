import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "cevacuado@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=cevacuado@gmail.com" // Direct Gmail link
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "09664170540",
      link: "https://wa.me/639664170540" // Direct WhatsApp link
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
      value: "Clark Evacuado Gil",
      link: "https://www.facebook.com/clarkevacuado.gil" // Facebook profile link
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security for external links
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.label}</h3>
                <p className="text-gray-600 text-center">{item.value}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;