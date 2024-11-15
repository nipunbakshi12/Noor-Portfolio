import React from 'react';
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
            <div className="container mx-auto px-6 md:px-12">
                {/* Upper Section: Brand & Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    {/* Brand/Name */}
                    <div className="text-2xl font-semibold text-center md:text-left mb-4 md:mb-0">
                        Get in touch
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition duration-200"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition duration-200"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Lower Section: Social Icons */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Social Icons */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a
                            href="https://www.instagram.com/oberoi_noor3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition duration-200"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href="mailto:varanpreetkaur@gmail.com"
                            className="hover:text-blue-400 transition duration-200"
                        >
                            <FaEnvelope size={28} />
                        </a>

                    </div>

                    {/* Copyright */}
                    <div className="text-gray-400 text-sm text-center md:text-right">
                        © 2024 Noor. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;