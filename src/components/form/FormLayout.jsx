import styles from './formLayout.module.css';

export const FormLayout = ({ register, handleSubmit, errors, sendFormData }) => {
	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<input
					className={styles.input}
					name="email"
					type="email"
					placeholder="Email"
					{...register('email')}
				></input>

				<input
					className={styles.input}
					name="password"
					type="text"
					placeholder="Password"
					{...register('password')}
				></input>

				<input
					className={styles.input}
					name="repetedPassword"
					type="text"
					placeholder="Repeat your password"
					{...register('repetedPassword')}
				></input>
				<div className={styles.error}>{errors.email?.message}</div>
				<div className={styles.error}>{errors.password?.message}</div>
				<div className={styles.error}>{errors.repeatedPassword?.message}</div>
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
};
