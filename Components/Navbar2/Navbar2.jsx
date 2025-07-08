"use client";

import React, { useState } from "react";
import useStore from "@/Components/Store/Store";

const Navbar2 = () => {
  const { language } = useStore();
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title_en: "Home",
      title_np: "गृहपृष्ठ",
      href: "/Navbar",
      submenu: [],
    },
    {
      title_en: "About IRD",
      title_np: "आईआरडी बारे",
      href: "",
      submenu: [
        { title_en: "Our Mission", title_np: "हाम्रो लक्ष्य", href: "#" },
        { title_en: "Organizational Structure", title_np: "संगठनात्मक संरचना", href: "#" },
        { title_en: "Management Team", title_np: "प्रबन्धक टोली", href: "#" },
      ],
    },
    {
      title_en: "Policy/Strategy",
      title_np: "नीति/रणनीति",
      href: "",
      submenu: [
        { title_en: "Tax Policy", title_np: "कर नीति", href: "#" },
      ],
    },
    {
      title_en: "TAX LAWS",
      title_np: "कर कानून",
      href: "",
      submenu: [
        { title_en: "Income Tax Act", title_np: "आय कर ऐन", href: "#" },
      ],
    },
    {
      title_en: "Publication",
      title_np: "प्रकाशन",
      href: "",
      submenu: [
        { title_en: "Annual Reports", title_np: "वार्षिक प्रतिवेदनहरू", href: "#" },
      ],
    },
    {
      title_en: "Notice",
      title_np: "सूचना",
      href: "",
      submenu: [
        { title_en: "Latest Notices", title_np: "भर्खरको सूचना", href: "#" },
      ],
    },
    {
      title_en: "Offices",
      title_np: "कार्यालयहरू",
      href: "",
      submenu: [],
    },
    {
      title_en: "Contact Us",
      title_np: "सम्पर्क गर्नुहोस्",
      href: "",
      submenu: [],
    },
    {
      title_en: "Sanction List",
      title_np: "प्रतिबन्ध सूची",
      href: "",
      submenu: [],
    },
  ];

  return (
    <div className="w-full bg-sky-600 text-white text-sm font-semibold uppercase">
      <div className="w-full px-4">
        <nav className="w-full">
          <ul className="flex flex-wrap items-center h-10">
            {menuItems.map(({ title_en, title_np, href, submenu }) => (
              <li
                key={title_en}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(title_en)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={href}
                  className="flex items-center gap-1 px-6 h-10 leading-10 hover:bg-sky-700"
                >
                  {language === "English" ? title_en : title_np}
                  {submenu.length > 0 && <span className="text-xs select-none">▼</span>}
                </a>

                {submenu.length > 0 && openDropdown === title_en && (
                  <ul className="absolute top-full left-0 bg-sky-700 text-white min-w-max rounded shadow z-50">
                    {submenu.map(({ title_en, title_np, href }) => (
                      <li
                        key={title_en}
                        className="px-4 py-2 hover:bg-sky-800 whitespace-nowrap"
                      >
                        <a href={href}>
                          {language === "English" ? title_en : title_np}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
