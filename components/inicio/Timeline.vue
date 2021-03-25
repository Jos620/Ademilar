<template>
    <el-timeline class="consorcio__steps">
        <el-timeline-item
            :timestamp="passo.estampa"
            placement="top"
            v-for="(passo, i) in passos"
            :key="passo.desc"
            class="pl-6"
            :data-aos="i % 2 == 0 ? 'fade-left' : 'fade-right'"
        >
            <el-card class="consorcio__card rounded-lg md:p-4 py-6">
                <h2>{{ passo.titulo }}</h2>
                <p>{{ passo.desc }}</p>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<script>
export default {
    data() {
        return {
            passos: [
                {
                    titulo: "Assinatura de Contrato",
                    desc:
                        "Você escolhe o plano que melhor se encaixa em suas necessidades e assina um contrato com a Ademilar",
                    estampa: "Primeiro"
                },
                {
                    titulo: "Pagamento de Parcelas",
                    desc:
                        "Você se torna então um consorciado e começa a pagar as parcelas estipuladas no seu plano aguardando ser contemplado",
                    estampa: "Segundo"
                },
                {
                    titulo: "Contemplação",
                    desc:
                        "Você é contemplado e recebe acesso a carta de crédito com o valor selecionado, pronto para reformar, construir ou comprar o tão desejado bem",
                    estampa: "Terceiro"
                }
            ]
        };
    }
};
</script>

<style scoped>
.consorcio__steps {
    margin: 5em 3em;
}

.consorcio__steps h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.consorcio__steps p {
    font-size: 15px;
}

@media screen and (max-width: 768px) {
    .consorcio__steps {
        width: 80vw;
        margin: 60px 1rem;
    }

    h2 {
        text-align: center;
    }

    .consorcio__steps p {
        text-indent: 0%;
    }
}
</style>
