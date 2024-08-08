import cls from './register.module.css';
import GoogleIcon from '../../assets/icons/google.svg?react';
import MetaIcon from '../../assets/icons/meta.svg?react';
import VKIcon from '../../assets/icons/vk.svg?react';
import YandexIcon from '../../assets/icons/yandex.svg?react';
import { Button, Label, WrapperCard } from '../../shared/UI';
import { Step1 } from './components/step1/step1';
import { useCallback } from 'react';
import { useBoundStore } from '../../store';
import { Step2 } from './components/step2/step2';
import { Step3 } from './components/step3/step3';
import { Step4 } from './components/step4/step4';

export const Register = () => {
	const { regStep } = useBoundStore((state) => state);

	const changeSteps = useCallback(() => {
		switch (regStep) {
			case 1:
				return <Step1 />;
			case 2:
				return <Step2 />;
			case 3:
				return <Step3 />;
			case 4:
				return <Step4 />;
		}
	}, [regStep]);

	return (
		<div className={cls.registerCont}>
			{changeSteps()}
			<WrapperCard>
				<Label text={'Регистрация через партнеров'} type={'gradient'} />
				<div className={cls.socialLinks}>
					<Button type='outline' className={cls.socialLinkButton}>
						<GoogleIcon width={23} height={23} /> Регистрация через Google
						аккаунт
					</Button>
					<Button type='outline' className={cls.socialLinkButton}>
						<MetaIcon width={23} height={23} />
						Регистрация через Meta
					</Button>
					<Button type='outline' className={cls.socialLinkButton}>
						<VKIcon width={23} height={23} />
						Регистрация через VK ID
					</Button>
					<Button type='outline' className={cls.socialLinkButton}>
						<YandexIcon width={23} height={23} />
						Регистрация через Яндекс ID
					</Button>
				</div>
			</WrapperCard>
			<WrapperCard>
				<p className={cls.loginButtonLabel}>Уже зарегистрированы?</p>
				<Button>Войти</Button>
			</WrapperCard>
		</div>
	);
};
