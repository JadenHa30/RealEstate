import { themeStyles } from '@/app/globalStyle';
import React from 'react';

 type InputType = {
    containerStyle?: string,
    title: string,
    htmlFor: string,
    require: boolean,
    type: string,
    id: string,
    name: string,
    style: string,
    placeholder: string,
    value: any,
    onChange: (e: React.ChangeEvent<any>) => void,
}

export const Input = ({ title, htmlFor, require = false, type, id, name, style, placeholder, value, onChange, containerStyle }: InputType) => {
    return (
       <div className={`mb-6 ${containerStyle}`}>
            <label
                htmlFor={htmlFor}
                className={`${themeStyles.primaryText} block text-sm font-medium`}
            >
                {title}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                required={require}
                className={style}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
       </div>
    )
}
