import { jail, park, police } from '../../assets';
import { Button } from '../../shared/UI';
import { GameField } from './components';
import { GameInfoBoard } from './components/game-info-board/game-info-board';
import cls from './game-board.module.css';

export const GameBoard = () => {
	return (
		<div className={cls.GameBoard}>
			<GameInfoBoard />

			<>
				<GameField
					className={cls.field1}
					direction={'top'}
					labelBg='rgb(153, 191, 97)'
				/>
				<GameField
					className={cls.field2}
					direction={'top'}
					labelBg='rgb(153, 191, 97)'
					type='chance'
					onField={true}
				/>
				<GameField
					className={cls.field3}
					direction={'top'}
					labelBg='rgb(153, 191, 97)'
				/>
				<GameField
					className={cls.field4}
					direction={'top'}
					labelBg='rgb(153, 191, 97)'
				/>
				<GameField
					className={cls.field5}
					type='oponent'
					direction={'top'}
					labelBg='#C75057'
				/>
				<GameField
					className={cls.field6}
					direction={'top'}
					labelBg='rgb(113, 189, 227)'
				/>
				<GameField
					className={cls.field7}
					direction={'top'}
					labelBg='rgb(113, 189, 227)'
				/>
				<GameField className={cls.field8} direction={'top'} labelBg='#732718' />
				<GameField
					className={cls.field9}
					direction={'top'}
					labelBg='rgb(113, 189, 227)'
				/>
				<GameField
					className={cls.field10}
					direction={'right'}
					type='ownDeposit'
					labelBg='rgb(240, 138, 116)'
					onField={true}
				/>
				<GameField
					className={cls.field11}
					direction={'right'}
					labelBg='rgb(240, 138, 116)'
				/>
				<GameField
					className={cls.field12}
					direction={'right'}
					type='chest'
					labelBg='rgb(240, 138, 116)'
					onField={true}
				/>
				<GameField
					className={cls.field13}
					direction={'right'}
					labelBg='rgb(240, 138, 116)'
				/>
				<GameField
					className={cls.field14}
					direction={'right'}
					labelBg='#C75057'
				/>
				<GameField
					className={cls.field15}
					direction={'right'}
					type='chance'
					labelBg='rgb(240, 138, 116)'
					onField={true}
				/>
				<GameField
					className={cls.field16}
					direction={'right'}
					type='oponent'
					labelBg='#222222'
				/>
				<GameField
					className={cls.field17}
					direction={'right'}
					type='chest'
					labelBg='rgb(240, 138, 116)'
				/>
				<GameField
					className={cls.field18}
					direction={'right'}
					type='ownAuction'
					labelBg='rgb(34, 34, 34)'
					onField={true}
				/>
				<GameField
					className={cls.field19}
					direction={'bottom'}
					type='auction'
					labelBg='rgb(221, 141, 190)'
					onField={true}
				/>
				<GameField
					className={cls.field20}
					direction={'bottom'}
					type='chance'
					onField={true}
				/>
				<GameField
					className={cls.field21}
					direction={'bottom'}
					type='oponent'
					labelBg='rgb(221, 141, 190)'
				/>
				<GameField className={cls.field22} direction={'bottom'} type='chest' />
				<GameField
					className={cls.field23}
					direction={'bottom'}
					labelBg='rgb(221, 141, 190)'
				/>
				<GameField className={cls.field24} direction={'bottom'} />
				<GameField className={cls.field25} direction={'bottom'} type='chance' />
				<GameField direction={'bottom'} className={cls.field26} />
				<GameField
					type='own'
					direction={'bottom'}
					className={cls.field27}
					onField={true}
				/>
				<GameField
					type='oponent'
					className={cls.field28}
					labelBg='rgb(216, 181, 81)'
					direction={'left'}
					onField={true}
				/>
				<GameField
					className={cls.field29}
					labelBg='#732718'
					direction={'left'}
				/>
				<GameField
					className={cls.field30}
					type='oponent'
					labelBg='#BFA045'
					direction={'left'}
				/>
				<GameField
					className={cls.field31}
					type='oponent'
					labelBg='#BFA045'
					direction={'left'}
				/>
				<GameField
					className={cls.field32}
					labelBg='#C75057'
					direction={'left'}
				/>
				<GameField
					className={cls.field33}
					type='own'
					labelBg='#5B89D6'
					direction={'left'}
				/>
				<GameField className={cls.field34} type='chest' direction={'left'} />
				<GameField
					className={cls.field35}
					labelBg='#5B89D6'
					direction={'left'}
				/>
				<GameField
					className={cls.field36}
					labelBg='rgb(91, 137, 214)'
					direction={'left'}
				/>
			</>
			<div className={`${cls.field} ${cls.leftTop}`}>
				<div className={`${cls.cornerGradient}`}>
					<div
						style={{
							background:
								'linear-gradient(to bottom left, #99BF61 50%, #5B89D6 50%)',
						}}
						className={`${cls.corner}  ${cls.leftTop}`}
					/>
				</div>
				<div className={cls.park}>
					<img src={park} alt='' />
					<p>Бесплатная остановка</p>
				</div>
			</div>
			<div className={`${cls.field} ${cls.rightTop}`}>
				<div className={`${cls.cornerGradient}`}>
					<div
						style={{
							background:
								'linear-gradient(to bottom right, #71bde3 50%, #f08a74 50%)',
						}}
						className={`${cls.corner} ${cls.rightTop}`}
					/>
				</div>
				<div className={cls.police}>
					<img src={police} alt='' />
					<p>Отправляйтесь в тюрьму</p>
				</div>
			</div>
			<div className={`${cls.field} ${cls.rightBottom}`}>
				<div className={`${cls.cornerGradient}`}>
					<div
						style={{
							background:
								'linear-gradient(to top right, #DD8DBE 50%, #222222 50%)',
						}}
						className={`${cls.corner}  ${cls.rightBottom}`}
					/>
				</div>
				<div className={cls.round}>
					<Button type='gradient'>Круг</Button>
					<strong>+ 100 $</strong>
					<p>(еще 5 ходов)</p>
				</div>
			</div>
			<div className={`${cls.field} ${cls.leftBottom}`}>
				<div className={`${cls.cornerGradient}`}>
					<div
						style={{
							background:
								'linear-gradient(to top left, #65B99E 50%, #D8B551 50%)',
						}}
						className={`${cls.corner}  ${cls.leftBottom}`}
					/>
				</div>
				<img className={cls.jailImg} src={jail} alt='' />
			</div>
		</div>
	);
};
