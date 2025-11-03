"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prev => !prev);
  };

  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <section className="flex items-center justify-between">
      <h1 className="font-catamaran text-[#fff] text-[50px] max-[1150px]:text-[40px]">
        <span className="font-catamaran text-[#f25278] text-[50px] max-[1150px]:text-[40px]">
          C
        </span>
        INEMA
      </h1>
      <nav
        className={`flex items-center max-[900px]:absolute max-[900px]:w-[300px] max-[900px]:bg-[#000000] max-[900px]:p-[20px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:top-[100px]  ${
          nav ? "max-[900px]:inline-block" : "max-[900px]:hidden"
        }`}
      >
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className="font-catamaran mr-[20px] text-[#fff] text-[20px] relative max-[900px]:my-[20px] max-[900px]:block"
          >
            {link.name}
            {activeLink === link.name && (
              <span className="absolute left-[50%] -translate-x-[50%] -bottom-2 w-2 h-2 bg-[#f25278] rounded-full max-[900px]:left-[5%]"></span>
            )}
          </Link>
        ))}
      </nav>
      <Image
        src="/images/hamburger.png"
        width={35}
        height={25}
        alt="hamburger"
        className="w-[35px] h-[25px] cursor-pointer hidden max-[900px]:block"
        onClick={handleNav}
      />
    </section>
  );
};

export default Nav;
