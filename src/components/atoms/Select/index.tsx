import { useRef } from "react"
import cn from "classnames"
import ChevronDown from "@assets/svg/ChevronDown"

import styles from "./styles.module.css"
import { OptionType, OptionValue } from "@local-types/index"
type Props = {
  icon?: React.ReactNode

  value?: string | number | readonly string[]
  name?: string
  options?: OptionValue[] | OptionType[]
  onChange?: (value: OptionValue, name?: string) => void
  error?: boolean
  onBlur?: JSX.IntrinsicElements["input"]["onBlur"]
}

export const Select = ({
  icon,
  onChange,
  value,
  name,
  options = [],
  error = false,
  onBlur,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const onClickOption = (value: OptionValue) => {
    onChange?.(value, name)
  }
  const getSelectedOption = () => {
    if (typeof options?.[0] === "object") {
      return (options as OptionType[]).find(option => option.value === value)
        ?.label
    } else {
      return (options as OptionValue[]).find(option => option === value)
    }
  }
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.error]: error,
      })}
      onClick={() => ref.current?.focus()}
    >
      {icon || <svg style={{ height: "1em", width: "1em" }} />}
      <input
        ref={ref}
        className={cn(styles.input)}
        onClick={e => e.stopPropagation()}
        value={getSelectedOption()}
        defaultValue={""}
        name={name}
        onFocus={e => e.stopPropagation()}
        onBlur={e => {
          e.stopPropagation()
          onBlur?.(e)
        }}
      />
      <ChevronDown className={cn(styles.dropdownIcon)} />
      <ul className={cn(styles.optionsContainer)}>
        {options.map(option => {
          if (typeof option === "object") {
            return (
              <li
                key={option.value}
                className={styles.option}
                onClick={() => onClickOption?.(option.value)}
              >
                {option.label}
              </li>
            )
          } else {
            return (
              <li
                key={option}
                className={styles.option}
                onClick={e => {
                  e.stopPropagation()
                  onClickOption?.(option)
                }}
              >
                {option}
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
