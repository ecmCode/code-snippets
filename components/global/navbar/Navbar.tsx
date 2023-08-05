"use client"

import Link from "next/link";
import style from "./Navbar.module.css"
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", path: "/" },
  { name: "Snippets", path: "/snippets" },
  { name: "About", path: "/about" },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav>
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
