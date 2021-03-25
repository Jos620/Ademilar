<template>
	<div class="container">
		<h1>Missão</h1>
		<span class="divider"></span>
		<div class="missao__text description">
			<p>
				Levar pessoas a conquistarem os seus sonhos através de aquisições planejadas
				de imóveis, incentivando a reforma, construção e a formação de novos
				patrimônios.
			</p>
		</div>
		<div
			class="
				luiza
				bg-gradient-to-br
				from-yellow-400 to-primary-300
				via-secondary-400
				rounded-xl
				p-1 
				md:p-2 
				mt-12
				mb-16
				hidden
				md:inline"
			data-aos="fade-in"
		>
			<div
				class="luiza__background rounded-xl flex justify-center items-center"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'missao',
};
</script>

<style scoped>
.luiza__background {
	width: 74vw;
	height: 60vh;
	background-image: url('../../assets/img/LuizaPossi.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 90%;
}

p {
	margin-bottom: 30px;
}
</style>
