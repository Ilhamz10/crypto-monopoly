import cls from './game-filed.module.css';

import fieldBg from '../../assets/images/field1-bg.png';
import ChestIcon from '../../assets/images/chest-icon.svg?react';
import ChanceIcon from '../../assets/images/chance-icon.svg?react';

import { LeftSoleIcon, RightSoleIcon } from '../../../../assets';
import { motion } from 'framer-motion';

export const GameField = ({
	direction,
	className,
	labelBg = '#65b99e',
	blurBg = '#f8f9ff40',
	type = 'normal',
	onField = false,
}) => {
	return (
		<div
			style={
				type === 'chance'
					? { background: '#E7EFFD' }
					: type !== 'chest'
					? { background: `url(${fieldBg}) center/cover no-repeat` }
					: {}
			}
			className={`${cls.field} ${cls[direction]} ${className} ${cls[type]}`}>
			{type === 'chest' && <ChestIcon className={cls.backgroundIcon} />}
			<div className={cls.fieldText}>
				{onField && (
					<div className={cls.onFieldIndicatorCont}>
						<div className={cls.onFieldIndicator}></div>
					</div>
				)}
				{type === 'chance' ? (
					<ChanceIcon width={30} height={30} />
				) : type === 'chest' ? (
					<ChestIcon width={30} height={30} />
				) : (
					<p>Йокогама</p>
				)}
			</div>
			<div style={{ '--blur-bg': blurBg }} className={cls.blurBg} />
			{type !== 'chance' && type !== 'chest' && (
				<div className={cls.gradient} />
			)}
			<div style={{ '--label-bg': labelBg }} className={cls.label}>
				{type === 'chance' ? (
					<p>Шанс</p>
				) : type === 'chest' ? (
					<p>Казна</p>
				) : (
					<p>10$</p>
				)}
			</div>
			{onField && (
				<div className={cls.onField}>
					<div className={cls.solesIcons}>
						<motion.div
							style={{ display: 'inline' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1] }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 1,
							}}>
							<LeftSoleIcon width={7} height={17} />
						</motion.div>
						<motion.div
							style={{ display: 'inline' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1] }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 1,
								delay: 1,
							}}>
							<RightSoleIcon width={7} height={17} />
						</motion.div>
					</div>
				</div>
			)}
		</div>
	);
};
