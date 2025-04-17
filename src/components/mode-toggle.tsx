import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme, Theme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Button
        className="cursor-pointer aspect-square w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
        variant="outline"
        size="icon"
        onClick={() => {
          const currentTheme = theme === Theme.light ? Theme.dark : Theme.light;
          setTheme(currentTheme);
        }}
      >
        <Sun className="h-4 w-4 sm:!w-5 sm:!h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 sm:!w-5 sm:!h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
