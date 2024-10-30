import React from 'react';
import { Footer } from 'flowbite-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <Footer container={true} className="bg-gray-800 text-white py-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start md:text-left px-8">
          <Footer.Brand href="#">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="RushJob Logo" />
            <span className="text-xl font-semibold">RushJob</span>
          </Footer.Brand>
          <p className="mt-4 text-center md:text-left">
            Find your dream job and advance your career with ease. by Yazid Aqsa Raisnaldi
          </p>
        </div>
        {/* Social Media Links */}
        <div className="flex flex-col items-center md:text-left px-8 py-9">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Legal Section */}
        <div className="text-center md:text-right px-5 py-9">
          <p>&copy; 2024 RushJob. All rights reserved.</p>
          <p>
            <a href="https://yourwebsite.com/privacy-policy" className="text-white hover:text-gray-400">
              Privacy Policy
            </a> |{' '}
            <a href="https://yourwebsite.com/terms-of-service" className="text-white hover:text-gray-400">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;