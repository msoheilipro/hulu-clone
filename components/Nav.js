import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
