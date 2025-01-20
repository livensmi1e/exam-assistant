import React, { useEffect, useState } from "react";

function ThemeToggle() {
    const storedThemes = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedThemes || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            className="flex items-center justify-center"
            onClick={toggleTheme}
        >
            <span className="material-symbols-rounded flex items-center text-[1.8rem]">
                {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
        </button>
    );
}

export default ThemeToggle;
