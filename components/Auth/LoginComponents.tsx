import React from 'react';

 type LoginLabelType = {
    title: string,
    htmlFor: string,
    type: string,
    id: string,
    name: string,
    style: string,
    placeholder: string,
    value: any,
    onChange: (e: React.ChangeEvent<any>) => void,
}

export const LoginField = ({ title, htmlFor, type, id, name, style, placeholder, value, onChange }: LoginLabelType) => {
    return (
       <div className="mb-6">
            <label
                htmlFor={htmlFor}
                className="block text-sm font-medium text-gray-700"
            >
                {title}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                required
                className={style}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
       </div>
    )
}
