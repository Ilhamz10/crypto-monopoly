import { BalanceIcon } from '../../../assets';
import cls from './balance.module.css';

export const Balance = ({balance}) => {
	return (
		<div className={cls.balanceCont}>
			<div className={cls.balanceText}>
				<BalanceIcon width={17} height={15.7} /> <p>Баланс</p>
			</div>
			<p className={cls.balance}>{balance} $</p>
		</div>
	);
};
