import { forwardRef } from 'react';
import cls from './Input.module.css';

export const Input = forwardRef(function Input({ label, id, ...props }, ref) {
	return (
		<div className={cls.inputCont}>
			{label && <label htmlFor={id}>{label}</label>}
			<input ref={ref} type='text' id={id} {...props} />
		</div>
	);
});
