<template>
    <div id="app">
        <header>
            <Navbar ref="navbar" />
        </header>
        <main>
            <transition name="fade">
                <Nuxt />
            </transition>
        </main>
        <section
            id="float-links"
            data-aos="fade-up"
            data-aos-anchor="#carousel"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
        >
            <div class="flex">
                <a
                    :href="link.link"
                    v-for="(link, i) in links"
                    :key="i"
                    :class="`float-link ${link.classes}`"
                >
                    <img
                        :src="require(`~/assets/svg/social/${link.name}.svg`)"
                        :width="link.width"
                    />
                </a>
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
        scroll() {
            this.$refs.navbar.handleScroll();
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scroll);
    },
    data() {
        return {
            links: [
                {
                    name: "whatsapp",
                    link:
                        "https://api.whatsapp.com/send?phone=554195104134&text=Oi%2C%20gostaria%20de%20simular%20um%20consórcio!",
                    classes: "bg-green-400",
                    width: 30
                },
                {
                    name: "facebook",
                    link: "https://www.facebook.com/unidadealmirantetamandare",
                    classes: "bg-blue-400",
                    width: 36
                },

                {
                    name: "instagram",
                    link:
                        "https://www.instagram.com/rafaelluizinvestimentos/?hl=pt-br",
                    classes: "bg-gradient-to-br from-pink-400 to-purple-500",
                    width: 26
                }
            ]
        };
    }
};
</script>

<style scoped>
#app {
    overflow: hidden;
}

main {
    margin: 5rem;
    margin-top: 18rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#float-links {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
}

.float-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    margin: 0 8px;
}

@media (max-width: 768px) {
    #app {
        margin: 0;
    }

    main {
        margin: 3rem 2rem;
    }

    #float-links {
        min-width: 100vw;
        display: flex;
        justify-content: center;
        right: initial;
    }
}
</style>
