import AlertCircleOutlined from "@assets/svg/AlertCircleOutlined"
import cn from "classnames"
import styles from "./styles.module.css"
type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
type Props = SpanProps & {
  error?: boolean
}
export const HelperText = ({ children, error = false }: Props) => {
  return (
    <span
      className={cn(styles.helper, {
        [styles.error]: error,
      })}
    >
      {error && <AlertCircleOutlined />} {children}
    </span>
  )
}
