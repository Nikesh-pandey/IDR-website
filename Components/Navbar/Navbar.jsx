"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import useStore from "@/Components/Store/Store";

export default function Navbar() {
  const { language, setLanguage } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isNepali = language === "Nepali";

  return (
    <div className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between relative">
      {/* Left: Logo + Gov Text */}
      <Link href="/" className="flex items-center space-x-4">
        <img src="/1168015708.png" alt="Gov Logo" className="h-16" />
        <div className="text-sky-700 leading-tight">
          <h1 className="text-md font-semibold">नेपाल सरकार</h1>
          <h2 className="text-sm">अर्थ मन्त्रालय</h2>
          <h3 className="text-lg font-bold">आन्तरिक राजस्व विभाग</h3>
        </div>
      </Link>

      {/* Right: Language Toggle, Search, Menu */}
      <div className="flex items-center space-x-4">
        {/* Language Toggle */}
        <div className="flex space-x-2 text-sm font-medium">
          <button
            onClick={() => setLanguage("Nepali")}
            className={`flex items-center px-3 py-1 rounded-sm border ${isNepali
              ? "bg-sky-700 text-white"
              : "border-gray-300 text-black"
              } hover:bg-blue-200`}
          >
            <img
              src="/Flags/Flag_of_Nepal.svg"
              alt="Nepali Flag"
              className="w-5 h-5 mr-2"
            />
            नेपाली
          </button>
          <button
            onClick={() => setLanguage("English")}
            className={`flex items-center px-3 py-1 rounded-sm border ${!isNepali
              ? "bg-sky-700 text-white"
              : "border-gray-300 text-black"
              } hover:bg-blue-200`}
          >
            <img
              src="/flags/Flag_of_the_United_States.svg"
              alt="US Flag"
              className="w-5 h-5 mr-2"
            />
            ENGLISH
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded h-8 pl-3 pr-8 text-sm"

          />
          <Search className="absolute right-2 top-1.5 h-4 w-4 text-blue-600" />
        </div>

        {/* Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>

          {menuOpen && (
            <div className="absolute top-10 right-0 bg-white border shadow-md rounded-md z-50 w-40">
              <Link
                href="/officer-portal"
                className="block px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold text-sm"
              >
                OFFICER PORTAL
              </Link>
              <Link
                href="/ird-mail"
                className="block px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold text-sm"
              >
                IRD MAIL
              </Link>
              <Link
                href="/archives"
                className="block px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold text-sm"
              >
                ARCHIVES
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
