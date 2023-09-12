<template>
	<div
	class="m-l-15">
		<b-button
		@click.stop="pago"
		variant="success">
			Pago
		</b-button>
	</div>
</template>
<script>
export default {
	props: {
		commerce: Object,
	},
	components: {
		Confirm: () => import('@/common-vue/components/Confirm'),
	},
	methods: {
		pago() {
			this.$store.commit('commerce/setModel', {model: this.commerce, properties: []})
			this.$bvModal.show('confirm-pago')
		},
	}
}
</script>