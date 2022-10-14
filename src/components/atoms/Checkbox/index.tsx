import { CSSProperties, useId } from "react"
import cn from "classnames"
import styles from "./styles.module.css"
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = InputProps & {
  shape?: "square" | "circle"
  className?: string
}

export const CheckBox = ({
  className = "",
  shape = "square",
  ...rest
}: Props) => {
  const id = rest.id || useId()
  return (
    <label
      htmlFor={id}
      className={cn(styles.wrapper, className, styles[shape], {
        [styles.disabled]: rest.disabled,
      })}
    >
      <input id={id} className={styles.toggle} type={"checkbox"} {...rest} />
      <label htmlFor={id} className={styles.checkbox}></label>
    </label>
  )
}
