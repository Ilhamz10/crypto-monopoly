import cls from './event.module.css';
export const Event = ({
	withButton,
	btnColor,
	fieldColor,
	dateColor,
	children,
	date,
}) => {
	return (
		<div style={{ background: fieldColor }} className={cls.event}>
			<div style={{ color: dateColor }} className={cls.date}>
				{date}
			</div>
			<div className={cls.message}>{children}</div>
			{withButton && (
				<button style={{ background: btnColor }} className={cls.eventBtn}>
					Ознакомиться с торгами
				</button>
			)}
		</div>
	);
};
