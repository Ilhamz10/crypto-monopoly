import cls from './register.module.css';
import GoogleIcon from '../../assets/icons/google.svg?react';
import MetaIcon from '../../assets/icons/meta.svg?react';
import VKIcon from '../../assets/icons/vk.svg?react';
import YandexIcon from '../../assets/icons/yandex.svg?react';
import { Button, Input, Label, WrapperCard } from '../../shared/UI';

export const Register = () => {
	return (
		<div className={cls.registerCont}>
			<WrapperCard>
				<div className={cls.labels}>
					<Label text={'Регистрация через почту'} type={'gradient'} />
					<Label text={'1/6'} />
				</div>
				<div className={cls.cardBody}>
					<Input label={'Почта'} id={'mail'} />
					<Button disabled>Зарегистрироваться</Button>
				</div>
			</WrapperCard>
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
