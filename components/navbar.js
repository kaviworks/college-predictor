import Link from "next/link";
import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
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
            objectFit="contain"
          />
        </div>

        <div className="flex gap-4">
          <SocialIcon socialLink={"https://www.facebook.com/avantifellows"}>
            <Facebook color="#fff" fill="#fff" strokeWidth="0.1" />
          </SocialIcon>
          <SocialIcon socialLink={"https://www.instagram.com/avantifellows"}>
            <Instagram color="#fff" />
          </SocialIcon>
        </div>
      </div>
      <div className="bg-[#B52326] text-xl w-full h-16 flex items-center justify-center text-white">
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
