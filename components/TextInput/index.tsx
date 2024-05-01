
type TextInput = {
    type: string,
    name: string,
    placeholder: string | undefined,
    required: boolean,
    className: string,
}
export const TextInput = ({ type, name, placeholder, required, className = '' }: TextInput) => {
    const defaultStyle = "h-10 w-80 rounded text-[--secondary-color] pl-2 focus:outline-none focus:border-b focus:border-[--primary-color] ";
    const style = defaultStyle + className;
    return (
        <input 
            className={style}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
        />
    );
}
