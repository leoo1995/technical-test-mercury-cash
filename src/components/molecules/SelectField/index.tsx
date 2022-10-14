import { HelperText, Select } from "@components/atoms"
import { OptionType, OptionValue } from "@local-types/index"
import cn from "classnames"

import styles from "./styles.module.css"

type Props = {
  icon?: React.ReactNode

  value?: string | number | readonly string[]
  name?: string
  options?: OptionValue[] | OptionType[]
  onChange?: (value: OptionValue, name?: string) => void
  onBlur?: InputProps["onBlur"]
  helper?: string
  error?: boolean
  classContainer?: string
}
type InputProps = JSX.IntrinsicElements["input"]
export const SelectField: React.FC<Props> = ({
  helper,

  error = false,
  classContainer,
  icon,
  options,
  value,
  name,
  onChange,

  onBlur,
}) => {
  return (
    <div className={cn(styles.wrapper, classContainer)}>
      <Select
        error={error}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        icon={icon}
        options={options}
      />
      <HelperText error={error}>{helper}</HelperText>
    </div>
  )
}
