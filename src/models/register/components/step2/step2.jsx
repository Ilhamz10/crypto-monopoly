import { useState } from 'react';
import { Button, Input, Label, WrapperCard } from '../../../../shared/UI';
import { useBoundStore } from '../../../../store';
import cls from './Step2.module.css';
import { useMask } from '@react-input/mask';

export const Step2 = () => {
	const { incRegStep, regStep } = useBoundStore((state) => state);
	const [emailCode, setEmailCode] = useState(null);
	const codeInputRef = useMask({
		mask: '_.__.__',
		replacement: { _: /\d/ },
		showMask: true,
	});

	return (
		<WrapperCard>
			<div className={cls.labels}>
				<Label text={'Проверка почты'} type={'gradient'} />
				<Label text={`${regStep} из 6`} />
			</div>
			<div className={cls.cardBody}>
				<Input
					ref={codeInputRef}
					value={emailCode}
					onChange={(e) => setEmailCode(e.target.value)}
					label={`Код для проверки отправлен на указанный почтовый ящик  (pav***@mail.ru)`}
					id={'mail'}
				/>
				<div className={cls.btns}>
					<Button>Указать другую почту</Button>
					<Button
						onClick={incRegStep}
						disabled={
							!emailCode
								? true
								: emailCode?.match(/\d/g)?.length
								? emailCode?.match(/\d/g)?.length < 5
								: true
						}
						fillColor='#726CED'
						textColor='#fff'>
						Далее
					</Button>
				</div>
			</div>
		</WrapperCard>
	);
};
