import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-center ">
        <ul className="flex items-center w-1/2 gap-4 justify-center">
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/services">
            <li>servises</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
