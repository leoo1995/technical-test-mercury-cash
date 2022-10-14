import styles from "./styles.module.css"
import cn from "classnames"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type Props = ButtonProps & {}

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={cn(styles.button, rest?.className)}>
      {children}
    </button>
  )
}
