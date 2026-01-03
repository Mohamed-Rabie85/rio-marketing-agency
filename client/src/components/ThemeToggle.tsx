import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const { theme, toggleTheme, switchable } = useTheme();

    if (!switchable || !toggleTheme) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 hover:bg-muted"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-muted-foreground" />
            ) : (
                <Sun className="w-5 h-5 text-muted-foreground" />
            )}
        </Button>
    );
}
