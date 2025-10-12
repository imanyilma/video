import React, { useState } from 'react';
import logo from '../image/logo4.png';
import background from '../image/3rd.jpg'; // background image
import image from '../image/last.png'; // foreground image

function Header() {
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'products', title: 'Products' },
    { id: 'skin type', title: 'skin type' },
    { id: 'blog', title: 'Blog' },
    { id: 'contact', title: 'Contact' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🌸 NAVBAR */}
      <div className="mx-auto px-4 sm:px-8 flex items-center justify-between h-20 relative z-10 ">
    {/* Logo + Brand */}
    {/* 🛑 FIX: Changed -space-x-5 to a positive space-x-3 for proper separation */}
   {/* 🌸 Logo + Brand (Responsive) */}
<div className="flex items-center">
  <img
    src={logo}
    alt="Company Logo"
    className="
      w-25 h-25 md:w-40 md:h-40 lg:w-42 lg:h-42  /* 🔥 Responsive sizes */
      object-contain 
      -mr-6 mt-3 
    "
  />
  <p
    className="
      text-white font-bold font-brand
      text-3xl md:text-4xl lg:text-5xl   /* 🔥 Scales down smoothly */
    "
  >
    pureglow
  </p>
</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-medium text-black hover:text-pink-400 transition"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons text-pink-500 text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 border-t border-pink-100 px-4 py-4 absolute top-20 left-0 w-full z-10">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-medium text-gray-800 hover:text-pink-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ✨ HERO TEXT CONTENT */}
<div
  className="
    absolute 
    top-20 left-4               /* 🔹 Much higher for mobile screens */
    sm:top-28 sm:left-6         /* 🔹 Slightly lower on small tablets */
    md:top-36 md:left-10        /* 🔹 Original position for larger screens */
    z-10 flex flex-col items-start 
    space-y-4 max-w-xl sm:max-w-2xl 
    px-3 sm:px-6 md:px-10
  "
>
  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white whitespace-nowrap">
    Natural Glow <span className="text-pink-700">Vibes</span>
  </h1>

  <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-3">
    Experience the power of pure ingredients, thoughtfully blended to bring real results and unveil the natural radiance your skin deserves.
  </p>

  <button
    className="
      bg-pink-500 hover:bg-pink-600 
      text-white font-semibold 
      text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8 
      rounded-full shadow-lg hover:shadow-xl 
      transition-all duration-300 ease-in-out
    "
  >
    Discover Our Products
  </button>

  {/* Trust Icons */}
  <div className="flex flex-col items-start justify-center text-gray-100 text-xs sm:text-sm mt-3 sm:mt-4">
    <div className="flex -space-x-2 mb-2">
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center">🔬</span>
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center">🐰</span>
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center">✨</span>
    </div>
    <p className="font-medium">
      Dermatologist Approved. Cruelty-Free. Real Results.
    </p>
  </div>
</div>


      {/* 🌅 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          filter: 'grayscale(30%) brightness(90%) contrast(120%) hue-rotate(-20deg)',
        }}
      ></div>

      {/* 🪞 FOREGROUND IMAGE */}
    <div className="absolute -bottom-60 -right-20">
  <img
    src={image}
    alt="Product"
    className="
      max-w-4xl
      w-full h-auto
      object-cover
      scale-170   /* 🔥 Makes her bigger without moving position */
      origin-bottom-right /* Keeps scaling anchored to bottom-right */
      transition-transform duration-500 ease-in-out
      
    "
  />
</div>




    </div>
  );
}

export default Header;
