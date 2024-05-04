import Logo from "@/assets/asuntoLogo.png";
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
                <a href="/" className="flex items-center justify-center flex-col rounded-[45px]">
                    <Image src={Logo} alt="Logo" width={150} height={150} />
                </a>
                <div className="items-center justify-between hidden w-full text-sm min-[920px]:flex min-[920px]:w-auto">
                    <ul className="flex flex-row gap-10">
                        {map(navigation.admin, ({ screen, title }) => {
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