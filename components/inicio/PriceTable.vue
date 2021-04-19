<template>
	<div class="table-wrapper">
		<div class="price-table__header">
			<h1 class="price-table__title">Tabela de Créditos</h1>
		</div>
        <div>
            <div class="grid grid-cols-3 gap-12">
                <div>
                    <!-- TODO: terminar os filtros -->
                    <h3 class="text-4xl font-bold mb-4">Filtros</h3>
                    <div class="grid grid-cols-2">
                        <div>
                            <img src="~/assets/svg/tabela/motorcycle.svg" alt="Motos" class="h-32">
                        </div>
                    </div>
                </div>
                <el-table class="col-span-2" :data="tableData" height="500" stripe>
                    <el-table-column prop="valor" label="Crédito" width="auto"></el-table-column>
                    <el-table-column prop="parcela" label="Parcela" width="auto"></el-table-column>
                    <el-table-column prop="promo" label="Promocional" width="auto"></el-table-column>
                    <el-table-column prop="meses" label="Meses" width="130"></el-table-column>
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
