export type Field = {
  name: string
  value: string | number
  onBlur: React.FocusEventHandler<any>
  placeholder: string
  error: string | undefined
}
export type FieldInputType = Field & {
  type: InputTypeText
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export type FieldSelectType = Field & {
  type: "select"
  onChange: (value: string | number, name?: string) => void
  options: string[]
  icon: null | JSX.Element
}

export enum InputTypeText {
  text = "text",
  email = "email",
  number = "number",
  password = "password",
}
export type OptionType = { value: OptionValue; label: OptionValue }
export type OptionValue = string | number
