import cls from './step3.module.css';
import { Button, Input, Label, WrapperCard } from '../../../../shared/UI';
import { useBoundStore } from '../../../../store';
import { useState } from 'react';

export const Step3 = () => {
	const { regStep, incRegStep } = useBoundStore((state) => state);

	const [nickName, setNickName] = useState('');

	return (
		<WrapperCard>
			<div className={cls.labels}>
				<Label text={'Придумайте никнейм'} type={'gradient'} />
				<Label text={`${regStep} из 6`} />
			</div>
			<div className={cls.cardBody}>
				<Input
					value={nickName}
					onChange={(e) => setNickName(e.target.value)}
					label={
						'Никнейм должен содержать не более 12 символовбез пробелов и только на латинице. Допускаются знаки:_-<>{}#№!?*'
					}
					id={'mail'}
				/>
				<Button
					onClick={incRegStep}
					type='filled'
					fillColor='#726CED'
					textColor='#fff'
					disabled={nickName.trim().length === 0}>
					Далее
				</Button>
			</div>
		</WrapperCard>
	);
};
