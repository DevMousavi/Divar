/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    screens: {
        af: "0px",
        as: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1440px",
    },
    theme: {
        extend: {
            colors: {
                primaryColor: "#a62626",
            },
        },
    },
    plugins: [],
};