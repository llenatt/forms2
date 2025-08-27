import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormLayout } from './FormLayout';

const sendFormData = (formData) => {
	console.log({ ...formData });
};

const schema = yup.object({
	email: yup
		.string()
		.required('Введите email')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'Введён email неверного формата',
		),
	password: yup
		.string()
		.required('Введите пароль')
		.min(6, 'Пароль должен содержать минимум 6 символов'),
	repeatedPassword: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatedPassword: '',
		},
		resolver: yupResolver(schema),
	});
	return (
		<div>
			<FormLayout
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
				sendFormData={sendFormData}
				isValid={isValid}
			/>
		</div>
	);
};
