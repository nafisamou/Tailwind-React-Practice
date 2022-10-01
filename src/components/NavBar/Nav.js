import React from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav className="w-full">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <Bars3Icon /> : <XMarkIcon />}
      </div>

      <ul className={`md:flex justify-center md:static w-full absolute duration-500 ease-linear bg-blue-400 text-white p-5 ${open?'top-6':'top-[-160px]'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))} 
      </ul>
    </nav>
  );
};

export default Nav;
