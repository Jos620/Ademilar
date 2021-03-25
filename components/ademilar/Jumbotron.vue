<template>
	<div class="container">
		<h1>A Ademilar</h1>
		<span class="divider"></span>
		<div class="jumbotron__text description">
			<p>
				A Ademilar é a única administradora do Brasil a trabalhar exclusivamente com
				o consórcio de imóveis. Isso significa que em nossa sede, em Curitiba (PR),
				e nas mais de 78 unidades espalhadas pelo país, você encontrará uma equipe
				altamente especializada, além da confiança que você busca para tirar os
				projetos imobiliários do papel.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Jumbotron',
};
</script>

<style scoped>
h1 {
	font-family: 'Nunito', -apple-system, 'Segoe UI', Ubuntu, 'Open Sans',
		'Helvetica Neue', sans-serif;
}
@media screen and (max-width: 768px) {
	h1 {
		font-size: 3.2em;
	}
}
</style>
