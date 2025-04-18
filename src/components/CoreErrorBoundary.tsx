import { Link } from "react-router";
import krokorok from "@/assets/krokorok.png";
import scizor from "@/assets/scizor.png";
const CoreErrorBoundary = ({
  type = "global",
  errorMessage,
}: {
  type?: "global" | "route";
  errorMessage: string;
}) => {
  const shortErrorMessage =
    errorMessage.length > 100
      ? errorMessage.substring(0, 101) + ".....more"
      : errorMessage;

  return (
    <div className="container mx-auto h-screen w-full flex justify-center items-center flex-col-reverse gap-y-6 px-10 text-center font-poppins">
      <div className="flex flex-col gap-y-2 text-sm sm:text-base">
        <h1 className="text-center text-lg sm:text-xl font-bold text-rose-400 capitalize leading-5">
          There was an Unexpected Error occured!
        </h1>
        <p className="font-medium capitalize">
          <span className="text-gray-400">Cause:</span> {shortErrorMessage}
        </p>
        <p className="max-w-96 mx-auto">
          Oops! Something went wrong while trying to load this page. Don&#39;t
          worry, we are trying to fix it.
        </p>
        <p>
          If you need help,{" "}
          <Link
            to="mailto:yashlodhi2006@gmail.com"
            className="text-cyan-400 underline"
          >
            contact us
          </Link>
        </p>
      </div>

      {type === "global" ? (
        <div className="img-parent">
          <img
            src={scizor}
            alt="siczor hero image"
            className="img-child hover:drop-shadow-rose-400"
          />
        </div>
      ) : (
        <div className="img-parent">
          <img
            src={krokorok}
            alt="krokorok hero image"
            className="img-child hover:drop-shadow-amber-800"
          />
        </div>
      )}
    </div>
  );
};

export default CoreErrorBoundary;
