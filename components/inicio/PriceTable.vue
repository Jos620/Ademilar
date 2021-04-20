<template>
	<div class="table-wrapper">
		<div class="price-table__header">
			<h1 class="price-table__title">Tabela de Créditos</h1>
		</div>
        <div>
            <div class="grid lg:grid-cols-4 gap-12 place-items-center">
                <div class="mt-12">
                    <!-- TODO: terminar os filtros -->
                    <div class="flex lg:grid gap-8 grid-cols-1 place-items-center">
                        <img @click="filterTable('motorcycle')" src="~/assets/svg/tabela/motorcycle.svg" alt="Motos" class="sort">
                        <img @click="filterTable('car')" src="~/assets/svg/tabela/car.svg" alt="Motos" class="sort">
                        <img @click="filterTable('truck')" src="~/assets/svg/tabela/truck.svg" alt="Motos" class="sort">
                        <img @click="filterTable('house')" src="~/assets/svg/tabela/house.svg" alt="Motos" class="sort">
                    </div>
                </div>
                <el-table class="col-span-3" :data="activeTable" height="500" stripe>
                    <el-table-column prop="valor" label="Crédito" width="150"></el-table-column>
                    <el-table-column prop="parcela" label="Parcela" width="130"></el-table-column>
                    <el-table-column prop="promo" label="Promocional" width="200"></el-table-column>
                    <el-table-column prop="meses" label="Meses" width="120"></el-table-column>
                    <el-table-column width="150">
                        <template>
                            <a href="https://api.whatsapp.com/send?phone=554196006993&text=Oi%2C%20gostaria%20de%20simular%20um%20consórcio!" target="_blank">
                                <el-button type="primary" icon="el-icon-s-promotion">Contato</el-button>
                            </a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
	</div>
</template>

<script>
import db from '~/plugins/fb';
export default {
	data() {
		return {
			tableData: [],
			activeTable: undefined
		};
	},

	methods: {
		sortTable(prop) {
			this.tableData.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
		},

		filterTable(prop) {
			this.activeTable = this.tableData.filter(item => item['filter'] == prop);
		}
	},

	mounted() {
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
			this.activeTable = this.tableData;

		})
	}
};
</script>

<style lang="postcss" scoped>
.sort {
	@apply h-32 p-4;
	@apply border-2 border-primary-400;
	@apply cursor-pointer rounded-md;
}

.price-table__title {
	line-height: 1.4em;
	margin: 1.4em 0;
	text-align: right;
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
