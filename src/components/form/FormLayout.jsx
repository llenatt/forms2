import { InputField } from '../ui/InputField';
import styles from './formLayout.module.css';

export const FormLayout = ({ register, handleSubmit, sendFormData, errors, isValid }) => {
	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<InputField
					name="email"
					register={register}
					placeholder="Введите email"
					type="email"
					errors={errors.email?.message}
				/>
				<InputField
					name="password"
					register={register}
					placeholder="Введите пароль"
					type="password"
					errors={errors.password?.message}
				/>
				<InputField
					name="repeatedPassword"
					register={register}
					placeholder="Повторите пароль"
					type="password"
					errors={errors.repeatedPassword?.message}
				/>
				<button disabled={!isValid}>Регистрация</button>
			</form>
		</div>
	);
};
