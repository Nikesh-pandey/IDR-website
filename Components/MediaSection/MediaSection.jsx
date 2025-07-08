"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function MediaSection() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const username = "admin";
      const password = "admin"; // get auth from backend as needed
      const token = btoa(`${username}:${password}`);

      try {
        const photoRes = await axios.get(
          "http://10.13.174.81:8080/WaterTariffSystem-web/webresources/customer/organizationGallery/web/89",
          {
            headers: {
              Authorization: `Basic ${token}`,
              Accept: "application/json",
            },
          }
        );
        const items = photoRes.data.messageWithImg.map((item) => ({
          id: item.id,
          header: item.header,
          order: item.order,
          message: item.message.replace(/<\/?p>/g, ""),
          galleryUrls: item.galleryUrls,
        }));

        setGalleryItems(items);
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Failed to load gallery photos.");
        setGalleryItems([]);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading)
    return <div className="p-4 text-center">Loading gallery photos...</div>;

  if (error)
    return (
      <div className="p-4 text-center text-red-600 bg-red-100 rounded">{error}</div>
    );

  const firstThree = [...galleryItems];
  while (firstThree.length < 3) {
    firstThree.push(null);
  }

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">GALLERY</h1>

      <div className="max-w-6xl mx-auto px-4">
        {/* cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {firstThree.map((item, index) =>
            item ? (
              <li key={item.id}>
                <Link href={`/Gallery/${item.id}`} className="block">
                  <div
                    className="bg-white shadow rounded p-4 flex flex-col cursor-pointer hover:shadow-lg transition border border-transparent"
                    title="Click to see more data"
                  >
                    <h3 className="text-lg font-semibold text-red-600 mb-1">{item.header}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Order: {item.order}
                    </p>
                    {item.galleryUrls[0] ? (
                      <img
                        src={item.galleryUrls[0]}
                        alt={item.header}
                        className="w-full h-48 object-cover rounded mb-2"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-300 rounded mb-2 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                    <p className="text-gray-600 text-sm flex-grow truncate">{item.message}</p>
                    <p className="text-xs mt-2 text-gray-500">Images: {item.galleryUrls.length}</p>
                  </div>
                </Link>
              </li>
            ) : (
              <li
                key={`empty-${index}`}
                className="bg-white shadow rounded p-4 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300"
              >
                <p className="text-lg font-semibold mb-2">No Data</p>
                <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                  <span>No Image</span>
                </div>
                <p className="mt-2 text-sm">No info available</p>
              </li>
            )
          )}
        </ul>

        <p className="text-center text-gray-600">Click a card above to see more data</p>
      </div>
    </div>
  );
}
