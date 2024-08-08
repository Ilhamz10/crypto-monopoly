import { Link } from 'react-router-dom';
import cls from './button.module.css';

export const Button = ({
	children,
	type = 'filled',
	fillColor = '#e9ecff',
	textColor = '#000',
	variant = '',
	className = '',
	component = 'button',
	to = '/',
	gradientColors = ['#6fd4f2', '#796fee'],
	...props
}) => {
	if (component === 'button') {
		return (
			<button
				style={{
					'--grad-color-1': gradientColors[0],
					'--grad-color-2': gradientColors[1],
					'--fill-color': fillColor,
					'--text-color': textColor,
				}}
				className={`${cls.button} ${cls[type]} ${cls[variant]} ${className}`}
				{...props}>
				{children}
			</button>
		);
	}

	if (component === 'link') {
		return (
			<Link
				to={to}
				className={`${cls.button} ${cls[type]} ${cls[variant]} ${className}`}
				{...props}>
				{children}
			</Link>
		);
	}
};
