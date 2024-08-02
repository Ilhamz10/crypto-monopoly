import cls from './label.module.css';

export const Label = ({ text, type, onClick, className }) => {
	return (
		<div onClick={onClick} className={`${cls.label} ${cls[type]} ${className}`}>
			{text}
		</div>
	);
};
