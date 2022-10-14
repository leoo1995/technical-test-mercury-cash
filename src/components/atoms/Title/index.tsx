import cn from "classnames"
import styles from "./styles.module.css"
type HProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
type Props = HProps & {}
export const Title: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <h2 {...rest} className={cn(styles.title, rest?.className)}>
      {children}
    </h2>
  )
}
