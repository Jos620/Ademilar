<template>
    <div class="inicio">
        <section id="hero">
            <hero />
        </section>


        <section id="carousel">
            <carousel />
        </section>

        <section id="consorcio">
            <consorcio />
        </section>

        <section id="price-table">
            <price-table />
        </section>

        <section id="form--small">
            <formulario />
        </section>

        <section id="faq">
            <faq />
        </section>
    </div>
</template>

<script>
import Consorcio from "@/components/inicio/Consorcio.vue";
import Hero from "@/components/inicio/Hero";
import Carousel from "@/components/inicio/Carousel";
import PriceTable from "@/components/inicio/PriceTable";
import Formulario from "@/components/contato/Formulario";
import Faq from "@/components/inicio/Faq";
export default {
    name: "Inicio",
    components: {
        Carousel,
        Hero,
        Consorcio,
        PriceTable,
        Formulario,
        Faq
    }
};
</script>

<style lang="postcss">
#hero {
    background-image: url('../assets/img/hero-bg (1).png');
    background-color: rgba(255, 255, 255, 0.2);
    background-position: center;
    background-size: cover;
    margin: -170px -75px 100px -75px;

    @media (max-width: 768px) {
        margin: 30px auto 30px -20px;
    }

    @media (max-width: 870px) {
        background-image: none;
    }   
}
</style>