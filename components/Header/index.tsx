import Logo from "@/assets/logo480.png";
import Image from 'next/image';
import appConfig from '@/app/api/config/local-config.json';
import { map } from 'lodash';
import { NavItem } from '..';
import { SearchBox } from '../NavItem';
import { themeStyles } from "@/app/globalStyle";
import classNames from "classnames";

export const Header = ({ children }: { children: React.ReactNode}) => {
    const { navigation } = appConfig;

    return (
        <header className="border-gray-200 mb-8">
            <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto md:px-8 px-4 md:py-8 py-2.5 gap-4 relative">
                <a href="/" className="flex items-center justify-center flex-col ml-5 bg-gray-100 rounded-[45px] p-1 pb-5">
                    <Image src={Logo} alt="Logo" width={100} height={100} />
                </a>
                <div className={`absolute left-0 top-[90%] text-4xl font-medium font-mono ${themeStyles.primaryText}`}>Århundrade Blog</div>
                <div className="items-center justify-between hidden w-full text-sm min-[920px]:flex min-[920px]:w-auto">
                    <ul className="flex flex-row gap-10">
                        {map(navigation.navbar, ({ screen, title }) => {
                            return (
                                <NavItem path={screen} title={title} />
                            )
                        })}
                    </ul>
                </div>
                <div className="hidden md:flex items-center flex-shrink-0">
                    <SearchBox/>
                    {children}
                </div>
            </div>
        </header>
    );
};