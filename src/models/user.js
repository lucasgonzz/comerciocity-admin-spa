export default {
	properties: [
		{
			text: 'Nombre',
			key: 'name',
			type: 'text',
			value: '',
			is_title: true,
		},
		{ 
			text: 'Nombre de la empresa',
			key: 'company_name',
			type: 'text',
			value: '',
			show: true,
		},
		{ 
			text: 'Pago',
			key: 'payment_expired_at',
			type: 'date',
			is_date: true,
		},
		{
			text: 'Telefono',
			key: 'phone',
			type: 'text',
			value: '',
			not_show: true,
		},
		{
			text: 'N° documento',
			key: 'doc_number',
			type: 'text',
			value: '',
			show: true,
		},
		{
			text: 'Correo electronico',
			key: 'email',
			type: 'text',
			value: '',
			not_show: true,
		},
		{
			text: 'Direccion',
			key: 'address',
			type: 'text',
			value: '',
			not_show: true,
		},
		{
			text: 'Empleados',
			key: 'employees',
			has_many: {
				text: 'Empleado',
				model_name: 'commerce',
				props_to_show: [
					{
						text: 'Nombre',
						key: 'name',
						type: 'text',
					},
					{
						text: 'Documento',
						key: 'doc_number',
						type: 'text',
					},
					{
						text: 'Contraseña',
						key: 'visible_password',
						type: 'text',
					},
				],
			}
		},
	],
	singular_model_name_spanish: 'Comercio',
	plural_model_name_spanish: 'Comercios',
	create_model_name_spanish: 'Nuevo',
	text_delete: 'el',
}