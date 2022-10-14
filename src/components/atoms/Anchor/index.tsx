import cn from "classnames"
import styles from "./styles.module.css"
type PropsAnchor = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
type Props = PropsAnchor & {}
export const Anchor: React.FC<Props> = props => {
  return (
    <a {...props} className={cn(styles.anchor)}>
      {props?.children}
    </a>
  )
}
