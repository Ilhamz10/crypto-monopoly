import { StonksIcon, ThreeDots } from '../../assets';
import { Label, WrapperCard } from '../../shared/UI';
import { GameRoom } from './components';
import cls from './quick-games.module.css';

const users = [
	{ src: '', name: 'user1' },
	{ src: '', name: 'user2' },
	undefined,
	undefined,
	undefined,
];

const game2 = [
	{ src: '', name: 'user1' },
	{ src: '', name: 'user2' },
	{ src: '', name: 'user3' },
	{ src: '', name: 'user4' },
	undefined,
	undefined,
	undefined,
];

export const QuickGames = () => {
	return (
		<section className={cls.quickGameSection}>
			<WrapperCard className={cls.allRoomsCard}>
				<div className={cls.quickGamesHeader}>
					<div className={cls.flex}>
						<Label type={'gradient'} text={'Свободные комнаты'} />
						<Label text={'Своя +'} />
					</div>
					<div className={cls.flex}>
						<Label
							text={
								<p>
									Количество игроков <StonksIcon />
								</p>
							}
						/>
						<Label
							text={
								<p>
									Ставка на игру <ThreeDots />
								</p>
							}
						/>
						<Label
							text={
								<p>
									Баланс в игре <ThreeDots />
								</p>
							}
						/>
					</div>
				</div>
				<div className={cls.allGames}>
					<GameRoom
						gameName={'Game 1'}
						gameBalance={1500}
						gameBet={15}
						playersCount={5}
						users={users}
					/>
					<GameRoom
						gameName={'Game 2'}
						gameBalance={2500}
						gameBet={10}
						playersCount={7}
						users={game2}
					/>
					<GameRoom
						gameName={'Game 3'}
						gameBalance={2500}
						gameBet={10}
						playersCount={7}
						users={game2}
					/>
				</div>
			</WrapperCard>
		</section>
	);
};
