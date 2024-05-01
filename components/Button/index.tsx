type ButtonType = {
  children?: React.ReactNode,
  title?: string,
  style?: string,
  type?: "button" | "submit" | "reset",
  onClick?: (props?: any, actions?: any) => void | {} | Promise<void>,
};
export function Button({ children, title, style, type = "button", onClick = () => {} }: ButtonType) {
return (
  <button
      type={type}
      className={style}
      onClick={onClick}
  >
      {title}
      {children}
  </button>
)
}