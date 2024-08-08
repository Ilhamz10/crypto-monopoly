import cls from './mini-info-board.module.css';

export const MiniInfoBoard = () => {
	return (
		<div className={cls.board}>
			<div className={cls.boardContent}>
				<div className={cls.center} />
				<div className={`${cls['corner-field']} ${cls.leftTop}`} />
				<div className={`${cls['corner-field']} ${cls.rightTop}`} />
				<div className={`${cls['corner-field']} ${cls.leftBottom}`} />
				<div className={`${cls['corner-field']} ${cls.rightBottom}`} />
				<div className={cls.topFields}>
					<div className={`${cls.topField} ${cls.empty}`} />
					<div className={`${cls.topField} ${cls.none}`} />
					<div className={`${cls.topField} ${cls.empty}`} />
					<div className={`${cls.topField} ${cls.oponent}`} />
					<div className={`${cls.topField} ${cls.empty}`} />
					<div className={`${cls.topField} ${cls.own}`} />
					<div className={`${cls.topField} ${cls.oponent}`} />
					<div className={`${cls.topField} ${cls.empty}`} />
					<div className={`${cls.topField} ${cls.own}`} />
				</div>
				<div className={cls.rightFields}>
					<div className={`${cls.rightField} ${cls.oponent}`} />
					<div className={`${cls.rightField} ${cls.empty}`} />
					<div className={`${cls.rightField} ${cls.none}`} />
					<div className={`${cls.rightField} ${cls.own}`} />
					<div className={`${cls.rightField} ${cls.empty}`} />
					<div className={`${cls.rightField} ${cls.none}`} />
					<div className={`${cls.rightField} ${cls.oponent}`} />
					<div className={`${cls.rightField} ${cls.none}`} />
					<div className={`${cls.rightField} ${cls.empty}`} />
				</div>
				<div className={cls.bottomFields}>
					<div className={`${cls.bottomField} ${cls.empty}`} />
					<div className={`${cls.bottomField} ${cls.none}`} />
					<div className={`${cls.bottomField} ${cls.empty}`} />
					<div className={`${cls.bottomField} ${cls.none}`} />
					<div className={`${cls.bottomField} ${cls.empty}`} />
					<div className={`${cls.bottomField} ${cls.own}`} />
					<div className={`${cls.bottomField} ${cls.none}`} />
					<div className={`${cls.bottomField} ${cls.empty}`} />
					<div className={`${cls.bottomField} ${cls.own}`} />
				</div>
				<div className={cls.leftFields}>
					<div className={`${cls.leftField} ${cls.empty}`} />
					<div className={`${cls.leftField} ${cls.oponent}`} />
					<div className={`${cls.leftField} ${cls.empty}`} />
					<div className={`${cls.leftField} ${cls.own}`} />
					<div className={`${cls.leftField} ${cls.empty}`} />
					<div className={`${cls.leftField} ${cls.own}`} />
					<div className={`${cls.leftField} ${cls.none}`} />
					<div className={`${cls.leftField} ${cls.empty}`} />
					<div className={`${cls.leftField} ${cls.own}`} />
				</div>
			</div>
		</div>
	);
};
