import { Link } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { AboutRoute, Favicon, HomeRoute } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-6 sm:py-6 sm:px-8 md:py-7 md:px-10 items-center dark:bg-gray-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
      <div>
        <img
          src={Favicon}
          alt="favicon"
          className="w-7 sm:w-9 md:w-10 aspect-square favicon-animation rounded-full"
        />
      </div>
      <ul className="flex items-center gap-x-4 sm:gap-x-6 uppercase text-sm sm:text-base md:text-lg">
        <li>
          <Link to={HomeRoute} className="link-hover">
            Home
          </Link>
        </li>
        <li>
          <Link to={AboutRoute} className="link-hover">
            About
          </Link>
        </li>

        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
