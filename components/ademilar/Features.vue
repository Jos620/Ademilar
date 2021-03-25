<template>
    <div
        class="features p-1 md:p-2 mt-12 mb-16 bg-gradient-to-bl from-primary-300 via-secondary-400 to-yellow-400 rounded-xl shadow-xl"
        data-aos="fade-in"
        data-aos-duration="500"
    >
        <div
            class="features__background overflow-hidden rounded-xl flex justify-center items-center"
        >
            <div
                class="features__items min-w-full divide-y-2 md:divide-x-2 md:divide-y-0 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 md:gap-8"
            >
                <div
                    id="feature__item"
                    class="feature__item text-center"
                    v-for="feature in features"
                    :key="feature.title"
                    data-aos="fade-down"
                    data-aos-anchor="#feature__item"
                    data-aos-duration="800"
                >
                    <h4
                        class="my-6 text-4xl md:text-6xl tracking-wide font-light"
                    >
                        {{ feature.num }}
                    </h4>
                    <h1
                        class="mb-6 mt-6 text-5xl md:text-8xl font-normal tracking-wide"
                    >
                        {{ feature.title }}
                    </h1>
                    <p class="text-xl">
                        {{ feature.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Features",
    data() {
        return {
            features: [
                {
                    num: "30+",
                    title: "Anos",
                    text: "Construindo uma carreira de confiança"
                },
                {
                    num: "70+",
                    title: "Mil",
                    text: "Clientes atendidos"
                },
                {
                    num: "17+",
                    title: "Bilhões",
                    text: "De créditos comercializados"
                }
            ]
        };
    }
};
</script>

<style scoped>
.features__background {
    height: 88vh;
    min-width: 100%;
    background-image: url("../../assets/img/mom.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.features__items {
    padding: 46px;
    background-color: rgba(0, 0, 0, 0.4);
}

h1,
h4,
p {
    color: white;
}

p {
    text-indent: 0%;
    font-size: 1rem;
}

@media screen and (max-width: 768px) {
    .features__background {
        height: 100vh;
    }
}
</style>
