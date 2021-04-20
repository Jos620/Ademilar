<template>
    <el-row justify="space-between" id="hero-bg">
        <el-col :lg="8" :sm="12" class="title-wrapper">
            <div>
                <h1 class="hero__title">
                    Consórcio <br />
                    <span class="md:ml-12">Compra</span><br />
                    Compartilhada
                </h1>
            </div>
        </el-col>
        <el-col :lg="16" :sm="12" class="hero__image">
            <div class="relative flex">
                <img
                    class="rafael-image"
                    src="~/assets/img/Rafael.png"
                    alt="Rafael Luiz"
                    width="380"
                />
                <img class="absolute top-32 -right-96 elo" src="~/assets/svg/elo.svg" width="140">
            </div>
        </el-col>
        <div class="w-full h-12 bg-white absolute left-0 bottom-0" style="mask-image: linear-gradient(to bottom, transparent 0%, black 100%);"></div>
    </el-row>
</template>

<style scoped>

#hero-bg {
    padding: 100px;
}

.hero__title {
    line-height: 1em;
    position: relative;
    top: calc(45vh - 130px);
    overflow: visible;
}

.hero__image {
    display: flex;
    justify-content: center;
    position: relative;
    right: 50%;
    transform: translateX(50%);
    bottom: 30px;
}

h1 span {
    font-size: 3.6rem;
    text-indent: 50px;
}

.rafael-image {
    mask-image: linear-gradient(to top, transparent 4%, black 20%);
}

.elo {
    transform: rotate(-7deg);
}

@media screen and (max-width: 1220px) {
    #hero-bg {
        padding: 45px;
    }

    .hero__title {
        font-size: 3em;
    }

    .hero__image {
        right: 10vw;
    }

    .elo {
        display: none;
    }
}

@media screen and (max-width: 870px) {
    #hero-bg {
        padding: 40px 30px;
    }

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
