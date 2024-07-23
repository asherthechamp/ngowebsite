"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const cl = " text-2xl font-extrabold hover:text-cyan-400";
  return (
    <nav className="flex rounded-tl-lg rounded-tr-lg focus:outline-none">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width="200" height="200" />
      </Link>
      <div className="flex items-center justify-center space-x-10 bg-blue-900 p-4 w-full">
        <Link
          href="/"
          className={
            pathname === "/" ? "text-yellow-500" + cl : "text-cyan-200" + cl
          }
        >
          Home
        </Link>

        <Link
          href="/whatwedo"
          className={
            pathname == "/whatwedo"
              ? "text-yellow-500" + cl
              : "text-cyan-200" + cl
          }
        >
          What We Do
        </Link>
        <Link
          href="/village"
          className={
            pathname == "/village"
              ? "text-yellow-500" + cl
              : "text-cyan-200" + cl
          }
        >
          Village
        </Link>
        <Link
          href="/stories"
          className={
            pathname == "/stories"
              ? "text-yellow-500" + cl
              : "text-cyan-200" + cl
          }
        >
          Stories
        </Link>
        <Link
          href="about"
          className={
            pathname == "/about" ? "text-yellow-500" + cl : "text-cyan-200" + cl
          }
        >
          About
        </Link>
        <Link
          href="takeaction"
          className={
            pathname == "/takeaction"
              ? "text-yellow-500" + cl
              : "text-cyan-200" + cl
          }
        >
          Take Action
        </Link>
      </div>
    </nav>
  );
}
