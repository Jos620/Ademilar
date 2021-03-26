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
            {
                hid: "description",
                name: "description",
                content:
                    "Conheça mais sobre o consórcio e entenda como ele pode te auxiliar a realizar seu sonhos e alcançar suas metas!"
            },
            { "http-equiv": "content-language", content: "pt-br" },
            {
                "http-equiv": "content-type",
                content: "text/html; charset=UTF-8"
            },
            {
                name: "creator",
                content: "Mateus Eduardo Ito Silva"
            },
            {
                name: "keywords",
                content:
                    "consorcio, compra, compartilhada, ademilar, rafael, luiz, investimento, casa, imovel, automovel, carro, parcela, dinheiro, investir, almirante, tamandare"
            },

            /**
             * Facebook
             */
            { property: "og:locale", content: "pt_BR" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: "Rafael Luiz | Investimentos" },
            {
                property: "og:description",
                content:
                    "Conheça mais sobre o consórcio e entenda como ele pode te auxiliar a realizar seu sonhos e alcançar suas metas!"
            },
            {
                property: "og:url",
                content: "https://www.rafaelluizinvestimentos.com.br"
            },
            {
                property: "og:image",
                content: "~/assets/img/rafael-familia.jpg"
            },

            /**
             * Twitter
             */
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: "Rafael Luiz | Investimentos" },
            {
                name: "twitter:description",
                content:
                    "Conheça mais sobre o consórcio e entenda como ele pode te auxiliar a realizar seu sonhos e alcançar suas metas!"
            }
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
