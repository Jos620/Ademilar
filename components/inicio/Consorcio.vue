<template>
	<div>
		<h1 class="consorcio__title">Mas, Como o Consórcio Funciona Na Ademilar?</h1>
		<p class="consorcio__desc">
			Na Ademilar, o consórcio funciona da seguinte maneira:
		</p>
		<div class="consorcio__timeline">
			<timeline />
		</div>
		<p class="consorcio__desc">
			É muito simples e, ao mesmo tempo é um excelente modo de adiquirir e
			conquistar suas metas e sonhos.
		</p>
	</div>
</template>

<script>
import Timeline from './Timeline';
export default {
	components: { Timeline },
};
</script>

<style scoped>
.consorcio__title {
	line-height: 1.4em;
	margin-bottom: 1em;
	text-align: center;
}

.consorcio__desc {
	font-size: 20px;
	text-indent: 30px;
	line-height: 30px;
	margin-bottom: 10px;
	color: #272727;
}
</style>
