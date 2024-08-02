import cls from './Input.module.css';

export const Input = ({ label, id, ...props }) => {
	return (
		<div className={cls.inputCont}>
			{label && <label htmlFor={id}>{label}</label>}
			<input type='text' id={id} {...props} />
		</div>
	);
};
