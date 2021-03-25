export default {
    target: "static",

    /**
     * Cabeçario do HTML
     */
    head: {
        title: "Rafael Luiz | Investimentos",
        htmlAttrs: {
            lang: "pt-BR"
        },
        /**
         * Meta Tags pra SEO
         */
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
    },

    /**
     * CSS Global
     */
    css: ["~/assets/css/main.css", "~/theme/index.css", "aos/dist/aos.css"],

    /**
     * Plugins do NPM
     */
    plugins: [
        "~/plugins/element-ui.js",
        "~/plugins/fb.js",
        {
            src: "~/plugins/aos",
            // Impede que o plugin seja rodado no servidor, então ele é executado no lado do cliente
            ssr: false
        }
    ],

    /**
     * Auto importa os components na pasta "Global" dos elementos
     */
    components: true,

    /**
     * Tailwind CSS
     */
    buildModules: ["@nuxtjs/tailwindcss"]
};
