import { Questions, RulesInfoCards } from './components';
import cls from './rules.module.css';

export const Rules = () => {
	return (
		<section className={`${cls.rulesSection} wrapper`}>
			<RulesInfoCards />
			<Questions />
		</section>
	);
};
