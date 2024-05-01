import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@/assets/images/search.png";
import { themeStyles } from "@/app/globalStyle";

type NavItemType = {
    path: string,
    title: string,
}

export function NavItem({ path, title }: NavItemType) {
    return (
        <li>
            <Link
                href={path}
                className={`inline-block ${themeStyles.primaryText} hover:text-blue-600 text-base`}
            >
                {title}
            </Link>
        </li>
    )
}

export function SearchBox() {
    return (
        <>
            <div className="relative flex items-center h-8 md:w-40 w-full rounded-md bg-[#F4F4F5]">
                <input
                    className="w-full h-full outline-none text-sm text-gray-700 pl-4 px-2 pr-2 bg-transparent"
                    type="text"
                    placeholder="Search"
                />
                <div className="h-full px-2 flex items-center text-gray-700">
                    <Image src={SearchIcon} className="w-4" alt="search-icon" />
                </div>
            </div>
        </>
    )
}

export { ThemeButton } from './ThemeButton';