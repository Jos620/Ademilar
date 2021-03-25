<template>
	<div id="ademilar">
		<section id="jumbotron">
			<jumbotron />
		</section>

		<section id="features">
			<features />
		</section>

		<section>
			<div class="mb-8 description">
				<p>
					Considerada pioneira no seguimento, a Ademilar lida apenas com consórcio
					imobiliário, se tornando assim uma das 10 maiores administradoras de
					consórcio.
					<span class="source text-accent-200">Fonte: Banco Central</span>
				</p>

				<p style="margin-bottom:30px;">
					Atendimento personalizado, focado na experiência do consorciado, oferecemos
					acessoria em todos os passos do processor, indo desde compra da cota até a
					contemplação.
				</p>
			</div>
		</section>

		<section id="missao">
			<missao />
		</section>

		<section id="valores">
			<valores />
		</section>
	</div>
</template>

<script>
import Jumbotron from '@/components/ademilar/Jumbotron.vue';
import Features from '@/components/ademilar/Features.vue';
import Missao from '@/components/ademilar/Missao.vue';
import Valores from '@/components/ademilar/Valores.vue';
export default {
	components: {
		Jumbotron,
		Features,
		Missao,
		Valores,
	},
	name: 'Ademilar',
};
</script>

<style scoped>
h1 {
	text-align: center;
	font-family: 'Nunito', Avenir, Helvetica, sans-serif;
}

.source {
	font-size: 0.8rem;
}

@media screen and (max-width: 768px) {
	.features__background {
		height: 100vh;
	}
}
</style>
