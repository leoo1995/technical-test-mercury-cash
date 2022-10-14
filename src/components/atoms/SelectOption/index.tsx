import styles from "./styles.module.css"
type LiProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
type Props = LiProps & {
  label: string
  value: string | number
  onClick: (value: string | number) => void
}

export const SelecOption = ({ label, onClick, value }: Props) => {
  return (
    <li className={styles.wrapper} onClick={() => onClick?.(value)}>
      {label}
    </li>
  )
}
