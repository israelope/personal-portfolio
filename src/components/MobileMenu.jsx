import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {


    useEffect(()=> {
        document.body.style.overflow = menuOpen ? "hidden" : "";}, [menuOpen]);
    return (
        <div 
            className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${
                menuOpen 
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}>
            <button oneClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
                &times;
            </button>

        </div>
    );
};