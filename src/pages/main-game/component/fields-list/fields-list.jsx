import { ReturnActiveFieldIcon, SearchIcon } from '../../../../assets';
import CollapsibleCard from '../../../../shared/UI/collapsible-card/collapsible-card';
import { MiniInfoBoard } from '../../UI/mini-info-board/mini-info-board';
import cls from './fields-list.module.css';

export const FieldsList = () => {
	return (
		<div className={cls.side}>
			<CollapsibleCard
				title={'Список полей'}
				Icon1={SearchIcon}
				Icon2={ReturnActiveFieldIcon}
				icon1Size={[13.24, 13.56]}
				icon2Size={[14, 14]}>
				<div className={cls.allFields}>
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
					<MiniInfoBoard />
				</div>
			</CollapsibleCard>
		</div>
	);
};
