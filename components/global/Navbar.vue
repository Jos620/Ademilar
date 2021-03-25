<template>
    <div id="navbar" class="shadow-2xl md:shadow-lg rounded-xl">
        <div id="logo">
            <nuxt-link to="/">
                <img
                    src="@/assets/img/logo-completo.png"
                    alt="Ademilar"
                    width="250"
                />
            </nuxt-link>
        </div>

        <div id="hamburger">
            <el-button type="primary" @click="navActive = !navActive">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                </svg>
            </el-button>
        </div>

        <nav id="desktop">
            <el-menu
                mode="horizontal"
                :router="true"
                :default-active="$route.path"
            >
                <el-menu-item
                    v-for="link in links"
                    :key="link.route"
                    :index="link.route"
                >
                    {{ link.text }}
                </el-menu-item>
            </el-menu>
        </nav>
        <el-collapse-transition>
            <nav id="mobile" v-if="navActive">
                <el-menu :router="true" :default-active="$route.path">
                    <el-menu-item
                        v-for="link in links"
                        class="transition-box"
                        :key="link.route"
                        :index="link.route"
                    >
                        {{ link.text }}
                    </el-menu-item>
                </el-menu>
            </nav>
        </el-collapse-transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { text: "Início", route: "/" },
                { text: "Ademilar", route: "/ademilar" },
                { text: "Rafael luiz", route: "/rafael" },
                { text: "Contato", route: "/contato" }
            ],
            navActive: false
        };
    },
    methods: {
        handleScroll() {
            if (window.innerWidth > 804) {
                const css = document.getElementById("navbar").style;

                if (window.scrollY > 20) {
                    css.padding = "1.3em";
                    css.height = "90px";
                } else {
                    css.padding = "3rem";
                    css.height = "130px";
                }
            }
        }
    }
};
</script>

<style scoped>
#navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;
    position: fixed;
    z-index: 999;
    background: white;
    min-width: 100%;
    transition: 0.3s;
}

#hamburger {
    display: none;
}

ul li {
    font-size: 18px !important;
    letter-spacing: 1px;
}

@media (max-width: 804px) {
    #navbar {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: static;
        height: 100%;
    }

    #hamburger {
        display: inherit;
        margin-top: 3em;
    }

    #desktop {
        display: none;
    }

    ul {
        border: 0;
        text-align: center;
        margin-top: 3em;
    }
}
</style>
