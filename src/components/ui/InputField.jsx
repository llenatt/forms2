import styles from './input.module.css';

export const InputField = ({ type, placeholder, name, register, errors }) => {
	return (
		<div className={styles.inputContainer}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				{...register(name)}
			/>
			{errors && <div className={styles.error}>{errors}</div>}
		</div>
	);
};
