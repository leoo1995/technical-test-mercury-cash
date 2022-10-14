import { Anchor, Button, CheckBox, InputText, Title } from "@components/atoms"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ControlLabel, TextField } from "@components/molecules"
import cn from "classnames"
import styles from "./styles.module.css"
import { createJSONFile } from "@utils/index"

type InputFormLogin = { email: string; password: string }
export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  }

  const formik = useFormik<InputFormLogin>({
    initialValues,
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
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
          error={Boolean(helperFields.password)}
          helper={helperFields.password}
        />

        <Anchor className={styles.forgotPassword} href="#">
          Forgot Password
        </Anchor>
      </div>
      <ControlLabel input={<CheckBox />}>Remember me.</ControlLabel>

      <Button type="submit" disabled={!formik.isValid}>
        Log In
      </Button>
    </form>
  )
}
