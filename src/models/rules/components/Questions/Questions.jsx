import { QuestionDropdown } from '../../UI';
import cls from './Questions.module.css';

const questions = [
	'Какая минимальная ставка на игру?',
	'Каким образом я могу вывести свой выигрыш?',
	'Можно ли создать свою игру со своими правилами?',
	'За что списывается комиссия с выигрыша?',
];

const questions2 = [
	'Насколько бесконечный режим?',
	'Как закончить игру в основном режиме?',
	'Каким образом обеспечивается баланс новичков и старожил игры?',
	'Сколько максимально можно вложить в игру?',
];

export const Questions = () => {
	return (
		<div className={cls.Questions}>
			<div className='quickGameQuestions'>
				<h3 className={cls.title}>Часто задаваемые вопросы о быстрой игре:</h3>
				<div className={cls.questionsCont}>
					{questions.map((q, i) => (
						<QuestionDropdown key={i} buttonText={q}>
							<div className={cls.question}>
								<p>
									Минимальная ставка на игру в быстрой игре составляет 1 $. Цену
									на игру ставит создатель игровой комнаты. Также вы можете
									самостоятельно создать(<kbd>Своя +</kbd>)игровую комнату для
									быстрого режима и указать свою ставку для начала игры.
								</p>
								<p>
									Вы можете указать фильтр(<kbd>Ставка на игру ...</kbd>) по
									начальной ставке в меню подбора свободной комнаты для игры.
								</p>
							</div>
						</QuestionDropdown>
					))}
				</div>
			</div>
			<div className='mainGameQuestions'>
				<h3 className={cls.title}>
					Часто задаваемые вопросы о основном режиме:
				</h3>
				<div className={cls.questionsCont}>
					{questions2.map((q, i) => (
						<QuestionDropdown key={i} buttonText={q}>
							<div className={cls.question}>
								<p>
									Минимальная ставка на игру в быстрой игре составляет 1 $. Цену
									на игру ставит создатель игровой комнаты. Также вы можете
									самостоятельно создать(<kbd>Своя +</kbd>)игровую комнату для
									быстрого режима и указать свою ставку для начала игры.
								</p>
								<p>
									Вы можете указать фильтр(<kbd>Ставка на игру ...</kbd>) по
									начальной ставке в меню подбора свободной комнаты для игры.
								</p>
							</div>
						</QuestionDropdown>
					))}
				</div>
			</div>
		</div>
	);
};
