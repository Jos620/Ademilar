<template>
    <div class="carousel">
        <div class="mobile">
            <el-carousel
                :interval="4000"
                arrow="aways"
                height="90vh"
                indicator-position="none"
            >
                <el-carousel-item v-for="exemplo in exemplos" :key="exemplo.id">
                    <el-card>
                        <div class="card__header" slot="header">
                            <img
                                :src="
                                    require(`@/assets/img/exemplos/${exemplo.img}.jpg`)
                                "
                                :alt="exemplo.title"
                            />
                            <h2>
                                {{ exemplo.title }}
                            </h2>
                        </div>
                        <div class="card__body">
                            <p>
                                {{ exemplo.desc }}
                            </p>
                        </div>
                    </el-card>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="desktop">
            <el-carousel
                type="card"
                :interval="4000"
                arrow="never"
                indicator-position="none"
                height="70vh"
            >
                <el-carousel-item v-for="exemplo in exemplos" :key="exemplo.id">
                    <el-card>
                        <div
                            class="card__header grid grid-cols-2"
                            slot="header"
                        >
                            <div class="img-wrapper">
                                <img
                                    :src="
                                        require(`@/assets/img/exemplos/${exemplo.img}.jpg`)
                                    "
                                    :alt="exemplo.title"
                                />
                            </div>
                            <h2>
                                {{ exemplo.title }}
                            </h2>
                        </div>
                        <div class="card__body">
                            <p>
                                {{ exemplo.desc }}
                            </p>
                        </div>
                    </el-card>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
// import db from '@/fb';
export default {
    name: "Carousel",
    data() {
        return {
            exemplos: []
        };
    },
    created() {
        // // Acessa a coleção 'exemplos'
        // db.collection('exemplos').onSnapshot((res) => {
        // 	// Pega todas as mudanças feitas na coleção
        // 	const changes = res.docChanges();
        // 	// Para cada mudança
        // 	changes.forEach((change) => {
        // 		// Se a mudança for do tipo 'adicionada'
        // 		if (change.type === 'added') {
        // 			// Coloque a mudança no array exemplos
        // 			this.exemplos.push({
        // 				...change.doc.data(),
        // 				id: change.doc.id,
        // 			});
        // 		}
        // 	});
        // });
    }
};
</script>

<style lang="postcss" scoped>
.card__header img {
    border-radius: 12px;
}

.mobile {
    @apply md:hidden;
}

.desktop {
    @apply hidden md:block;
}

.mobile .el-carousel {
    @apply rounded-xl;
    margin: -2rem;
}

.mobile .el-card {
    @apply rounded-xl;
    @apply bg-secondary-300;
    min-height: 100%;
}

.mobile .card__header h2 {
    color: white;
    margin: 8px;
    margin-bottom: 0;
    font-size: 1.7rem;
}

.mobile .card__body p {
    color: white;
    font-size: 1.2rem;
}

.desktop .el-card {
    border-radius: 12px;
    @apply bg-secondary-300;
}

.desktop .img-wrapper {
    background-color: white;
    padding: 2px;
    border-radius: 12px;
    @apply shadow-xl;
}

.desktop .card__header img {
    width: 100%;
}

.desktop .card__header h2 {
    height: 100%;
    width: 100%;
    padding: 1rem;
    font-size: 3.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.desktop .card__body p {
    color: #eee;
}
</style>
