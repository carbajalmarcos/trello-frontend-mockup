import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-white/50">
      <p className="flex items-center justify-center text-center">
        <Image src="/logo.png" alt="" width={40} height={40} />
        <p>
          MyTrello
        </p>
      </p>
    </header>
  );
}

export default Header;
