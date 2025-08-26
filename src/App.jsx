import styles from './app.module.css';
import { Form } from './components/form/Form.jsx';
export const App = () => {
	return (
		<div className={styles.appContainer}>
			<label>Регистрация</label>
			<Form />
		</div>
	);
};
