import oshawott from "@/assets/oshawott.png";
import { Button } from "@/components/ui/button";
import { homeRoute } from "@/constants";
import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="container flex flex-col-reverse items-center px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:px-20 lg:py-20 gap-y-8 mx-auto sm:flex-row sm:gap-y-0 sm:gap-x-8">
      <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 sm:w-3/5">
        <div className="leading-0.5 sm:leading-1.5">
          <span className="uppercase tracking-[.3rem] text-[.5rem] ml-0.5 sm:text-[.7rem] md:text-xs lg:text-sm">
            did you lose
          </span>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            404 Not Found
          </h1>
        </div>
        <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px]">
          It seems you've followed a broken link or entered a URL that doesn't
          match any of our pages. Don't worry — it happens to the most of us.
          You can return to the homepage or explore our site using the
          navigation menu. If you believe this is an error, feel free to contact
          support.
        </p>
        <Link to={homeRoute}>
          <Button
            variant="outline"
            size="default"
            className="cursor-pointer capitalize md:w-28 md:h-12 md:text-base lg:text-[17px]"
          >
            home page
          </Button>
        </Link>
      </div>
      <div className="perspective-distant group sm:w-2/5">
        <img
          src={oshawott}
          alt="oshawott hero image"
          className="w-36 transition-all duration-[800ms] ease-in-out group-hover:drop-shadow group-hover:drop-shadow-cyan-400 group-hover:rotate-y-180 transform-3d sm:mx-auto sm:w-40 md:ml-auto md:mr-0 md:w-48 lg:w-56"
        />
      </div>
    </div>
  );
};

export default NotFound;
