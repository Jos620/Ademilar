<template>
	<a
		:href="media.link"
		:class="
			`h-16 w-40 rounded-xl inline-flex justify-center items-center align-middle ${media.name}`
		"
	>
		<img
			:src="icon"
			:width="media.name == 'facebook' ? 36 : media.name == 'instagram' ? 26 : 30"
			class="mr-4"
		/>
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: 'MediaButton',
	props: {
		media: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			icon: require(`@/assets/svg/social/${this.media.name}.svg`),
		};
	},
};
</script>

<style lang="postcss" scoped>
* {
	color: white;
	transition: 0.2s;
}

img {
	display: inline;
}

.whatsapp {
	@apply bg-green-400;
	@apply hover:bg-green-500;
}

.facebook {
	@apply bg-blue-400;
	@apply hover:bg-blue-500;
}

.instagram {
	@apply bg-gradient-to-br from-pink-400 to-purple-400;
	@apply hover:from-pink-500 hover:to-purple-500;
}
</style>
