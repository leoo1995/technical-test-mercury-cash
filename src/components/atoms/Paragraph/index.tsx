import cn from "classnames"
import styles from "./styles.module.css"

type Props = JSX.IntrinsicElements["p"] & {}
export const Paragraph = ({ children }: Props) => {
  return <p className={cn(styles.p)}>{children}</p>
}
