import cn from "classnames"
import styles from "./styles.module.css"
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type Props = InputProps & {
  type?: "text" | "number" | "email" | "password"
  error?: boolean
}
export const InputText = ({ error = false, ...rest }: Props) => {
  return (
    <input
      {...rest}
      className={cn(styles.input, rest?.className, {
        [styles.error]: error,
      })}
    />
  )
}
