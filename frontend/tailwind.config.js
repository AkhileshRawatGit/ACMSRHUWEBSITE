/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                space: ["var(--font-space)"],
            },
            colors: {
                acm: {
                    blue: "#0085CA",
                },
                neon: {
                    blue: "#0ea5e9", // Sky blue
                    purple: "#6366f1", // Indigo
                    green: "#10b981", // Emerald
                },
                slate: {
                    950: "#020617",
                    900: "#0f172a",
                    800: "#1e293b",
                },
                dark: {
                    900: "#020617",
                    800: "#0f172a",
                    700: "#1e293b",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'blur(0px)' },
                    '50%': { opacity: '0.8', filter: 'blur(2px)' },
                },
            },
        },
    },
    plugins: [],
};
