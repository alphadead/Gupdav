import React, { useState } from 'react';
import { FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    // State to store email input value
    const [email, setEmail] = useState<string>('');

    // Function to handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Function to handle form submission
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Subscribed with email:', email);
        setEmail(''); // Reset the input after submitting
    };

    return (
        <footer className="bg-[#141414] text-white py-12 boreder-transparent rounded-3xl">
            {/* Upper Section */}
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        <span className='text-[#7A1CAC]'>Gupdav</span> comprises a dynamic duo: a creative mastermind and a business scaling strategist. Together with their expert team, they specialize in crafting captivating online personas for clients. While the creative mind brings innovative ideas to life, the strategist focuses on scaling business operations, driving revenue growth, and generating impactful ideas for expansion.
                    </p>
                </div>

                {/* Quick Links Section (with Subscribe Button) */}
                <div className="md:ml-auto">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#hero-section" className="hover:text-[#7A1CAC] transition-colors">Home</a></li>
                        <li><a href="#prices" className="hover:text-[#7A1CAC] transition-colors">Services</a></li>
                        <li><a href="https://calendly.com/gupdav/improve-your-social-presence" className="hover:text-[#7A1CAC] transition-colors">Contact Us</a></li>
                    </ul>

                    {/* Subscribe Button at the Bottom */}
                    <div className="mt-6">
                        <a
                            href="https://newsletter.thegupdav.com/"
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // Improves security when using target="_blank"
                            className="bg-[#7A1CAC] hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className="container mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Gupdav. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="http://x.com/@gupdav" className="text-white hover:text-[#7A1CAC] transition-colors"><FaTwitter /></a>
                    <a href="http://youtube.com/@thegupdav" className="text-white hover:text-[#7A1CAC] transition-colors"><FaYoutube /></a>
                    <a href="https://www.linkedin.com/company/gupdav/" className="text-white hover:text-[#7A1CAC] transition-colors"><FaLinkedinIn /></a>
                    <a href="http://instagram.com/gupdav" className="text-white hover:text-[#7A1CAC] transition-colors"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
