'use client';
import React, { useState, useEffect } from 'react';
import { Cog, Droplet, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OilTech Solutions</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Image Slider */}
      <ImageSlider />
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Revolutionizing the Oil Industry</h2>
          <p className="text-xl mb-8">Precision-engineered solutions for your mechanization needs</p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Learn More
          </button>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            OilTech Solutions specializes in mechanizing pieces for the oil industry. With cutting-edge technology and years of expertise, we deliver innovative solutions that enhance efficiency and productivity in oil extraction and processing.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Cog className="w-12 h-12 text-blue-500" />}
              title="Custom Mechanization"
              description="Tailored mechanical solutions for your specific oil industry needs."
            />
            <ServiceCard 
              icon={<Droplet className="w-12 h-12 text-blue-500" />}
              title="Oil Extraction Optimization"
              description="Enhance your extraction processes with our advanced mechanization techniques."
            />
            <ServiceCard 
              icon={<Wrench className="w-12 h-12 text-blue-500" />}
              title="Maintenance & Support"
              description="Comprehensive maintenance and support services to keep your operations running smoothly."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 OilTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ImageSlider: React.FC = () => {
  const images = [
    "products/1473809-00-A_1_2000.jpg",
    "products/9877034-00-A_2.jpg",
    "products/8765100-00-A_1.jpg",
    "products/8764766-00-A_2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default LandingPage;