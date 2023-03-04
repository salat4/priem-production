import Image from "next/image";
import React from "react";
import arrow from "@/images/icons/arrowUp.png";

export default function ButtonUp() {
  return (
    <button className="buttonUp">
      <Image src={arrow} alt="Click me and up" />
    </button>
  );
}
