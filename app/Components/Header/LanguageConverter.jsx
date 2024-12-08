"use client";

import goToRoute from "@/utils/goToRoute";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageConverter() {
  const [dropdown, setDropdown] = useState(false);
  const { lang } = useParams();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState(lang);
  const router = useRouter();

  let locales = ["en", "bn"];
  const url = locales.find((local) => local === pathname.split("/")[1]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSetLang = (lang) => {
    goToRoute(pathname.split(url)[1], lang);
    setSelectedLang(lang);
    setDropdown(false);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2 ring-1 ring-gray-500 p-1 rounded-full"
          onClick={toggleDropdown}
        >
          <Image
            width={40}
            height={40}
            className="max-w-8"
            src={`/assets/images/${selectedLang}.png`}
            alt={selectedLang}
          />
          <span className="mr-1">
            {selectedLang === "bn"
              ? "Bangla"
              : selectedLang === "en"
              ? "English"
              : "error"}
          </span>
        </button>

        {dropdown && (
          <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-color-bg p-2 z-10 shadow-lg">
            <li
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-color-gray"
              onClick={() => handleSetLang("bn")}
            >
              <Image
                width={40}
                height={40}
                className="max-w-8"
                src="/assets/images/bd.png"
                alt="bangla"
              />
              Bangla
            </li>
            <li
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-color-gray"
              onClick={() => handleSetLang("en")}
            >
              <Image
                width={40}
                height={40}
                className="max-w-8"
                src="/assets/images/usa.png"
                alt="bangla"
              />
              English
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
