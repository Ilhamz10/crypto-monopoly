import { useState } from 'react';
import { Button, Input, Label, WrapperCard } from '../../../../shared/UI';
import cls from './step4.module.css';
import { useBoundStore } from '../../../../store';

export const Step4 = () => {
	const { regStep, incRegStep } = useBoundStore((state) => state);

	const [pasword, setPasword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	return (
		<WrapperCard>
			<div className={cls.labels}>
				<Label text={'Придумайте никнейм'} type={'gradient'} />
				<Label text={`${regStep} из 6`} />
			</div>
			<div className={cls.cardBody}>
				<div className={cls.inputs}>
					<Input
						value={pasword}
						onChange={(e) => setPasword(e.target.value)}
						label={
							'Пароль должен содержать минимум 8 символов на латинице или цифры, 1 и более символов заглавныеи минимум 1 знак: _-<>{}#№!?*'
						}
						id={'mail'}
					/>
					<Input
						value={repeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
						id={'mail'}
					/>
				</div>
				<Button
					onClick={incRegStep}
					type='filled'
					fillColor='#726CED'
					textColor='#fff'
					disabled={
						pasword.trim().length === 0 && repeatPassword.trim().length === 0
					}>
					Далее
				</Button>
			</div>
		</WrapperCard>
	);
};
