import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex gap-4 my-4">
        <Link href="/">Home</Link>
        <Link href="/snippets">Snippets</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
