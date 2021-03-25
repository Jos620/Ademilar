<template>
    <div id="rafael">
        <div class="grid hero">
            <div class="img-wrapper">
                <div class="img-rafael"></div>
            </div>
            <div class="text-wrapper">
                <div class="title">
                    <h1>Rafael Luiz</h1>
                </div>
                <div class="sub-title">
                    <p>
                        A mais de 7 anos levando pessoas a alcançarem metas e
                        realizarem sonhos através do consórcio.
                    </p>
                </div>
            </div>
            <div class="strongs">
                <div
                    class="strong"
                    v-for="(strong, i) in strongs"
                    :key="i"
                    :data-aos="i % 2 == 0 ? 'zoom-in-right' : 'zoom-in-left'"
                    data-aos-duration="1000"
                >
                    <div class="strong__title">
                        <h2>
                            {{ strong.title }}
                        </h2>
                    </div>
                    <div class="strong__desc">
                        <p>
                            {{ strong.desc }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel">
                <carousel />
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from "~/components/rafael/Carousel";
export default {
    name: "Rafael",
    components: {
        Carousel
    },
    data() {
        return {
            strongs: [
                {
                    title: "Confiança",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea harum architecto aspernatur odio provident nulla molestias distinctio iure qui"
                },
                {
                    title: "Integridade",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea harum architecto aspernatur odio provident nulla molestias distinctio iure qui"
                },
                {
                    title: "Compromisso",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea harum architecto aspernatur odio provident nulla molestias distinctio iure qui"
                }
            ]
        };
    }
};
</script>

<style lang="postcss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
    font-family: Poppins, "Segoe UI", sans-serif;
}

.grid.hero {
    @apply gap-x-24 gap-y-10;
    @apply grid-cols-2;
    @apply grid-rows-2;
}

.img-wrapper {
    height: 70vh;
    width: auto;
    border-radius: 12px;
    @apply p-1 md:p-2;
    @apply bg-gradient-to-bl;
    @apply from-primary-400 via-secondary-400 to-yellow-400;
    @apply col-span-2;
}

.img-rafael {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-image: url("../assets/img/rafael-familia.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.text-wrapper {
    @apply col-span-2;
    @apply row-span-1;
}

.title h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
}

.sub-title p {
    text-indent: 1rem;
    font-size: 1.2em;
}

.strongs {
    margin-top: -10rem;
    @apply col-span-2;
}

.strong {
    margin-bottom: 8rem;
}

.strong__title {
    font-size: 2.2rem;
    text-align: right;
    margin-bottom: 8px;
}

.strong__desc p {
    font-size: 1.2rem;
    text-indent: initial;
}

.carousel {
    @apply col-span-2;
}

@screen sm {
    .img-wrapper {
        @apply col-span-1;
    }

    .text-wrapper {
        @apply col-span-1;
    }

    .title h1 {
        text-align: left;
        font-size: 6rem;
    }

    .sub-title p {
        font-size: 1.5rem;
    }

    .strongs {
        width: 60vw;
        min-width: 300px;
        margin: 0 auto;
    }

    .strong {
        margin-top: -6rem;
        margin-bottom: 16rem;
    }

    .strong__title {
        margin-bottom: 2rem;
    }
}
</style>
