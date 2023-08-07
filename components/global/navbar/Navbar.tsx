"use client"

import {GiHamburgerMenu} from "react-icons/gi"

import Link from "next/link";
import style from "./Navbar.module.css"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Snippets", path: "/snippets" },
  { name: "About", path: "/about" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen,setMenuOpen] = useState(false)
  
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])
  
  return (
    <nav className="my-4 flex-none w-full">
        <div className="relative visible md:hidden mx-10 text-2xl float-right">
          <button onClick={() => setMenuOpen(prev => !prev)} className={menuOpen ? "text-cyan-400" : "hover:text-cyan-400"}>
            <GiHamburgerMenu />
          </button>
          <div className={`${menuOpen ? "visible": "hidden"} absolute top-4 right-0 flex flex-col gap-2 p-2 text-right`}>
            {routes.map(route => (
              <Link key={route.name} href={route.path} className={route.path === pathname ? "text-cyan-400" : "hover:text-cyan-400"}>
                {route.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.navbar}>
            {routes.map(route => (
              <Link key={route.name} href={route.path} className={route.path === pathname ? "text-cyan-400" : "hover:text-cyan-400"}>
                {route.name}
              </Link>
            ))}
        </div>
    </nav>
  );
};

export default Navbar;
