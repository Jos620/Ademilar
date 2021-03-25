<template>
    <div
        class="footer grid gap-y-10 gap-x-4 grid-cols-2 md:grid-cols-6 rounded-xl"
    >
        <div class="col-span-2 flex justify-around md:hidden">
            <div class="footer__nav--mobile text-center">
                <div class="nav__title--mobile text-2xl">
                    <h4>Veja Mais</h4>
                </div>
                <el-menu class="border-0 mt-4" :router="true">
                    <el-menu-item
                        v-for="link in filterLinks"
                        :key="link.route"
                        :index="link.route"
                        class="text-accent-600"
                    >
                        {{ link.text }}
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="footer__links--mobile text-center">
                <div class="links__title text-2xl">
                    <h4>Ademilar</h4>
                </div>
                <el-menu class="border-0 mt-4">
                    <el-menu-item
                        v-for="item in ademilarLinks"
                        :key="item.link"
                        class="text-accent-600"
                    >
                        <a :href="item.link">
                            {{ item.text }}
                        </a>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <div
            class="hidden md:flex justify-around items-start col-start-3 col-span-4 row-span-2"
        >
            <div class="footer__nav--desktop text-center">
                <div class="nav__title--desktop text-2xl">
                    <h4>Veja Mais</h4>
                </div>
                <el-menu class="border-0 mt-4" :router="true">
                    <el-menu-item
                        v-for="link in filterLinks"
                        :key="link.route"
                        :index="link.route"
                        class="text-accent-600"
                    >
                        {{ link.text }}
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="footer__links--desktop text-center">
                <div class="links__title text-2xl">
                    <h4>Ademilar</h4>
                </div>
                <el-menu class="border-0 mt-4">
                    <el-menu-item
                        v-for="item in ademilarLinks"
                        :key="item.link"
                        class="text-accent-600"
                    >
                        <a :href="item.link">
                            {{ item.text }}
                        </a>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <div
            class="footer__logo flex justify-center items-end col-span-2 md:row-span-1 md:col-start-1 md:row-start-1"
        >
            <nuxt-link to="/">
                <img
                    src="@/assets/img/logo-completo-black.png"
                    alt="Ademilar"
                    width="250"
                />
            </nuxt-link>
        </div>
        <div
            class="footer__copy col-span-2 md:row-start-2 md:col-start-1 text-center md:text-xs md:flex justify-center items-end text-accent-500"
        >
            <span>&copy; Ademilar | Almirante Tamandaré</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            links: [
                { text: "Início", route: "/" },
                { text: "Ademilar", route: "/ademilar" },
                { text: "Rafael luiz", route: "/rafael" },
                { text: "Contato", route: "/contato" }
            ],
            ademilarLinks: [
                { text: "Blog", link: "https://www.ademilar.com.br/blog/" },
                {
                    text: "Fale Conosco",
                    link: "https://www.ademilar.com.br/fale-conosco"
                },
                {
                    text: "Notícias",
                    link: "https://www.ademilar.com.br/noticias"
                }
            ]
        };
    },
    computed: {
        filterLinks() {
            return this.links.filter(link => link.route !== this.$route.path);
        }
    }
};
</script>

<style scoped>
.footer {
    box-shadow: 0 -12px 48px 3px rgba(0, 0, 0, 0.1),
        0 4px 48px -2px rgba(0, 0, 0, 0.1);
    padding: 3em;
    margin: 1rem;
}

.footer__nav {
    margin: 0 5rem;
}

.footer__links a {
    font-size: 14px;
}
</style>
