import cls from './header.module.css';
import logo from '../../assets/images/logo.png';
import { Button } from '../../shared/UI';

export const Header = () => {
	return (
		<header className={cls.header}>
			<div className='wrapper'>
				<div className={cls.headerCont}>
					<img className={cls.logo} src={logo} alt='Logo' />
					<nav className={cls.nav}>
						<Button variant='rounded' component='link' to='/rules'>
							Правила игры
						</Button>
						<Button variant='rounded'>О проекте</Button>
					</nav>
				</div>
			</div>
		</header>
	);
};
