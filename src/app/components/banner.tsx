export default function Banner({ name }: { name: string }) {
  console.log(name);
  return (
    <div
      className={`bg-[url(/banners/${name}.jpg)]
 relative bg-cover bg-center bg-no-repeat bg-opacity-10`}
    >
      {/* Your content here */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right bg-blue-950 p-10 rounded-lg bg-opacity-30">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-950">
            Tesfa Addis
            <strong className="block font-extrabold text-yellow-500">
              {" "}
              Together We Stand.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-blue-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            >
              What We Do
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-yellow-600 shadow hover:text-yellow-700 focus:outline-none focus:ring active:text-yellow-500 sm:w-auto"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
