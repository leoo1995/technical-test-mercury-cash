import { useState } from "react"
import { Anchor, Button, CheckBox, Title } from "@components/atoms"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ControlLabel, TextField } from "@components/molecules"
import cn from "classnames"
import styles from "./styles.module.css"
import { createJSONFile } from "@utils/index"
import { InputFormLoginUser, InputTypeText } from "@local-types/index"
import { useLocalStorage } from "@hooks/useLocalStorage"

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  }
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [savedForm, setSavedForm, removeItem] = useLocalStorage(
    "user-login-input",
    initialValues,
  )
  const formik = useFormik<InputFormLoginUser>({
    initialValues: savedForm,
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email not valid")
        .required("This field is required"),
      password: Yup.string()
        .min(6, "It must have 6 characters at least")
        .required("This field is required"),
    }),
    onSubmit: (values, { setValues }) => {
      if (rememberMe) {
        setSavedForm(values)
      } else {
        removeItem()
      }
      createJSONFile(values, "login-data")
      setValues(initialValues)
    },
  })
  const helperFields = {
    email:
      Boolean(formik.touched?.email) && formik.errors.email
        ? formik.errors.email
        : "",
    password:
      Boolean(formik.touched?.password) && formik.errors.password
        ? formik.errors.password
        : "",
  }

  console.log({ savedForm })
  return (
    <form className={cn(styles.wrapper)} onSubmit={formik.handleSubmit}>
      <Title className={styles.title}>Welcome Back</Title>
      <TextField
        placeholder="Email"
        {...formik.getFieldProps("email")}
        error={Boolean(helperFields.email)}
        helper={helperFields.email}
      />

      <div className={styles.passwordSection}>
        <TextField
          classContainer={styles.passwordField}
          type={InputTypeText.password}
          placeholder="Password"
          {...formik.getFieldProps("password")}
          error={Boolean(helperFields.password)}
          helper={helperFields.password}
        />

        <Anchor className={styles.forgotPassword} href="#">
          Forgot Password
        </Anchor>
      </div>
      <ControlLabel
        input={
          <CheckBox
            checked={rememberMe}
            onChange={() => setRememberMe(s => !s)}
          />
        }
      >
        Remember me.
      </ControlLabel>

      <Button type="submit" disabled={!formik.isValid}>
        Log In
      </Button>
    </form>
  )
}
