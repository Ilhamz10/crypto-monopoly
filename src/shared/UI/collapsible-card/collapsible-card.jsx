import { Button } from '../button/button';
import { useState } from 'react';

import cls from './collapsible-card.module.css';

const CollapsibleCard = ({
	children,
	title,
	Icon1,
	Icon2,
	btnClassname,
	icon1Size = [12, 13],
	icon2Size = [12, 13],
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={cls.collapsible}>
			<div className={cls.cardHeader}>
				<div className={cls.label}>{title}</div>
				<div className={cls.btns}>
					<Button className={`${cls.btn} ${btnClassname}`} type='outline'>
						{Icon1 && <Icon1 width={icon1Size[0]} height={icon1Size[1]} />}
					</Button>
					<Button className={`${cls.btn} ${btnClassname}`} type='outline'>
						{Icon2 && <Icon2 width={icon2Size[0]} height={icon2Size[1]} />}
					</Button>
				</div>
			</div>
			<div className={`${cls.collapseBody} ${isOpen ? cls.open : ''}`}>
				<div>{children}</div>
			</div>
			<Button
				onClick={() => setIsOpen((prev) => !prev)}
				className={cls.collapseBtn}
				type='outline'>
				Развернуть
			</Button>
		</div>
	);
};

export default CollapsibleCard;
