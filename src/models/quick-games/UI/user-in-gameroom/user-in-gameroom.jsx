import { EnterIcon } from '../../../../assets';
import { userImg } from '../../../top-users/assets';
import cls from './user-in-gameroom.module.css';

export const UserInGameRoom = ({ user }) => {
	return (
		<div className={cls.user}>
			<div className={cls.imgCont}>
				{user ? (
					<img src={userImg} alt='' />
				) : (
					<EnterIcon width={26} height={26} />
				)}
			</div>
			<p>{user ? user.name : <b>Войти</b>}</p>
		</div>
	);
};
