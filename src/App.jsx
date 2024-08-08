import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AllGameRules, Auth, MainGame, QuickGame, Root } from './pages';
import { Register, Rules } from './models';
import { Auction } from './pages/auction/auction';
import { Deposit } from './pages/deposit/deposit';
import { AllAchivments } from './pages/all-achivments/all-achivments';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/authorization',
				element: <Auth />,
				children: [{ path: 'register', element: <Register /> }],
			},
			{
				path: '/rules',
				element: <Rules />,
			},
			{
				path: '/quick-game',
				element: <QuickGame />,
			},
			{
				path: 'main-mode',
				element: <MainGame />,
			},
		],
	},
	{
		path: '/rules/details',
		element: <AllGameRules />,
	},
	{
		path: '/main-mode/auction',
		element: <Auction />,
	},
	{
		path: '/main-mode/deposit',
		element: <Deposit />,
	},
	{
		path: '/quick-game/all-achivments',
		element: <AllAchivments />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
