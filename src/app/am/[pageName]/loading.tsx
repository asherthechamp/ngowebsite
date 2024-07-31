export default function Loading() {
  return (
    <div className="space-y-8 p-4">
      {/* Banner Placeholder */}
      <div className="relative w-full h-full bg-gray-200 animate-pulse">
        <div className="absolute border-none h-full w-full bg-gray-300"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="h-12 bg-gray-300 w-3/4 mx-auto sm:w-1/2 lg:w-1/3"></div>
            <div className="mt-4 h-6 bg-gray-300 w-1/2 mx-auto sm:w-1/3 lg:w-1/4"></div>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <div className="block w-full rounded bg-gray-300 px-12 py-3 sm:w-auto"></div>
              <div className="block w-full rounded bg-gray-300 px-12 py-3 sm:w-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Placeholder */}
      <div className="relative bg-gray-200 animate-pulse">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <div className="h-8 bg-gray-300 w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Cards Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-200 animate-pulse">
          <div className="w-full h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-5/6"></div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-200 animate-pulse">
          <div className="w-full h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-5/6"></div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-200 animate-pulse">
          <div className="w-full h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
