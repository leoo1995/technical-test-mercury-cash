import { InputTypeText } from "@local-types/index"
import cn from "classnames"
import styles from "./styles.module.css"
type InputProps = JSX.IntrinsicElements["input"]
type Props = InputProps & {
  type?: InputTypeText
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
