<template>
    <div class="grid grid-cols-2 grid-rows-1 gap-x-24">
        <div>
            <vueper-slides class="no-shadow rounded-md overflow-hidden slide" fixed-height="600px" autoplay>
                <vueper-slide
                    v-for="exemplo in exemplos"
                    :key="exemplo.id"
                    :image="exemplo.img"
                ></vueper-slide>
            </vueper-slides>
            <div></div>
        </div>
        <div>
            <div class="text-wrapper">
                <div class="title">
                    <h1>Clientes</h1>
                </div>
                <div class="sub-title">
                    <p>
                        Estes são alguns clientes que confiaram e estão
                        realizando seus sonhos
                    </p>
                    <p>
                        Faça parte dessa lista você também!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "~/plugins/fb";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
    name: "Carousel",
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            exemplos: []
        };
    },
    created() {
        // Acessa a coleção "exemplos"
        db.collection("exemplos").onSnapshot(res => {
            // Pega todas as mudanças feitas na coleção
            const changes = res.docChanges();
            // Para cada mudança
            changes.forEach(change => {
                // Se a mudança for do tipo "adicionada"
                if (change.type === "added") {
                    // Coloque a mudança no array "exemplos"
                    this.exemplos.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    });
                }
            });
        });
    }
};
</script>

<style lang="postcss" scoped>
.slide {
    @apply p-1 md:p-2;
    @apply bg-gradient-to-bl;
    @apply from-primary-400 via-secondary-400 to-yellow-400;
}

.thumbnails .vueperslide {
    cursor: default;
}
</style>
