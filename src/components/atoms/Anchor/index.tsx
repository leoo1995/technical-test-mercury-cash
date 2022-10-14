import { Link, LinkProps } from "react-router-dom"
import cn from "classnames"
import styles from "./styles.module.css"
type PropsAnchor = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
type Props = (PropsAnchor | LinkProps) & {
  to?: string
}
export const Anchor: React.FC<Props> = props => {
  if (props?.to) {
    return (
      <Link {...(props as LinkProps)} className={cn(styles.anchor)}>
        {props?.children}
      </Link>
    )
  }
  return (
    <a {...props} className={cn(styles.anchor)}>
      {props?.children}
    </a>
  )
}
