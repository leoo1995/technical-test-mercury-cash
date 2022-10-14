import styles from "./styles.module.css"
type Props = {
  children: React.ReactNode
  input: React.ReactNode
}
export const ControlLabel = ({ children, input }: Props) => {
  return (
    <label className={styles.wrapper}>
      {input}
      <span>{children}</span>
    </label>
  )
}
