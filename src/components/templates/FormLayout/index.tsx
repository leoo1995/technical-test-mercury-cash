import cn from "classnames"
import styles from "./styles.module.css"
type Props = {
  header: React.ReactNode
  body: React.ReactNode
  footer?: React.ReactNode
  className?: string
}
export const FormLayout = ({ header, body, footer, className }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <header className={styles.header}>{header}</header>
      <main className={styles.body}>{body}</main>
      <hr className={styles.line} />
      <footer className={styles.footer}>{footer}</footer>
    </div>
  )
}
