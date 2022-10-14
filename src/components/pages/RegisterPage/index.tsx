import { Anchor, Paragraph } from "@components/atoms"
import { LoginForm } from "@components/organisms"
import { FormLayout } from "@components/templates"

export const RegisterPage = () => {
  return (
    <FormLayout
      header={<img src="images/logo.png" />}
      body={<LoginForm />}
      footer={
        <Paragraph>
          Have an account? <Anchor href="#">Log in</Anchor> instead.
        </Paragraph>
      }
    />
  )
}
