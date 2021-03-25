<template>
    <el-row justify="space-between">
        <el-col :lg="8" :sm="12" class="title-wrapper">
            <div class="relative">
                <h1 class="hero__title">
                    Consórcio <br />
                    <span class="md:ml-12">Compra <br /></span>
                    Compartilhada
                </h1>
                <div class="absolute top-0 md:top-full right-0">
                    <img class="elo" src="@/assets/svg/elo.svg" width="90" />
                </div>
            </div>
        </el-col>
        <el-col :lg="16" :sm="12" class="hero__image">
            <div class="relative">
                <img
                    class="rafael-image"
                    src="~/assets/img/Rafael.png"
                    alt="Rafael Luiz"
                    width="360"
                />
            </div>
        </el-col>
    </el-row>
</template>

<style scoped>
.hero__title {
    line-height: 1.4em;
    position: relative;
    top: calc(45vh - 130px);
    overflow: visible;
}

.hero__image {
    display: flex;
    justify-content: center;
    position: relative;
    right: -18vw;
    bottom: 30px;
}

h1 span {
    font-size: 3.6rem;
    text-indent: 50px;
}

.rafael-image {
    mask-image: linear-gradient(to top, transparent 8%, black 28%);
}

.elo {
    transform: rotate(-11deg);
}

@media screen and (max-width: 1220px) {
    .hero__title {
        font-size: 3em;
    }

    .hero__image {
        right: -10vw;
    }

    .elo {
        transform: rotate(174deg);
    }
}

@media screen and (max-width: 870px) {
    .hero__title,
    .hero__title span {
        top: 0;
        font-size: 40px;
    }
    .hero__image {
        display: none;
    }
}
</style>
