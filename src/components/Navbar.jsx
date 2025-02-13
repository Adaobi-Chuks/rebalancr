import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#0D0F1F] text-[#E0E0E0] flex justify-between items-center px-6 py-4 border-b border-[#E0E0E0]">
            <Link to="/" className="font-[Madimi One] text-2xl md:text-xl lowercase bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] text-transparent bg-clip-text cursor-pointer tracking-widest">
                rebalancr
            </Link>
            <button className="bg-[#00F5A0] text-[#0D0F1F] px-5 py-3 md:px-4 md:py-2 font-bold border border-transparent transition-all duration-200 hover:scale-110 cursor-pointer">
                Get Started
            </button>
        </nav>
    );
};

export default Navbar;