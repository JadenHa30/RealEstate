import { getAppConfig } from '../../utils';
import map from 'lodash/map';
import Image from 'next/image';
import logo720 from '@/assets/logo720.png';
import { NavItem } from './components';

const Logo = () => (
    <div className="mr-40 ml-10 flex justify-center items-center">
        <Image src={logo720} alt={''} className="h-12 w-12 mr-2"/>
        <p className="text-lg font-medium font-serif">Åbo Blog</p>
    </div>
)
export const NavBar = async () => {
    // const { navigation } = await getAppConfig();

    return (
        <div className="h-16 flex justify-between items-center">
            {/* <Logo/>
            {map(navigation.navbar, (item) => <NavItem name={item.title} screen={item.screen}/>)}
            <div className="w-32 h-5 bg-slate-400 mr-10 ml-40"></div>
            <div className="w-20 h-5 bg-slate-400 mr-10"></div> */}
        </div>
    )
}
