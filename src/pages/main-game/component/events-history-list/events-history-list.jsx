import { RightArrowIcon } from '../../../../assets';
import CollapsibleCard from '../../../../shared/UI/collapsible-card/collapsible-card';
import { Event } from '../../UI/event/event';
import cls from './events-history-list.module.css';

export const EventsHistoryList = () => {
	return (
		<div className={cls.side}>
			<CollapsibleCard
				btnClassname={cls.iconBtn}
				title={'История событий'}
				Icon1={RightArrowIcon}
				Icon2={RightArrowIcon}>
				<div className={cls.allEvents}>
					<Event
						btnColor={'#F9D15E80'}
						date={'09.09.23 12:32'}
						dateColor={'#D09337'}
						fieldColor={'#FFEFD3'}
						withButton={true}>
						<p>
							Татьяна Л. выставила карту «Москва» с поля <strong>№5678</strong>{' '}
							на аукцион
						</p>
					</Event>
					<Event
						date={'09.09.23 12:32'}
						dateColor={'#9375FF'}
						fieldColor={'#DCDAFF'}>
						<p>
							Открыто новое поле <strong>№50649</strong>
						</p>
					</Event>
					<Event
						date={'09.09.23 12:32'}
						dateColor={'#FF3A3A'}
						fieldColor={'#F8D6DC'}>
						<p>
							Евгений С. купил карту «Санкт-Петербург»‎‎ на поле{' '}
							<strong>№25467</strong>
						</p>
					</Event>
					<Event
						date={'09.09.23 12:32'}
						dateColor={'#9375FF'}
						fieldColor={'#DCDAFF'}>
						<p>
							Открыто новое поле <strong>№50649</strong>
						</p>
					</Event>
					<Event
						date={'09.09.23 12:32'}
						dateColor={'#FF3A3A'}
						fieldColor={'#F8D6DC'}>
						<p>
							Евгений С. купил карту «Санкт-Петербург»‎‎ на поле{' '}
							<strong>№25467</strong>
						</p>
					</Event>
				</div>
			</CollapsibleCard>
		</div>
	);
};
