<template>
	<confirm
	id="confirm-pago"
	:text="confirm_text"
	btn_text="Confirmar"
	emit="registrarPago"
	not_show_delete_text
	@registrarPago="registrarPago"></confirm>
</template>
<script>
export default {
	components: {
		Confirm: () => import('@/common-vue/components/Confirm'),
	},
	computed: {
		commerce() {
			return this.$store.state.commerce.model 
		},
		confirm_text() {
			return '¿Seguro que quiere registrar un pago para '+this.commerce.company_name+'?'
		}
	},
	methods: {
		registrarPago() {
			this.$store.commit('auth/setLoading', true)
			this.$store.commit('auth/setMessage', 'Guardando')
			this.$api.post('commerce/register-payment/'+this.commerce.id)
			.then(res => {
				this.$store.commit('auth/setLoading', false)
				this.$store.commit('commerce/add', res.data.model)
			})
			.catch(err => {
				this.$store.commit('auth/setLoading', false)
				console.log(err)
			})
		}
	}
}
</script>