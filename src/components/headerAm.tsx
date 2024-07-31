"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HeaderAm({ headerData }: any) {
  const pathname = usePathname();
  const pagename = pathname.split("/")[2];
  const [isOpen, setIsOpen] = useState(false);
  const cl = " text-2xl font-extrabold hover:text-cyan-400";
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-blue-900 rounded-lg">
      <div className="bg-cyan-200 p-2 rounded-lg">
        <Link href="/en/home">
          <Image
            src={headerData.headerImageUrl}
            alt="Logo"
            width="150"
            height="100"
          />
        </Link>
      </div>
      <button
        className="block lg:hidden p-2 text-blue-900 bg-cyan-200 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 w-full lg:w-auto">
          <Link
            href="/am/home"
            className={
              pathname === "/am/home"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {headerData?.homeLink}
            {/* ቅድመ ገጽ */}
          </Link>
          <Link
            href="/am/whatwedo"
            className={
              pathname == "/am/whatwedo"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {/* ስራዎቻችን */}
            {headerData?.whatWeDoLink}
          </Link>
          <Link
            href="/am/village"
            className={
              pathname == "/am/village"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {/* መንደራችን */}
            {headerData?.villageLink}
          </Link>
          <Link
            href="/am/stories"
            className={
              pathname == "/am/stories"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {headerData?.storiesLink}
            {/* ታሪኮች */}
          </Link>
          <Link
            href="/am/about"
            className={
              pathname == "/am/about"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {headerData?.aboutLink}
            {/* ስለኛ */}
          </Link>
          <Link
            href="/am/takeaction"
            className={
              pathname == "/am/takeaction"
                ? "text-yellow-500" + cl
                : "text-cyan-200" + cl
            }
          >
            {headerData?.takeActionLink}
            {/* ይወስኑ */}
          </Link>
        </div>
        <div className="flex flex-col lg:flex-col lg:items-center lg:space-x-4 bg-blue-900 text-cyan-200 pr-4">
          <Link href={`/en/${pagename}`} className="p-2 flex">
            <Image
              className=""
              src="/us-flag.png"
              width="16"
              height="16"
              alt="United States Flag"
            />{" "}
            En
          </Link>
          <Link className="p-2 flex" href={`/am/${pagename}`}>
            <Image
              className=""
              src="/ethiopia-flag.png"
              width="16"
              height="16"
              alt="Ethiopian Flag"
            />{" "}
            አማ
          </Link>
        </div>
      </div>
    </nav>
  );
}
