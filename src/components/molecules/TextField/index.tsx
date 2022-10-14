import { HelperText, InputText } from "@components/atoms"
import cn from "classnames"
import styles from "./styles.module.css"

type InputProps = JSX.IntrinsicElements["input"]
interface Props {
  type?: "text" | "number" | "email" | "password"

  value?: InputProps["value"]
  onChange?: InputProps["onChange"]
  onBlur?: InputProps["onBlur"]
  name?: InputProps["name"]
  placeholder?: InputProps["placeholder"]
  inputProps?: InputProps
  helper?: string
  error?: boolean
  classContainer?: string
  classInput?: string
}

export const TextField = ({
  helper,
  inputProps,
  type = "text",
  error = false,
  classContainer,
  classInput,
  value,
  name,
  onChange,
  placeholder,
  onBlur,
}: Props) => {
  return (
    <div className={cn(styles.wrapper, classContainer)}>
      <InputText
        {...inputProps}
        className={classInput}
        error={error}
        type={type}
        value={value ?? inputProps?.value}
        onChange={onChange || inputProps?.onChange}
        name={name || inputProps?.name}
        placeholder={placeholder || inputProps?.placeholder}
        onBlur={onBlur || inputProps?.onBlur}
      />
      <HelperText error={error}>{helper}</HelperText>
    </div>
  )
}
