import { MIcon } from '../../../../assets';
import { Label, WrapperCard } from '../../../../shared/UI';
import { UserInGameRoom } from '../../UI';
import cls from './game-room.module.css';

export const GameRoom = ({
	gameName,
	playersCount,
	gameBet,
	gameBalance,
	users,
}) => {
	return (
		<WrapperCard className={cls.game}>
			<div className={cls.gameHeader}>
				<h3>{gameName}</h3>
				<div className={cls.gameInfo}>
					<Label
						className={cls.gameRoomLabel}
						text={`Игроков: ${playersCount}`}
					/>
					<Label className={cls.gameRoomLabel} text={`Ставка: ${gameBet} $`} />
					<Label
						className={cls.gameRoomLabel}
						text={
							<p>
								Баланс игрока: {gameBalance} <MIcon width={18} height={18} />
							</p>
						}
					/>
				</div>
			</div>
			<div className={cls.roomUsers}>
				{users.map((user, index) => (
					<UserInGameRoom key={index} user={user} />
				))}
				{Array.from(Array(10 - playersCount).keys()).map((_, index) => <div className={cls.empPlace} key={index + playersCount}/>)}
			</div>
		</WrapperCard>
	);
};
