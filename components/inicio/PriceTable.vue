<template>
	<div>
		<div class="price-table__header">
			<h1 class="price-table__title">Tabela de Créditos</h1>
		</div>
		<div class="table">
			<div class="sorts">
				<div class="sort-tab" v-for="sort in sorts" :key="sort.number1">
					<el-button plain @click="sortTable(sort.sort)"
						>Por {{ sort.title }}</el-button
					>
				</div>
			</div>
			<el-table :data="tableData" style="width: 100%;" stripe>
				<el-table-column prop="credito" label="Crédito"></el-table-column>
				<el-table-column prop="parcela" label="Parcela"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					credito: 'R$ 36.000,00',
					parcela: 'R$ 289,80',
					number1: 36000,
					number2: 289.8,
				},
				{
					credito: 'R$ 50.000,00',
					parcela: 'R$ 402,50',
					number1: 50000,
					number2: 402.5,
				},
				{
					credito: 'R$ 55.000,00',
					parcela: 'R$ 442,75',
					number1: 55000,
					number2: 442.75,
				},
				{
					credito: 'R$ 60.000,00',
					parcela: 'R$ 483,00',
					number1: 60000,
					number2: 482.0,
				},
				{
					credito: 'R$ 65.000,00',
					parcela: 'R$ 523,25',
					number1: 65000,
					number2: 523.25,
				},
				{
					credito: 'R$ 70.000,00',
					parcela: 'R$ 563,50',
					number1: 70000,
					number2: 563.5,
				},
				{
					credito: 'R$ 75.000,00',
					parcela: 'R$ 603,75',
					number1: 75000,
					number2: 603.75,
				},
				{
					credito: 'R$ 80.000,00',
					parcela: 'R$ 644,00',
					number1: 80000,
					number2: 644.0,
				},
				{
					credito: 'R$ 85.000,00',
					parcela: 'R$ 684,25',
					number1: 85000,
					number2: 684.25,
				},
				{
					credito: 'R$ 100.000,00',
					parcela: 'R$ 393,31',
					number1: 100000,
					number2: 393.31,
				},
				{
					credito: 'R$ 120.000,00',
					parcela: 'R$ 471,97',
					number1: 120000,
					number2: 471.97,
				},
				{
					credito: 'R$ 140.000,00',
					parcela: 'R$ 550,63',
					number1: 140000,
					number2: 550.63,
				},
				{
					credito: 'R$ 160.000,00',
					parcela: 'R$ 629,29',
					number1: 160000,
					number2: 629.29,
				},
				{
					credito: 'R$ 180.000,00',
					parcela: 'R$ 707,95',
					number1: 180000,
					number2: 707.95,
				},
				{
					credito: 'R$ 200.000,00',
					parcela: 'R$ 786,61',
					number1: 200000,
					number2: 786.61,
				},
				{
					credito: 'R$ 220.000,00',
					parcela: 'R$ 865,27',
					number1: 220000,
					number2: 865.27,
				},
				{
					credito: 'R$ 240.000,00',
					parcela: 'R$ 943,93',
					number1: 240000,
					number2: 943.93,
				},
				{
					credito: 'R$ 260.000,00',
					parcela: 'R$ 1.022,59',
					number1: 260000,
					number2: 1022.59,
				},
				{
					credito: 'R$ 280.000,00',
					parcela: 'R$ 1.101,26',
					number1: 280000,
					number2: 1101.26,
				},
				{
					credito: 'R$ 300.000,00',
					parcela: 'R$ 1.179,92',
					number1: 300000,
					number2: 1179.92,
				},
			],
			sorts: [
				{
					title: 'Crédito',
					sort: 'number1',
				},
				{
					title: 'Parcela',
					sort: 'number2',
				},
			],
		};
	},
	methods: {
		sortTable(prop) {
			this.tableData.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
		},
	},
};
</script>

<style lang="postcss" scoped>
.table {
	min-width: 100%;
	position: relative;
}

.price-table__title {
	line-height: 1.4em;
	margin: 1.4em 0;
	text-align: right;
}

.sorts {
	width: 100%;
	z-index: 1;
	display: flex;
	position: absolute;
	justify-content: space-around;
	align-content: center;
	top: -30px;
}

@screen sm {
	.sorts {
		top: 23px;
		right: 0;
		width: 260px;
	}
}

@media (max-width: 768) {
	.price-table__header {
		flex-direction: column;
		align-items: center;
	}
}
</style>
