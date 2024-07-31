"use client";
import Image from "next/image";

export default function Banner({
  title,
  text,
  image,
  link1,
  bannerLinkUrl1,
  bannerLinkUrl2,
  link2,
  w,
  h,
}: {
  title: string;
  text: string;
  image: string;
  link1: string;
  bannerLinkUrl1: string;
  link2: string;
  bannerLinkUrl2: string;
  w: number;
  h: number;
}) {
  return (
    <section
      className={"relative w-full h-full bg-cover bg-center bg-no-repeat"}
    >
      <Image
        src={image}
        alt="Banner Image"
        className="absolute border-none h-full"
        width={w}
        height={h}
      />

      <div
        className={`h-[${h}] relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8`}
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="[text-shadow:_4px_4px_4px_rgba(0,0,0,0.5)] text-3xl font-extrabold sm:text-5xl text-blue-950">
            <strong className=" block font-extrabold text-yellow-600">
              {title}
            </strong>
          </h1>

          <p className="[text-shadow:_2px_2px_2px_rgba(0,225,255,0.5)] mt-4 text-blue-950 max-w-lg sm:text-xl/relaxed">
            {text}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href={bannerLinkUrl1}
              className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            >
              {link1}
            </a>
            <a
              href={bannerLinkUrl2}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-yellow-600 shadow hover:text-yellow-700 focus:outline-none focus:ring active:text-yellow-500 sm:w-auto"
            >
              {link2}{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
