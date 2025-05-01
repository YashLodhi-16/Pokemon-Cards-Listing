import { Button } from "@/components/ui/button";
import { TPokemon } from "@/schemas/pokemon.zod";
import { useEffect, useRef, useState } from "react";

const Cries = ({ pokemon }: { pokemon: TPokemon }) => {
  const legacyAudio = useRef<HTMLAudioElement | null>(null);
  const latestAudio = useRef<HTMLAudioElement | null>(null);

  const minWidth = 400;
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= minWidth
  );

  useEffect(() => {
    const resize = () => {
      setIsSmallScreen(window.innerWidth <= minWidth);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const size = isSmallScreen ? "xs" : "default";

  return (
    <div className="flex gap-x-1.5 sm:gap-x-2 justify-between items-center">
      <Button
        variant="outline"
        onClick={() => {
          if (legacyAudio.current) {
            Promise.resolve(legacyAudio.current.play()).catch(console.log);
          }
        }}
        className="cursor-pointer"
        size={size}
      >
        Legacy
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          if (latestAudio.current) {
            Promise.resolve(latestAudio.current.play()).catch(console.log);
          }
        }}
        className="cursor-pointer"
        size={size}
      >
        Latest
      </Button>

      <audio
        src={pokemon.cries.legacy}
        className="none"
        ref={legacyAudio}
      ></audio>
      <audio
        src={pokemon.cries.latest}
        className="none"
        ref={latestAudio}
      ></audio>
    </div>
  );
};

export default Cries;
