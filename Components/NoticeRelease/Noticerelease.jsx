"use client"
import React, { useEffect, useState } from "react";
import useStore from "../Store/Store";

// Format ISO date
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();
  return { day, month, year };
};

// Reusable section with tabs
const TabbedSection = ({ title, icon, fetchData }) => {
  const { language } = useStore();
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);



  useEffect(() => {
    const load = async () => {
      const res = await fetchData();
      setTabs(res);
      setActiveTab(res[0]?.key);
    };
    load();
  }, [fetchData]);


  return (
    <div className="bg-white border rounded shadow w-full mb-6">
      <div className="text-red-600 text-lg font-bold px-4 pt-4 pb-2 border-b">
        {icon} {title}
      </div>
      <div className="flex border-b px-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 px-3 text-sm font-semibold border-b-2 ${activeTab === tab.key
              ? "border-red-500 text-red-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
          >
            {tab.icon} {tab.label[language === "English" ? "en" : "np"]}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs
          .find((t) => t.key === activeTab)
          ?.items.slice(0, 4)
          .map((item, idx) => {
            const { day, month, year } = formatDate(item.date);
            return (
              <div key={idx} className="flex gap-3 mb-4">
                <div className="bg-sky-700 text-white text-center px-2 py-1 rounded w-[50px]">
                  <div className="text-xs font-bold">{day}</div>
                  <div className="text-xs">{month}</div>
                  <div className="text-[10px]">{year}</div>
                </div>
                <div className="text-sm text-gray-800 leading-snug">
                  {item.title[language === "English" ? "en" : "np"]}
                </div>
              </div>
            );
          })}
        {tabs.find((t) => t.key === activeTab)?.items.length > 4 && (
          <div className="text-right">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              {language === "English" ? "View All" : "सबै हेर्नुहोस्"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable update section
const CurrentUpdates = ({ fetchUpdates }) => {
  const { language } = useStore();
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchUpdates().then(setUpdates);
  }, [fetchUpdates]);

  return (
    <div className="bg-gray-100 rounded shadow w-full lg:w-1/3">
      <div className="bg-gray-300 text-gray-800 font-bold px-4 py-2">
        {language === "English" ? "Current Updates" : "हालका अपडेटहरू"}
      </div>
      <div className="p-4 space-y-3">
        {updates.slice(0, 4).map((item, idx) => {
          const { day, month, year } = formatDate(item.date);
          return (
            <div key={idx} className="flex gap-3">
              <div className="bg-sky-700 text-white text-center px-2 py-1 rounded w-[50px]">
                <div className="text-xs font-bold">{day}</div>
                <div className="text-xs">{month}</div>
                <div className="text-[10px]">{year}</div>
              </div>
              <div className="text-sm text-gray-800 leading-snug">
                {item.title[language === "English" ? "en" : "np"]}
              </div>
            </div>
          );
        })}
        {updates.length > 4 && (
          <div className="text-right">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              {language === "English" ? "View All" : "सबै हेर्नुहोस्"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
const mockFetchNotices = async () => [
  {
    key: "notice",
    label: { en: "Notice", np: "सूचना" },
    icon: "📌",
    items: [
      {
        date: "2025-06-16",
        title: { en: "Amendment Notice", np: "बोलपत्र संशोधनको सूचना" },
      },
    ],
  },
  {
    key: "press",
    label: { en: "Press Release", np: "प्रेस विज्ञप्ति" },
    icon: "📰",
    items: [],
  },
];

const mockFetchUpdates = async () => [
  {
    date: "2025-06-16",
    title: { en: "Amendment Notice", np: "बोलपत्र संशोधनको सूचना" },
  },
  {
    date: "2025-06-05",
    title: {
      en: "Finance Bill Summary",
      np: "आर्थिक विधेयक संक्षेप",
    },
  },
];


///


const mockFetchPublications = async () => [
  {
    key: "annual",
    label: { en: "Annual Report", np: "वार्षिक प्रतिवेदन" },
    icon: "📄",
    items: [
      {
        date: "2024-11-24",
        title: { en: "Annual Report 2080-81", np: "वार्षिक प्रतिवेदन २०८०/८१" },
      },
    ],
  },
  {
    key: "tax",
    label: { en: "Tax Bulletin", np: "कर बुलेटिन" },
    icon: "📑",
    items: [],
  },
];

const mockFetchRules = async () => [
  {
    key: "acts",
    label: { en: "Acts", np: "ऐन" },
    icon: "📘",
    items: [
      {
        date: "2023-09-13",
        title: {
          en: "Excise Act, 2058",
          np: "अन्तःशुल्क ऐन, २०५८ (आर्थिक ऐन, २०८० को संशोधन सहित)",
        },
      },
    ],
  },
  {
    key: "rules",
    label: { en: "Rules", np: "नियम" },
    icon: "📙",
    items: [],
  },
];

const mockFetchPolicy = async () => [
  {
    key: "strategy",
    label: { en: "Strategy Plan", np: "रणनीति योजना" },
    icon: "📋",
    items: [
      {
        date: "2020-09-04",
        title: {
          en: "Reform Plan 2018/19–2020/21",
          np: "रिफर्म योजना २०१८/१९–२०२०/२१",
        },
      },
    ],
  },
  {
    key: "reform",
    label: { en: "Reform Plan", np: "सुधार योजना" },
    icon: "🔧",
    items: [],
  },
];



// MAIN COMBINED COMPONENT
const CombinedSections = () => {
  return (
    <>


      <div className="space-y-6">
        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TabbedSection
            title="📌 Notices"
            icon=""
            fetchData={mockFetchNotices}
          />
          <TabbedSection
            title="📚 Publications"
            icon=""
            fetchData={mockFetchPublications}
          />
          <TabbedSection
            title="📘 Rules & Regulations"
            icon=""
            fetchData={mockFetchRules}
          />
        </div>

        {/* Bottom row: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TabbedSection
            title="📋 Policy / Strategy"
            icon=""
            fetchData={mockFetchPolicy}
          />
          <CurrentUpdates fetchUpdates={mockFetchUpdates} />
        </div>
      </div>

    </>
  );
};

export default CombinedSections;
