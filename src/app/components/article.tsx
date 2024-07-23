export default function Article({
  header,
  p1,
  p2,
  p3,
}: {
  header: string;
  p1: string;
  p2?: string;
  p3?: string;
}) {
  return (
    <section className="bg-blue-950 text-yellow-500">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{header}</h2>

          <p className="mt-4 text-blue-200">{p1}</p>
          <p className="mt-4 text-blue-200">{p2}</p>
          <p className="mt-4 text-blue-200">{p3}</p>
        </div>
      </div>
    </section>
  );
}
