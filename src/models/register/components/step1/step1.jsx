import cls from './step1.module.css';
import { Button, Input, Label, WrapperCard } from '../../../../shared/UI';
import { useState } from 'react';
import { useBoundStore } from '../../../../store';

export const Step1 = () => {
	const { incRegStep, regStep } = useBoundStore((state) => state);

	const [email, setEmail] = useState('');

	return (
		<WrapperCard>
			<div className={cls.labels}>
				<Label text={'Регистрация через почту'} type={'gradient'} />
				<Label text={`${regStep} из 6`} />
			</div>
			<div className={cls.cardBody}>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label={'Почта'}
					id={'mail'}
				/>
				<Button
					onClick={incRegStep}
					type='filled'
                    fillColor='#726CED'
                    textColor='#fff'
					disabled={email.trim().length === 0}>
					Зарегистрироваться
				</Button>
			</div>
		</WrapperCard>
	);
};
