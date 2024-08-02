import { RightArrowIcon } from '../../../../assets';
import { Button } from '../../../../shared/UI';
import { GameInfoBoardCorners } from '../../UI';
import cls from './game-info-board.module.css';
import { InfoBoardLabel } from './UI/Label/info-board-label';

export const GameInfoBoard = ({
	labelColors = ['transparent', '#65B99E'],
	labelTextColors = ['#000000', '#ffffff'],
}) => {
	return (
		<div className={cls.gameInfoBoard}>
			<div className={cls['game-info-board-bg']}>
				<div>
					<p className={cls.fieldNumber}>Поле № 25356</p>
					<h3 className={cls.infoBoardTitle}>
						Заплатите налог в мировую казну
					</h3>
					<div className={cls.infoCardBtns}>
						<Button>Заплатить 5 $</Button>
						<Button type='outline'>Автоналог (30 мин)</Button>
					</div>
				</div>
				<div style={{ background: '#E9ECFF' }} className={cls.infoBoardCard}>
					<div className={cls.infoBoardWrapper}>
						<div className={cls.infoCardLabels}>
							<InfoBoardLabel labelColor={labelColors[0]}>
								<p
									style={{ color: labelTextColors[0] }}
									className={cls.cityName}>
									Санкт-Петербург
								</p>
							</InfoBoardLabel>
							<InfoBoardLabel
								labelColor={labelColors[1]}
								borderColor='transparent'>
								<p
									style={{ color: labelTextColors[1] }}
									className={cls.countryName}>
									Санкт-Петербург
								</p>
							</InfoBoardLabel>
						</div>
						<div className={cls.allLabelsCont}>
							<div className={cls.allLabelsTitles}>
								<p>Характеристики карты</p>
								<p>Стоимость недвижимости</p>
							</div>
							<div className={cls.allLabels}>
								<InfoBoardLabel>
									<div className={cls.boardLabel}>
										<p>Налог</p>
										<p>5 $</p>
									</div>
								</InfoBoardLabel>
								<InfoBoardLabel>
									<div className={cls.boardLabel}>
										<p>Стоимость дома</p>
										<p>5 $</p>
									</div>
								</InfoBoardLabel>
								<InfoBoardLabel>
									<div className={cls.boardLabel}>
										<p>С коллекцией</p>
										<p>5 $</p>
									</div>
								</InfoBoardLabel>
								<InfoBoardLabel>
									<div className={cls.boardLabel}>
										<p>Стоимость отеля</p>
										<p>5 $</p>
									</div>
								</InfoBoardLabel>
								<InfoBoardLabel>
									<div className={cls.boardLabel}>
										<p>С 1 домом</p>
										<p>5 $</p>
									</div>
								</InfoBoardLabel>
							</div>
						</div>
					</div>
					<div className={cls.allLabelsFooter}>
						<div className={cls.footerBtns}>
							<Button component='link' to='auction' className={cls.footerBtn}>
								Аукцион <RightArrowIcon width={6} height={6} />
							</Button>
							<Button component='link' to='deposit' className={cls.footerBtn}>
								Карты в залоге <RightArrowIcon width={6} height={6} />
							</Button>
						</div>
						<p>
							Вы в топе: <strong>№521094</strong>
						</p>
					</div>
				</div>
			</div>
			<GameInfoBoardCorners />
		</div>
	);
};
