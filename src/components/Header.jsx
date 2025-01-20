import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router";

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const location = useLocation();
    const navItems = [
        {
            pathname: "/practice",
            name: "Practice",
        },
        {
            pathname: "/timer",
            name: "Timer",
        },
        {
            pathname: "/timeline",
            name: "Timeline",
        },
    ];

    return (
        <header className="bg-background py-md md:py-lg flex flex-col gap-sm md:flex-row md:justify-between">
            <div className="flex justify-between items-center">
                <Link className="text-xl font-500 md:text-2xl" to="/">
                    ngọc là ai
                </Link>
                <button
                    className="flex justify-center md:hidden"
                    onClick={() => setMenuIsOpen((prev) => !prev)}
                >
                    <span className="material-symbols-rounded text-3xl">
                        menu
                    </span>
                </button>
            </div>
            <div className={`${menuIsOpen ? "block" : "hidden"} md:block`}>
                <ul className="flex flex-col justify-center items-center gap-sm font-500 md:flex-row md:gap-lg md:text-xl">
                    {navItems.map((navItem) => (
                        <li key={navItem.pathname}>
                            <Link
                                to={navItem.pathname}
                                className={`group ${
                                    location.pathname === navItem.pathname
                                        ? "border-b-2 border-primary"
                                        : ""
                                }`}
                            >
                                {navItem.name}{" "}
                                <div className="bg-primary h-[2.5px] w-0 group-hover:w-full transition-all duration-500"></div>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
