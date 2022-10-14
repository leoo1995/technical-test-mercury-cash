import { Anchor, Paragraph } from "@components/atoms"
import { RegisterForm } from "@components/organisms"
import { FormLayout } from "@components/templates"
import styles from "./styles.module.css"
export const RegisterPage = () => {
  return (
    <FormLayout
      className={styles.container}
      header={<img src="images/logo.png" />}
      body={<RegisterForm />}
      footer={
        <Paragraph>
          Have an account? <Anchor to="/login">Log in</Anchor> instead.
        </Paragraph>
      }
    />
  )
}
