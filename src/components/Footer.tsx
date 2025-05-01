import { Link } from "react-router";
import { AboutRoute, HomeRoute, VITE_POKEMON_API, Favicon } from "@/constants";
import { TbExternalLink } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-gray-50 grid gap-y-8 sm:gap-y-9 px-4 py-4 sm:px-6 sm:py-8 md:px-8 md:py-10 font-roboto border-t border-t-gray-300 dark:border-t-0">
      <div className="flex flex-wrap justify-evenly items-center text-sm sm:text-base md:text-lg">
        <ul>
          <li className="mb-2">
            <h5 className="font-semibold text-md">External Links</h5>
          </li>

          <li>
            <Link
              to="https://github.com/YashLodhi-16"
              target="_blank"
              className="link-hover"
            >
              Github
            </Link>
            <TbExternalLink className="inline w-4 h-4 ml-1" />
          </li>

          <li>
            <Link to={VITE_POKEMON_API} target="_blank" className="link-hover">
              Api Reference
            </Link>
            <TbExternalLink className="inline w-4 h-4 ml-1" />
          </li>
        </ul>

        <ul>
          <li className="mb-2">
            <h5 className="font-semibold text-md">Internal Links</h5>
          </li>
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
        </ul>
      </div>
      <div>
        <img
          src={Favicon}
          alt="main logo"
          className="w-7 sm:w-9 md:w-11 aspect-square mx-auto mb-2 md:mb-3 favicon-animation rounded-full"
        />
        <h6 className="capitalize font-light text-center text-xs sm:text-sm md:text-base font-ubuntu">
          copyright &copy; 2025-Present PokeDex. all rights reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
