"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const servises = () => {
  const router = useRouter();
  const logedInuser = true;
  const henadleAboutPage = () => {
    if (logedInuser) {
      router.push("/services/about");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p>this is a servises section</p>
      {/* <Link href="/services/about">go to about page </Link> */}
      <button type="button" onClick={henadleAboutPage}>
        go to about page
      </button>
    </div>
  );
};

export default servises;
