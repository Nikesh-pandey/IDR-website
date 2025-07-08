'use client'
import React from "react";
import { useState } from "react";
const Footer = () => {
    const [lat, setLat] = useState(27.7172);
    const [lng, setLng] = useState(85.3240);

    const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
    return (
        <footer className="bg-blue-900 text-white py-10 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b border-blue-300 pb-1">Contact Us</h3>
                    <p>Dang Supply Management Board</p>
                    <p>📞 9876543210</p>
                    <p>✉️ email@gmail.com</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b border-blue-300 pb-1">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Vacancy</a></li>
                        <li><a href="#" className="hover:underline">Downloads</a></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b border-blue-300 pb-1">Useful Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Ministry of Water Supply</a></li>
                        <li><a href="#" className="hover:underline">Dharan SubMetropolitan City</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu Valley Water Supply Management Board</a></li>
                        <li><a href="#" className="hover:underline">Hetauda Water Supply Management Board</a></li>
                    </ul>
                </div>

                {/* Map Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b border-blue-300 pb-1">Map</h3>
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="200"
                        className="rounded"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="text-center text-sm mt-10 border-t border-blue-700 pt-4">
                © 2025 Diyalo Technologies. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
