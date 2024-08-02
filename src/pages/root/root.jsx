import { Outlet } from 'react-router-dom';
import { Header } from '../../layout';
// import { useEffect } from 'react';

export const Root = () => {
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	navigate('/authorization/register');
	// }, []);

	return (
		<div className='main-layout'>
			<Header />
			<Outlet />
		</div>
	);
};
