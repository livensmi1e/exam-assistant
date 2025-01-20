/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,css}"],
    darkMode: "selector",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                text: "rgb(var(--text))",
                background: "rgb(var(--background))",
                primary: "rgb(var(--primary))",
                secondary: "rgb(var(--secondary))",
                accent: "rgb(var(--accent))",
            },
            fontSize: {
                sm: "0.800rem",
                base: "1rem",
                xl: "1.250rem",
                "2xl": "1.563rem",
                "3xl": "1.954rem",
                "4xl": "2.442rem",
                "5xl": "3.053rem",
            },
            fontWeight: {
                100: "100",
                200: "200",
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                800: "800",
                900: "900",
            },
            spacing: {
                xxs: "0.25rem",
                xs: "0.5rem",
                sm: "0.75rem",
                md: "1rem",
                lg: "1.5rem",
                xl: "2rem",
                xxl: "3rem",
            },
        },
    },
    plugins: [],
};
