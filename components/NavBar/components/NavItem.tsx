'use client'
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type NavItem = {
    name: string,
    screen: string,
};

export const NavItem = ({ name, screen }: NavItem) => {
    const pathname = usePathname();
    const defaultStyle = "text-center text-base mr-10 ";
    const style = classnames({
        [defaultStyle]: true,
        ["font-bold animate-pulse underline underline-offset-1"]: pathname.substring(1) === screen,
    });
    return (
        <Link href={screen || "/"} className={style}>
            {name}
        </Link>
    );
};
