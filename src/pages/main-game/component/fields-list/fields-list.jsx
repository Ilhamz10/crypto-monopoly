import { ReturnActiveFieldIcon, SearchIcon } from '../../../../assets';
import CollapsibleCard from '../../../../shared/UI/collapsible-card/collapsible-card';
import field from '../../assets/imgs/field.png';
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
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
					<img src={field} alt='' />
				</div>
			</CollapsibleCard>
		</div>
	);
};
