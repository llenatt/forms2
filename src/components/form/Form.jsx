import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormLayout } from './FormLayout';

const sendFormData = (formData) => {
	console.log(formData);
};
const schema = yup.object({
	email: yup
		.string()
		.required('Введите email')
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			'Неверный формат. Пример: example@mail.com',
		),
	password: yup
		.string()
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.required('Введите пароль'),
	repetedPassword: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repetedPassword: '',
		},
		resolver: yupResolver(schema),
	});

	return (
		<div>
			<FormLayout
				register={register}
				handleSubmit={handleSubmit}
				sendFormData={sendFormData}
				errors={errors}
			/>
		</div>
	);
};
