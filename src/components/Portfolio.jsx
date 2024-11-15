import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import Image from '../assets/profile_1.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './styles.css';

// Importing 10 images for the carousel and gallery
import img1 from '../assets/one.jpeg';
import img2 from '../assets/two.jpeg';
import img3 from '../assets/three.jpeg';
// import img4 from '../assets/four.jpeg';
import img5 from '../assets/five.jpeg';
import img6 from '../assets/six.jpeg';
import img7 from '../assets/seven.jpeg';
import img8 from '../assets/eight.jpeg';
import img9 from '../assets/nine.jpeg';
import img10 from '../assets/about.jpeg';
import { useState } from 'react';

import project1Image from '../assets/projectImg/prj_1.png';
import project2Image from '../assets/projectImg/prj_2.png';
import project3Image from '../assets/projectImg/prj_3.png';
import project4Image from '../assets/projectImg/prj_4.png';
import project5Image from '../assets/projectImg/prj_5.png';
import project6Image from '../assets/projectImg/prj_6.png';
import project7Image from '../assets/projectImg/prj_7.png';
import project8Image from '../assets/projectImg/prj_8.png';
import project9Image from '../assets/projectImg/prj_9.png';

import instaImage1 from '../assets/projectImg/prj_10.png';
import Footer from './Footer';


// Animation Variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const floating = {
    hidden: { y: 0 },
    visible: {
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
};

export default function Portfolio() {

    const projects = [
        {
            id: 1,
            title: "Empowering Change: Government Awareness Campaign",
            description: "Featured as a lead in a government campaign aimed at raising awareness on crucial social issues. This project emphasized the importance of civic responsibility and was broadcasted across various digital and public platforms.",
            image: project1Image,
            link: "https://www.youtube.com/watch?v=LRcFdfrWBbw&ab_channel=AdityaChaudharyOfficial",
        },
        {
            id: 2,
            title: "Cinematic Magic: INOX & Wave Theatrical Ad",
            description: "Starred in a vibrant cinematic advertisement for INOX and Wave Cinemas, capturing the essence of the movie-going experience. This ad was shown across multiple theater screens, designed to enhance the excitement of movie lovers.",
            image: project2Image,
            link: "https://www.tureafilms.com/?wix-vod-video-id=d0257b27065a47b7bb43c172ac372fc0&wix-vod-comp-id=comp-m0jz5akm",
        },
        {
            id: 3,
            title: "Fun with Harsh Beniwal: A YouTube Sketch Series",
            description: "Collaborated with YouTube sensation Harsh Beniwal in a comedic sketch series that amassed a wide online audience. Played a key role that added to the lighthearted, relatable humor of the series.",
            image: project3Image,
            link: "https://www.youtube.com/watch?v=AhvWahoV8D8&ab_channel=HarshBeniwal",
        },
        {
            id: 4,
            title: "Drive in Style: Renault Triber Commercial",
            description: "Appeared in a car commercial for Renault Triber, showcasing the vehicle's style, versatility, and family-friendly features. The ad was crafted to resonate with urban families looking for the perfect combination of elegance and utility.",
            image: project4Image,
            link: "https://www.youtube.com/watch?v=8QZmDVjBzAw&ab_channel=JagranHiTech-Auto%26PersonalTech",
        },
        {
            id: 5,
            title: "Future-Ready Solutions: Redington Ad Campaign",
            description: "Acted in a digital ad for Redington, a leading tech solutions provider. The campaign highlighted the company's cutting-edge products and services, delivering a powerful message of innovation and connectivity.",
            image: project5Image,
            link: "https://www.youtube.com/watch?v=p9lYUBwRbE0&ab_channel=IntegrationMedia",
        },
        {
            id: 6,
            title: "Melody of Emotions: Parinda by Paradox",
            description: "Featured in the music video for Parinda, a song by Paradox, which beautifully captures the theme of love and freedom. The video combines stunning visuals with soulful music, bringing the song’s story to life in a way that resonates deeply with audiences.",
            image: project6Image,
            link: "https://www.youtube.com/watch?v=bPjaTcWHi-g&ab_channel=Panther0",
        },
        {
            id: 7,
            title: "Crunch: A Riveting Short Film",
            description: "Starred in Crunch, an intense short film exploring the intricacies of personal relationships and inner conflict. The film combines strong narrative with thought-provoking themes, making it a standout piece on the indie film circuit.",
            image: project7Image,
            link: "https://www.youtube.com/watch?v=VO4v2T8Sl3E&ab_channel=TRIPPIFILMS",
        },
        {
            id: 8,
            title: "Yes Madam: A Digital Ad for Modern Grooming",
            description: "Took on a lead role in Yes Madam, a digital advertisement focusing on grooming and personal care services at home. The ad is fun, fresh, and appeals to those looking for convenient.",
            image: project8Image,
            link: "https://www.instagram.com/p/C8MIQe1RQKw/?igsh=ZHoydGUxOTI3eWIz&img_index=1",
        },
        {
            id: 9,
            title: "Elegance Redefined: Malabar Jewelers Digital Ad",
            description: "Appeared in a digital campaign for Malabar Jewelers, highlighting the beauty and elegance of fine jewelry. This ad showcases intricate designs and luxury, capturing the attention of jewelry enthusiasts.",
            image: project9Image,
            link: "https://www.facebook.com/61564750303059/videos/unbreakable-trust-%E0%A4%85%E0%A4%9F%E0%A5%82%E0%A4%9F-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B8malabar-gold-and-diamonds/889144886483811/?rdid=eHIsFmUdR0QtvZzS",
        },

    ];

    const carouselImages = [img1, img2, img3, img5, img6, img7, img8, img9, img10];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + carouselImages.length) % carouselImages.length
        );
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <motion.header
                className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left p-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                {/* Profile Image */}
                <motion.div
                    className="responsive-container w-96 h-96 lg:w-[28rem] flex justify-center items-end lg:h-[28rem] sm:w-full sm:h-full rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0 mt-[5rem]"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={Image} alt="Noor" className="responsive-image mt-8 pt-20 md:w-full md:m-0 md:p-0 h-full mx-0 object-cover rounded-lg" />
                </motion.div>

                {/* Name and Intro Text */}
                <div className="flex flex-col md:mt-20 justify-center items-center md:items-start">
                    <motion.h1
                        className="text-8xl font-bold mb-4 text-white shadow-lg"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Noor
                    </motion.h1>

                    <motion.p
                        className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        A 21-year-old actress from Delhi, fluent in Punjabi, Hindi, and English. With featured roles in web series, movies, and theatrical ads, Noor's career is on the rise. She’s worked with brands like <strong>Image Bazaar</strong>, <strong>Yes Madam</strong>, and <strong>Sanfe</strong>, and appeared in major campaigns for <strong>INOX</strong>, <strong>Wave</strong>, and <strong>Max Cinema</strong>. Currently, she’s part of the hit show <span className="font-bold underline">Delhi Crime Season 3</span> and recently featured in Netflix’s <span className="font-bold underline">Fabulous Lives vs Bollywood Wives</span>. Noor has also completed a short film and a full-length feature for <strong>Jio Cinema</strong> (yet to be released).
                    </motion.p>
                </div>
            </motion.header>

            {/* Featured In Section */}
            <motion.section
                className="py-8 px-4 mt-[7rem] md:mt-0"
                animate="visible"
                variants={staggerContainer}
            >
                <h2 className="text-4xl font-bold mb-4 text-center">Featured In</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["Naadaniyaan", "Metro In Dino", "Daring Partner", "Children of Freedom", "Thug Life", "Fabulous Lives of Bollywood Wives", "Delhi Crime Season 3"].map((series, index) => (
                        <motion.div
                            key={index}
                            className="px-4 py-2 bg-gray-800 rounded-lg text-white text-center text-lg shadow-md"
                            variants={floating}
                        >
                            {series}
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* My Work Section */}
            <motion.section
                className="py-2 px-4"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <h2 className="text-4xl font-bold mb-8 text-center">My Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                className="bg-gray-800 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={project.image}
                                    alt={`Project ${project.id}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400">{project.description}</p>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </motion.section>

            {/* Instagram Works Section */}
            <motion.section
                className="py-8 px-4"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <h2 className="text-4xl font-bold mb-8 text-center">Instagram Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[
                        {
                            id: 1,
                            image: instaImage1,
                            description: "Signature Global South of Gurgaon",
                            link: "https://www.instagram.com/b4_realty/reel/C-iP_2ly05g/?igsh=MW54NmE4bG04eHc5cg%3D%3D"
                        },
                        // Add more items as needed
                    ].map((work) => (
                        <a
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                className="flex flex-col items-center space-y-4"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Circular Image */}
                                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                                    <img
                                        src={work.image}
                                        alt={`Instagram Work ${work.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Description */}
                                <div className="bg-gray-800 text-white text-center px-4 py-2 rounded-lg shadow-md">
                                    <p className="text-sm">{work.description}</p>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </motion.section>

            {/* Carousel Section */}
            <h2 className="text-4xl font-bold md:mb-6 text-center">Photo Gallery</h2>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mb-8"
                initialSlide={5}
            >
                {carouselImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Carousel ${index + 1}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Contact Section */}
            <Footer />
            {/* <motion.section
                className="py-16 px-4 bg-gray-800"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
                <div className="flex justify-center space-x-8">
                    <motion.a
                        href="https://www.instagram.com/oberoi_noor3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Instagram size={32} />
                    </motion.a>
                    <motion.a
                        href="mailto:varanpreetkaur@gmail.com"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Mail size={32} />
                    </motion.a>
                </div>
            </motion.section> */}
        </div>
    );
}
