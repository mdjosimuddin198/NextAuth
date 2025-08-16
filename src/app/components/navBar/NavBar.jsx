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
          <Link href="/auth/login">
            <li>login</li>
          </Link>
          <Link href="/auth/signup">
            <li>signup</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
