export default function Card({
  heading,
  descreption,
  image,
}: {
  heading: string;
  descreption: string;
  image: string;
}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-950">
      <img className="w-full" src={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-yellow-500">{heading}</div>
        <p className="text-cyan-500 text-base">{descreption}</p>
      </div>
    </div>
  );
}
