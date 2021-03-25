module.exports = {
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                "primary-50": "#fe8a8d",
                "primary-100": "#fe666a",
                "primary-200": "#fe4348",
                "primary-300": "#fd1f25",
                "primary-400": "#f80107",
                "primary-500": "#d50106",
                "primary-600": "#b10005",
                "primary-700": "#8e0004",
                "primary-800": "#6a0003",
                "primary-900": "#470002",
                "secondary-50": "#ffbc89",
                "secondary-100": "#ffa766",
                "secondary-200": "#ff9342",
                "secondary-300": "#ff7f1e",
                "secondary-400": "#f96b00",
                "secondary-500": "#d65c00",
                "secondary-600": "#b24c00",
                "secondary-700": "#8e3d00",
                "secondary-800": "#6b2e00",
                "secondary-900": "#471e00",
                "accent-50": "#c4c4c4",
                "accent-100": "#b2b2b2",
                "accent-200": "#a0a0a0",
                "accent-300": "#8e8e8e",
                "accent-400": "#7c7c7c",
                "accent-500": "#6b6b6b",
                "accent-600": "#595959",
                "accent-700": "#474747",
                "accent-800": "#353535",
                "accent-900": "#272727"
            }
        }
    }
};
