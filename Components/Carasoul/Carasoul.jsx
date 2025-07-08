// "use client";
// import React, { useState, useEffect } from "react";

// const ImageCarousel = () => {
//     const [images, setImages] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Fetch images from API
//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetch("http://localhost:8000/api/images"); // replace with your API
//                 const data = await response.json();
//                 setImages(data); // assuming data = ["url1", "url2", "url3"]
//             } catch (error) {
//                 console.error("Error fetching images:", error);
//             }
//         };

//         fetchImages();
//     }, []);

//     const goToPrev = () => {
//         const isFirst = currentIndex === 0;
//         setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
//     };

//     const goToNext = () => {
//         const isLast = currentIndex === images.length - 1;
//         setCurrentIndex(isLast ? 0 : currentIndex + 1);
//     };

//     if (images.length === 0) {
//         return <p className="text-center">Loading images...</p>;
//     }

//     return (
//         <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
//             <img
//                 src={images[currentIndex]}
//                 alt={`Image ${currentIndex + 1}`}
//                 className="w-full h-64 object-cover transition duration-500"
//             />
//             <button
//                 onClick={goToPrev}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
//             >
//                 &#10094;
//             </button>
//             <button
//                 onClick={goToNext}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// };

// export default ImageCarousel;



"use client";
import React, { useState } from "react";

const images = [
    "/public/photo-1630886419629-1669c4246d49.avif", // update with your actual image paths
    "/img2.jpg",
    "/img3.jpg",
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        const isFirst = currentIndex === 0;
        setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        const isLast = currentIndex === images.length - 1;
        setCurrentIndex(isLast ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-64 object-cover transition duration-500"
            />
            <button
                onClick={goToPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;
