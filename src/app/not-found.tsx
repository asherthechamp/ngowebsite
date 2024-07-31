import FooterEn from "@/components/footerEn";
import HeaderControllerEn from "@/components/headerControllerEn";

export default function NotFound() {
  return (
    <>
      <HeaderControllerEn />
      <div className="flex flex-col items-center justify-center p-10 ">
        <h1 className="p-10 text-pretty text-lg text-blue-900">
          The page you are looking for is not found.
        </h1>
        <img
          width="300"
          src="/not-found-puppy-doll.jpg"
          alt="Not found puppy doll."
          className="rounded-lg"
        />
      </div>
      <FooterEn />
    </>
  );
}
