<template>
<div>
	<register-payment></register-payment>

	<view-component
	model_name="commerce">
		<template #table_right_options="data">
			<buttons
			:commerce="data.model"></buttons>	
		</template>
	</view-component>	
</div>
</template>
<script>
export default {
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index'),
		RegisterPayment: () => import('@/components/commerce/modals/RegisterPayment'),
		Buttons: () => import('@/components/commerce/components/Buttons'),
	}
}
</script>