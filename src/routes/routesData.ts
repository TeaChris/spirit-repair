import Home from "../pages/Home/Home";
import About from "../pages/Team/Team";
import Mint from "../pages/Mint/Mint";
import Collections from "../pages/Collections/Collections";
import Explore from "../pages/Explore/Explore";


export const openRoutesData = [
	{
		name:'home',
		path:'/',
		component: Home,
		exact: true

	},
	{
		name:'about',
		path:'/about',
		component: About,
		exact: true

	},
	{
		name:'mint',
		path:'/mint',
		component: Mint,
		exact: true
	},
	{
		name:'collection',
		path:'/collection',
		component: Collections,
		exact: true
	},
	{
		name:'explore',
		path:'/explore',
		component: Explore,
		exact: true
	}
]

