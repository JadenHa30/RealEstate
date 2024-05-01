import React from "react";
import moment from "moment";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';


interface Props {
    avatar: string | StaticImageData,
    name: string,
    createdAt: Date | string | number,
    light?: boolean

}

export const Author = ({ avatar, name, createdAt, light = false }: Props) => {
    return (
        <Link href={`/author/:id`} className="flex flex-wrap items-center">
            <Image
                className="w-10 h-10 object-cover object-center rounded-full mr-3"
                src={avatar}
                alt={name}
                width={200}
                height={200}
            />
            <span
                className={`text-base font-medium mr-5 ${light ? "text-[#ffff]" : "text-[#97989F]"
                }`}
            >
                {name}
            </span>
            <span
                className={`text-base ${light ? "text-[#ffff]" : "text-[#97989F]"}`}
            >
                {moment(createdAt).format("LL")}
            </span>
        </Link>
    );
};
