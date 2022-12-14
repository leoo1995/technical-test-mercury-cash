import { useState } from "react"
import { useFormik } from "formik"
import cn from "classnames"
import styles from "./styles.module.css"
import Search from "@assets/svg/Search"
import { Anchor, Button, CheckBox, Select } from "@components/atoms"
import { ControlLabel, SelectField, TextField } from "@components/molecules"

import { createJSONFile } from "@utils/index"
import * as Yup from "yup"
import { useCountries } from "../../../hooks/useCountries"
import {
  FieldInputType,
  FieldSelectType,
  InputFormRegisterUser,
  InputTypeText,
} from "@local-types/index"
type Props = {}

export const RegisterForm = ({}: Props) => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    language: "",
  }
  const [termsChecked, setTermChecked] = useState<boolean>(false)
  const { countriesOptions, loading } = useCountries()
  const formik = useFormik<InputFormRegisterUser>({
    initialValues,
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email not valid.")
        .required("This field is required."),
      password: Yup.string()
        .min(6, "It must have 6 characters at least")
        .required("This field is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match!")
        .required("Required"),
      country: Yup.string().required("This field is required"),
      language: Yup.string().required("This field is required"),
    }),
    onSubmit: values => {
      createJSONFile(values, "register-data")
    },
  })
  const onChangeSelect = (value: string | number, name?: string) => {
    name && formik.setFieldValue(name, value)
  }

  const fields: (FieldSelectType | FieldInputType)[] = [
    {
      name: "email",
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      error:
        Boolean(formik.touched?.email) && formik.errors.email
          ? formik.errors.email
          : "",
      type: InputTypeText.email,
      placeholder: "Email",
    },
    {
      name: "password",
      value: formik.values.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      error:
        Boolean(formik.touched?.password) && formik.errors.password
          ? formik.errors.password
          : "",

      type: InputTypeText.password,
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      value: formik.values.confirmPassword,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      error:
        Boolean(formik.touched?.confirmPassword) &&
        formik.errors.confirmPassword
          ? formik.errors.confirmPassword
          : "",
      type: InputTypeText.password,
      placeholder: "Retype Password",
    },
    {
      type: "select",
      name: "country",
      value: formik.values.country,

      onBlur: formik.handleBlur,
      error:
        Boolean(formik.touched?.country) && formik.errors.country
          ? formik.errors.country
          : "",
      options: [
        { value: "", label: "Country of Residence" },
        ...countriesOptions,
      ],
      loading: loading,
      icon: <Search />,
      onChange: onChangeSelect,
      placeholder: "Country of Residence",
    },
    {
      name: "language",
      value: formik.values.language,
      onBlur: formik.handleBlur,
      error:
        Boolean(formik.touched?.language) && formik.errors.language
          ? formik.errors.language
          : "",
      type: "select",
      options: [
        { value: "English", label: "English" },
        { value: "Spanish", label: "Spanish" },
        { value: "French", label: "French" },
        { value: "Portuguese", label: "Portuguese" },
        { value: "Japanese", label: "Japanese" },
        { value: "German", label: "German" },
      ],
      icon: null,
      onChange: onChangeSelect,
      placeholder: "Language",
    },
  ]

  return (
    <form className={cn(styles.wrapper)} onSubmit={formik.handleSubmit}>
      {fields.map(field => {
        if (field.type === "select") {
          return (
            <SelectField
              key={field.name}
              icon={field.icon}
              name={field.name}
              options={field.options}
              value={field.value}
              onChange={field.onChange}
              error={Boolean(field.error)}
              helper={field.error}
              onBlur={field.onBlur}
              loading={field.loading}
            />
          )
        }
        return (
          <TextField
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={Boolean(field.error)}
            helper={field.error}
          />
        )
      })}

      <ControlLabel
        input={
          <CheckBox
            checked={termsChecked}
            onChange={() => setTermChecked(s => !s)}
            shape="circle"
          />
        }
      >
        By continuing I agree to the <Anchor href="#">Terms of Services</Anchor>{" "}
        and <Anchor href="#">Privacy Policy</Anchor>
      </ControlLabel>
      <Button
        type="submit"
        disabled={!(formik.isValid && termsChecked) || formik.isSubmitting}
      >
        Sign Up
      </Button>
    </form>
  )
}
