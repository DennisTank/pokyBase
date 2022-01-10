import Search from "./Search";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex">
      <Link href={`/`}>
        <h1 className=" m-2 p-2 text-xl text-white font-semibold bg-red-500  rounded-sm w-fit cursor-pointer">
          PokyBase
        </h1>
      </Link>
      <Search />
    </div>
  );
}
