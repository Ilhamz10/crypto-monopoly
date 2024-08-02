import cls from './info-board-label.module.css';

export const InfoBoardLabel = ({
	labelColor,
	borderColor = '#ACBADB',
    children
}) => {
	return (
		<div
			style={{ background: labelColor, '--border-color': borderColor }}
			className={cls.label}>
			{children}
		</div>
	);
};
