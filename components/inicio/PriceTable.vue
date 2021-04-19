<template>
	<div class="table-wrapper">
		<div class="price-table__header">
			<h1 class="price-table__title">Tabela de Créditos</h1>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%" height="500" stripe>
				<el-table-column prop="valor" label="Crédito"></el-table-column>
				<el-table-column prop="parcela" label="Parcela"></el-table-column>
				<el-table-column prop="promo" label="Promocional"></el-table-column>
				<el-table-column prop="meses" label="Meses"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import db from '~/plugins/fb';
export default {
	data() {
		return {
			tableData: [],
		};
	},
	methods: {
		sortTable(prop) {
			this.tableData.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
		}
	},

	created() {
		db.collection("tabela").onSnapshot(res => {
			const changes = res.docChanges();
			changes.forEach(change => {
				if (change.type === 'added') {
					this.tableData.push({
						...change.doc.data(),
						id: change.doc.id,
					})
				};
			});

			this.sortTable('num');
		})
	}
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
