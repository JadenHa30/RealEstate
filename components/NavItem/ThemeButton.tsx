"use client"

import { useEffect, useState } from 'react'
import Image from "next/image";
import SunnyIcon from "@/assets/images/sunny.png";
import classNames from 'classnames';
import { useAppDispatch, updateAppConfig, useAppSelector, selectAppConfig } from "@/lib";
import { themeStyles } from '@/app/globalStyle';
import { SVGIcon } from "../svgIcon";

export function ThemeButton() {
    const [mounted, setMounted] = useState(false);
    const dispatch = useAppDispatch();
    const appConfig = useAppSelector(selectAppConfig);
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = async () => {
        await dispatch(updateAppConfig({ newConfig: { darkMode: !appConfig?.darkMode }, url: window.origin }));
    }
    const toggleStyle = classNames({
        ["translate-x-5"]: appConfig?.darkMode,
    });
    if (!mounted) {
        return <></>;
    }
    
    return (
        <div className="relative inline-flex items-center cursor-pointer ml-10">
            <button type="button" className="w-12 inline-flex items-center h-7 p-0.5 rounded-full bg-stone-300" onClick={handleClick}>
                <div
                    className={`${toggleStyle} h-6 w-6 ${themeStyles.primaryBackground} rounded-full transition-all shadow flex items-center justify-center`}
                >
                    {appConfig?.darkMode ?
                        <SVGIcon name="moon" className="w-3"/>
                        : <Image src={SunnyIcon} className={`w-4 ${!themeStyles.primaryText}`} alt="toggle dark mode" />
                    }
                </div>
            </button>
        </div> 
    )
}