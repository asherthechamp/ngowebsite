export default function Article({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
  return (
    <section className="relative bg-blue-950 text-yellow-500">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl py-4">{header}</h2>

          <span className="py-4">{text}</span>
        </div>
      </div>
    </section>
  );
}
