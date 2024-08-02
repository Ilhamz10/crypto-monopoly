import { GameBoard } from '../../models';
import { EventsHistoryList } from './component/events-history-list/events-history-list';
import { FieldsList } from './component/fields-list/fields-list';
import cls from './main-game.module.css';

export const MainGame = () => {
	return (
		<section className={cls.MainGameSection}>
			<div className='wrapper'>
				<div className={cls.mainGameCont}>
					<FieldsList />
					<div>
						<GameBoard />
					</div>
					<EventsHistoryList />
				</div>
			</div>
		</section>
	);
};
