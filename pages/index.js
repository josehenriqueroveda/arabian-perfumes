import { LuGlobe, LuMenu, LuX, LuChevronRight, LuMail } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "app/utils/fetcher";
import Image from "next/image";
import Loader from "app/components/Loader";
import "app/styles/globals.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const { data, error, isLoading } = useSWR("/api/v1/products", fetcher);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.classList.add("animate-fade-in");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error)
    return (
      <div>
        <p className="text-red-400">Failed to load products: {error.message}</p>
      </div>
    );

  const products = data || { male: [], female: [] };

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
                {[
                  { name: "Home", url: "#" },
                  { name: "For Men", url: "#for-men" },
                  { name: "For Women", url: "#for-women" },
                  { name: "About", url: "#" },
                  { name: "Contact", url: "#" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="hover:text-yellow-500 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
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
              {[
                { name: "Home", url: "#" },
                { name: "For Men", url: "#for-men" },
                { name: "For Women", url: "#for-women" },
                { name: "About", url: "#" },
                { name: "Contact", url: "#" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="block px-3 py-2 hover:text-yellow-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
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

      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-arabic text-center mb-4">
            Explore Our Collection
          </h2>

          <section id="for-men">
            <h3 className="text-3xl font-arabic text-center mb-10 mt-10 text-yellow-500">
              For Men
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.male.map((product) => (
                <div key={product.id} className="text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <a
                    href={product.url}
                    className="text-gold hover:underline mt-2 block"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="for-women">
            <h3 className="text-3xl font-arabic text-center mb-10 mt-10 text-yellow-500">
              For Her
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.female.map((product) => (
                <div key={product.id} className="text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <a
                    href={product.url}
                    className="text-gold hover:underline mt-2 block"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="flex items-center flex-col">
              <span className="text-2xl font-arabic">Arabian Perfumes</span>
              <span className="text-sm font-arabic">العطور العربية</span>
              <p className="text-gray-400 mt-4 text-center">
                Luxury Arabian perfumes for the discerning customer
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a className="text-gray-400 hover:text-gold transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gold transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gold transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gold transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li>123 Luxury Lane</li>
                <li>Dubai, UAE</li>
                <li>+971 123 456 789</li>
                <li>info@arabianperfumes.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400" mb-4>
                Subscribe for exclusive offers and updates
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your best email"
                  className="flex-1 px-4 py-2 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-500/90 transition-colors"
                >
                  <LuMail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="text-gray-400 mb-4 text-sm"
              href="https://github.com/josehenriqueroveda"
            >
              Developed by Jose Henrique Roveda
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
