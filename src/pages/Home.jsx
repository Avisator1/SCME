import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col relative">
      
      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-grow transition-all duration-300 z-10">
        
        {/* NAVBAR */}
        <header className="w-full -mt-5">
          <div className="max-w-[95rem] mx-auto flex items-center justify-between px-10 py-10">

            {/* LEFT — MENU */}
            <button 
              aria-label="Menu"
              className='cursor-pointer'
              onClick={toggleSidebar}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 64 64"
                className="w-7 h-7 stroke-white"
              >
                <path d="M7 15h51M7 32h43M7 49h51" strokeWidth="3" />
              </svg>
            </button>

            {/* CENTER — LOGO */}
            <h1 className="text-4xl regular">
              SCME
            </h1>

            {/* RIGHT — CART */}
            <button 
              aria-label="Cart"
              onClick={toggleCart}
              className='cursor-pointer'            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 64 64"
                className="w-7 h-7 stroke-white"
              >
                <g fill="none" strokeWidth="3">
                  <path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path>
                  <path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path>
                </g>
              </svg>
            </button>

          </div>
        </header>

        {/* CENTER CONTENT */}
        <div className="flex-grow flex items-center justify-center">
          <p className=" text-sm text-white">
            SITE LOCKED
          </p>
        </div>
      </div>

      {/* OVERLAY - DARKER TO PROPERLY DIM BACKGROUND */}
     {(isSidebarOpen || isCartOpen) && (
  <div 
    className="fixed inset-0 bg-black opacity-50 z-30"
    onClick={() => {
      closeSidebar();
      closeCart();
    }}
  />
)}

      {/* MENU SIDEBAR - LEFT */}
      <div 
        className={`fixed top-0 left-0 h-full w-96 bg-white transform transition-transform duration-300 ease-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-2xl regular text-black">SCME</h1>
        </div>

        {/* CLOSE BUTTON */}
        <button 
          onClick={closeSidebar}
          aria-label="Close menu"
          className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg 
            className="w-6 h-6 stroke-black" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* SOCIAL LINKS SECTION */}
        <div className="p-8">
          <h3 className="text-xs uppercase tracking-widest text-black regular mb-8">Follow Us</h3>
          
          <div className="space-y-6">
            {/* INSTAGRAM LINK */}
            <a 
              href="https://www.instagram.com/scme/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-200" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-black regular text-lg group-hover:text-gray-700 transition-colors">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* CART SIDEBAR - RIGHT */}
      <div 
        className={`fixed top-0 right-0 h-full w-[450px] bg-white transform transition-transform duration-300 ease-out z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* CART HEADER */}
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-2xl regular text-black">YOUR CART</h1>
        </div>

        {/* CLOSE BUTTON */}
        <button 
          onClick={closeCart}
          aria-label="Close cart"
          className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg 
            className="w-6 h-6 stroke-black" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* CART CONTENT */}
        <div className="p-8">
          <div className="flex flex-col items-center justify-center h-64">
            <svg 
              className="w-16 h-16 text-gray-400 mb-4" 
              viewBox="0 0 64 64" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <g>
                <path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path>
                <path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path>
              </g>
            </svg>
            <p className="text-gray-600 regular text-lg text-center">
              your cart is currently empty
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}