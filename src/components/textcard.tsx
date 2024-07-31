export default function TextCard({
  heading,
  descreption,
  svg,
}: {
  heading: string;
  descreption: string;
  svg: string;
}) {
  return (
    <>
      <div className="flex items-start gap-4 p-4 ">
        <span className="shrink-0 rounded-lg p-4">
          <img src={svg} width="50px" height="50px" className="invert-5" />
        </span>

        <div>
          <h2 className="text-lg font-bold text-yellow-600">{heading}</h2>

          <p className="mt-1 text-sm text-blue-800">{descreption}</p>
        </div>
      </div>
    </>
  );
}
