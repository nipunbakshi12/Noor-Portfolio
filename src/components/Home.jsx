import React from 'react';
import { FaSnapchat, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import profile from '../assets/profile_1.jpeg'

const Home = () => {
    return (
        <div className="home-container">
            <motion.div
                className="photo-section"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="window-frame">
                    <img src={profile} />
                </div>
            </motion.div>

            <motion.div
                className="info-section"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="actress-name">Noor</h1>
                <p className="designation">Actress</p>

                <motion.div
                    className="social-media-icons"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="https://www.instagram.com/oberoi_noor3/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/@Noorvlogs030" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
