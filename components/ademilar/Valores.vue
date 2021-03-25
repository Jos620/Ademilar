<template>
    <div class="container">
        <h1>Valores</h1>
        <span class="divider"></span>
        <div
            class="values__text min-w-full mt-8 grid md:grid-cols-2 grid-rows-2"
        >
            <div
                class="mb-24 mx-24"
                v-for="(valor, i) in valores"
                :key="valor.titulo"
                :data-aos="i % 2 == 0 ? 'fade-right' : 'fade-left'"
                data-aos-duration="1000"
            >
                <h3>
                    {{ valor.titulo }}
                </h3>
                <p>
                    {{ valor.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Values",
    data() {
        return {
            valores: [
                {
                    titulo: "Agilidade",
                    desc:
                        "A Ademilar prima por rapidez, iniciativa, perseverança e dinamismo em todas as suas ações."
                },
                {
                    titulo: "Honestidade",
                    desc:
                        "A honestidade se traduz em princípios transparentes, íntegros, éticos e autênticos, que transmitem a confiabilidade da marca."
                },
                {
                    titulo: "Responsabilidade",
                    desc:
                        "A Ademilar está comprometida e segura com o que oferece porque acredita em seus produtos e na realização dos projetos dos seus clientes."
                },
                {
                    titulo: "Resultados",
                    desc:
                        "A Ademilar busca evoluir continuamente para cumprir suas obrigações junto aos clientes e superar as expectativas em relação ao trabalho que oferece."
                },
                {
                    titulo: "Organização",
                    desc:
                        "Disciplina interna em todos os processos e clareza na comunicação mostram uma empresa sempre disposta a oferecer o melhor aos clientes."
                },
                {
                    titulo: "Transparência",
                    desc: "É uma postura permanentemente adotada pela Ademilar."
                },
                {
                    titulo: "Ética",
                    desc:
                        "Todas as atitudes da Ademilar são pautadas em uma postura ética e humana."
                },
                {
                    titulo: "Perceria",
                    desc:
                        "A proximidade com os colaboradores, a equipe de vendas e os clientes é baseada em empatia e em um relacionamento personalizado."
                }
            ]
        };
    }
};
</script>

<style scoped>
h3 {
    letter-spacing: normal;
    font-size: 3rem;
    text-align: right;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid red;
}

p {
    text-indent: 0;
    text-align: left;
}
</style>
