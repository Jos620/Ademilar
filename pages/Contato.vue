<template>
    <div id="contato">
        <section>
            <div>
                <h1>Pronto para começar a realizar os seus sonhos?</h1>
            </div>
        </section>
        <section class="gray-wrapper">
            <div class="form-wrapper">
                <div class="formulario">
                    <formulario />
                </div>
                <div class="doubt">
                    <h2>Ainda ficou com alguma dúvida?</h2>
                </div>
            </div>
        </section>
        <section class="social">
            <h4 class="text-left">Nos envie uma mensagem nas redes sociais</h4>
            <div class="medias flex flex-col md:flex-row justify-center">
                <div class="m-4" v-for="(media, i) in medias" :key="i">
                    <media-button :media="media">
                        {{
                            media.name.charAt(0).toUpperCase() +
                                media.name.slice(1)
                        }}
                    </media-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Formulario from "@/components/contato/Formulario";
import MediaButton from "@/components/contato/MediaButton";
export default {
    name: "Contato",
    components: {
        Formulario,
        MediaButton
    },
    data() {
        return {
            medias: [
                {
                    name: "whatsapp",
                    link:
                        "https://api.whatsapp.com/send?phone=554195104134&text=Oi%2C%20gostaria%20de%20simular%20um%20consórcio!"
                },
                {
                    name: "facebook",
                    link: "https://www.facebook.com/unidadealmirantetamandare"
                },
                {
                    name: "instagram",
                    link:
                        "https://www.instagram.com/rafaelluizinvestimentos/?hl=pt-br"
                }
            ]
        };
    },
    head() {
        return {
            title: "Contato | Dúvidas",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Quer realizar os seus sonhos através do consórcio? Ficou com alguma dúvida que gostaria de esclarecer? Então entre em contato pelas mídias sociais"
                },
                {
                    property: "og:title",
                    content: "Contato | Dúvidas"
                },
                {
                    property: "og:description",
                    content:
                        "Quer realizar os seus sonhos através do consórcio? Ficou com alguma dúvida que gostaria de esclarecer? Então entre em contato pelas mídias sociais."
                },
                {
                    name: "twitter:title",
                    content: "Contato | Dúvidas"
                },
                {
                    name: "twitter:description",
                    content:
                        "Quer realizar os seus sonhos através do consórcio? Ficou com alguma dúvida que gostaria de esclarecer? Então entre em contato pelas mídias sociais."
                }
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    font-size: 4rem;
    margin-bottom: 32px;
}

h2 {
    font-size: 3rem;
    margin-bottom: 32px;
    text-align: center;
}

h4 {
    font-size: 2rem;
    margin-bottom: 32px;
}

#contato {
    margin-top: -5rem;
}

.gray-wrapper {
    padding: 0 10rem;
    margin: 12rem -5rem auto -5rem;
    background: #e4e4e4;
}

.form-wrapper {
    transform: translateY(-4rem);
}

.doubt h2,
.social h4 {
    color: #131313;
}

.social {
    position: relative;
    text-align: center;
}

@media screen and (max-width: 768px) {
    #contato {
        margin: 0;
    }

    .gray-wrapper {
        margin: 0 -5rem;
        padding: 0 5rem;
    }

    .form-wrapper {
        transform: translateY(-2rem);
    }
}
</style>
