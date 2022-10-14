import { useState } from "react"
import cn from "classnames"

import ChevronDown from "@assets/svg/ChevronDown"

import styles from "./styles.module.css"
type Props = {
  icon?: React.ReactNode

  value?: string | number | readonly string[]
  name?: string
  options?: OptionValue[] | OptionType[]
  onChange?: (value: OptionValue, name?: string) => void
}
type OptionType = { value: OptionValue; label: OptionValue }
type OptionValue = string | number
export const Select = ({
  icon,
  onChange,
  value,
  name,
  options = [],
}: Props) => {
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
    <div className={cn(styles.wrapper)}>
      {icon}
      <input
        className={cn(styles.input)}
        value={getSelectedOption()}
        defaultValue={""}
        name={name}
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
                onClick={() => onClickOption?.(option)}
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
