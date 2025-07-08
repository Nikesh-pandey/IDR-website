"use client";
import React from "react";
import {
  FaServer, FaCoins, FaUniversity, FaUserSecret, FaStar,
  FaUser, FaInfoCircle
} from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import useStore from "@/Components/Store/Store"; 
import Link from "next/link";

const items = [
  {
    icon: <FaServer size={30} />,
    label: { en: "Inter-Charge", np: "अन्तः शुल्क" },
    href: "/inter-charge",
  },
  {
    icon: <FaCoins size={30} />,
    label: { en: "Electronic Service Tax", np: "विद्युतीय सेवा कर" },
    href: "/electronic-service-tax",
  },
  {
    icon: <FaUniversity size={30} />,
    label: { en: "NGO", np: "गैर सरकारी संस्था" },
    href: "/ngo",
  },
  {
    icon: <FaUserSecret size={30} />,
    label: { en: "Business Location", np: "व्यवसायीक स्था.ले.न" },
    href: "/business-location",
  },
  {
    icon: <FaStar size={30} />,
    label: { en: "Diplomatic", np: "कूटनीतिक" },
    href: "/diplomatic",
  },
  {
    icon: <FaUser size={30} />,
    label: { en: "Personal Location", np: "व्यक्तिगत स्था.ले.न" },
    href: "/personal-location",
  },
  {
    icon: <FaInfoCircle size={30} />,
    label: { en: "TDS", np: "टि.डि.एस" },
    href: "/tds",
  },
  {
    icon: <AiOutlinePercentage size={30} />,
    label: { en: "VAT", np: "मू. अ. कर" },
    href: "/vat",
  },
];

const SpecialSectorsGrid = () => {
  const { language } = useStore();

  return (
    <div className="p-10 ">
      <h2 className="text-xl font-bold mb-4">
        {language === "English" ? "Special Sectors" : "खास क्षेत्र"}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className="flex items-center justify-center space-x-4 bg-sky-600 text-white rounded-lg px-4 py-2 shadow hover:bg-sky-700 transition"
          >
            {item.icon}
            <span className="text-lg font-semibold">
              {language === "English" ? item.label.en : item.label.np}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialSectorsGrid;
