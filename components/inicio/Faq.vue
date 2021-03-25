<template>
	<div class="faq">
		<h1 class="faq__title">F.A.Q.</h1>
		<el-collapse v-model="activeFaq" class="faq__questions">
			<el-collapse-item
				v-for="question in faq"
				:key="question.name"
				:name="question.name"
				:title="question.title"
			>
				<div>
					{{ question.desc }}
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeFaq: [],
			faq: [
				{
					name: '1',
					title: 'O que é um consórcio?',
					desc:
						'O consórcio é a modalidade mais inteligente de compra parcelada de imóveis, uma forma colaborativa de poupar dinheiro em grupo. Você compartilha objetivos com outras pessoas e paga parcelas mensais para ter direito ao crédito.',
				},
				{
					name: '2',
					title: 'O que é a contemplação?',
					desc:
						'É o momento mais esperado em que o consorciado recebe o acessso a carta de crédito',
				},
				{
					name: '3',
					title: 'Como ocorrem as contemplações?',
					desc:
						'Mensalmente é marcada uma reunião com todos os membros do grupo, então um ou mais consorciados são selecionados (conforme o valor disponível em caixa) para receberem uma carta de crédito com o valor escolhido no contrato. Ocorrem de duas formas, por sorteio ou lance',
				},
				{
					name: '4',
					title: 'Qual consorciado será selecionado?',
					desc:
						'As seleções ocorrem de duas formas, por meio de sorteio ou por lance',
				},
				{
					name: '5',
					title: 'Sorteio? Lance?',
					desc:
						'O sorteio se baseia na loteria federal, já no caso dos lances é verificado os maiores percentuais pagos pelo consorciado, como em um leilão, que aumenta as chances de ser contemplado',
				},
				{
					name: '6',
					title: 'Quando serei contemplado?',
					desc:
						'Todos os membros do grupo serão contemplados até o fim do grupo, o sorteio apenas define uma ordem pra que isso aconteça. Mesmo depois de contemplado o consorciado continuará pagando as parcelas.',
				},
				{
					name: '7',
					title: 'E após ser contemplado?',
					desc:
						'Você recebe acesso a carta de crédito livre para rPFormar ou adquirir o seu bem material. Mesmo depois de contemplado o consorciado continuará pagando as parcelas até que se finde o contrato.',
				},
			],
		};
	},
};
</script>

<style scoped>
.faq {
	margin: 5em 0;
}

.faq__title {
	margin-bottom: 1em;
}

.faq__questions {
	margin: 0 5em;
}

@media screen and (max-width: 768px) {
	.faq__questions {
		margin: auto 1em;
	}
}
</style>
