<template>
    <div id="carousel" class="relative">
        <el-carousel
            class="bg-accent-900 rounded-lg shadow-2xl md:shadow-lg"
            :interval="6000"
            height="600px"
            arrow="never"
        >
            <el-carousel-item v-for="item in carouselItems" :key="item">
                <h1>{{ item }}º Slide</h1>
            </el-carousel-item>
        </el-carousel>
        <div>
            <div
                class="absolute -bottom-16 -left-14  md:-bottom-24 md:-left-8 transform -rotate-12"
            >
                <img src="~/assets/svg/elo-branco.svg" width="150" />
            </div>
            <div class="elo-white absolute -top-20 -right-6 hidden md:inline">
                <img src="~/assets/svg/elo-vermelho.svg" width="200" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselItems: ["1", "2", "3", "4"]
        };
    }
};
</script>

<style scoped>
#carousel {
    margin: 4em 0;
}

.el-carousel__item {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: white;
}

.elo-white {
    transform: rotate(120deg);
}
</style>
