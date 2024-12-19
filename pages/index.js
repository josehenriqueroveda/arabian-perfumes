import {
  LuGlobe,
  LuMenu,
  LuX,
  LuShoppingBag,
  LuChevronRight,
} from "react-icons/lu";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "app/utils/fetcher";
import "app/styles/globals.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const { data: products, error } = useSWR("/api/v1/products", fetcher);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.classList.add("animate-fade-in");
    }
  }, []);

  if (error)
    return (
      <div>
        <p className="text-red-400">Failed to load products: {error.message}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-black/95 text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center flex-col">
                <span className="text-2xl font-arabic">Arabian Perfumes</span>
                <span className="text-sm font-arabic">العطور العربية</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {["Home", "For Men", "For Women", "About", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      className="hover:text-gold transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  ),
                )}
                <button
                  onClick={() =>
                    setLanguage(language === "en" ? "pt-br" : "en")
                  }
                  className="flex items-center hover:text-gold transition-colors"
                >
                  <LuGlobe className="w-5 h-5 mr-1" />
                  {language.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
