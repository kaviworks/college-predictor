import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

// Renders Navbar as General Component
const Navbar = ({ item1, item2 }) => {
  const pathname = usePathname();
  return (
    <div className="bg-white shadow-md">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 py-2">
        <div className="relative w-32 md:w-40 aspect-video">
          <img
            src="https://cdn.avantifellows.org/af_logos/avanti_logo_black_text.webp"
            alt="Avanti Fellows logo"
            layout="fill"
            className="object-contain"
          />
        </div>

        <div className="flex gap-4">
          <a href="https://www.facebook.com/avantifellows" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={45} color="#05ac4c" style={{ backgroundColor: "#fff", borderRadius: "50%", padding: "4px" }} />
          </a>
          <a href="https://www.instagram.com/avantifellows" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={45} color="#05ac4c" style={{ backgroundColor: "#fff", borderRadius: "50%", padding: "4px" }} />
          </a>
        </div>

      </div>
      <div className="bg-[#05ac4c] text-xl w-full h-16 flex items-center justify-center text-white">
        <div className="flex text-white text-lg gap-10">
          <Link
            href="/"
            className={`link ${
              pathname === "/" ? "font-bold" : "hover:underline cursor-pointer"
            }`}
          >
            {item1}
          </Link>
          <Link
            href="/scholarships"
            className={`link ${
              pathname === "/scholarships"
                ? "font-bold"
                : "hover:underline cursor-pointer"
            }`}
          >
            {item2}
          </Link>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ children, socialLink }) => {
  return (
    <a
      href={socialLink}
      className=" rounded-full bg-[#B52326] flex items-center justify-center h-10 w-10"
    >
      {children}
    </a>
  );
};

export default Navbar;
