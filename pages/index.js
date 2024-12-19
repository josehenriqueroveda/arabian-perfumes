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
                      className="hover:text-yellow-500 transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  ),
                )}
                <button
                  onClick={() =>
                    setLanguage(language === "en" ? "pt-br" : "en")
                  }
                  className="flex items-center hover:text-yellow-500 transition-colors"
                >
                  <LuGlobe className="w-5 h-5 mr-1" />
                  {language.toUpperCase()}
                </button>
              </div>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <LuX className="w-6 h-6" />
              ) : (
                <LuMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "For Men", "For Women", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    className="block px-3 py-2 hover:text-yellow-500 transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
              <button
                onClick={() => setLanguage(language === "en" ? "pt-br" : "en")}
                className="flex items-center px-3 py-2 hover:text-yellow-500 transition-colors"
              >
                <LuGlobe className="w-5 h-5 mr-1" />
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="hero relative h-screen bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.nightcafe.studio/jobs/Xrsk9sHrYYXvt47RtXIX/Xrsk9sHrYYXvt47RtXIX--1--hfaf1.jpg?v=1730154999&width=1000?auto=format&fit=crop&w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-arabic mb-6">
              Discover Luxury Arabian Perfumes
            </h1>
            <p className="text-xl mb-8">
              Experience the essence of the Middle East with our exclusive
              collection of premium fragrances
            </p>
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors"
            >
              Explore Collection
              <LuChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
