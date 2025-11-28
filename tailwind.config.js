/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: "#000000", // Deep Black
                surface: "#0D0D0D",    // Charcoal
                primary: "#06b6d4",    // Neon Cyan (Cyan-500)
                "primary-glow": "#22d3ee", // Cyan-400
                secondary: "#64748b",  // Slate-500
                border: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 20px rgba(6, 182, 212, 0.5)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
