import { moneyBag } from '../../assets';
import { AchivmentsCard, QuickGames, TopUsers } from '../../models';
import { Button, WrapperCard } from '../../shared/UI';

import cls from './quick-game.module.css';

export const QuickGame = () => {
	return (
		<section>
			<div className='wrapper'>
				<div className={cls.quickGameCont}>
					<div className={cls.quickGameUserInfo}>
						<WrapperCard className={cls.referalCard}>
							<div className={cls.cardBody}>
								<div className={cls.cardInfo}>
									<p>
										Пригласи друга в игру и получи <br />{' '}
										<b>на счет до 150 $</b>
									</p>
									<div className={cls.cardButtons}>
										<Button className={cls.cardBtnGradient}>
											Пригласить друга
										</Button>
										<Button>Закрыть</Button>
									</div>
								</div>
								<img src={moneyBag} alt='Money bag' />
							</div>
							<img className={cls.bgMoneyBag} src={moneyBag} alt='Money bag' />
						</WrapperCard>
						<AchivmentsCard />
						<TopUsers />
					</div>
					<QuickGames />
				</div>
			</div>
		</section>
	);
};
