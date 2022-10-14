import { Anchor, Paragraph } from "@components/atoms"
import { LoginForm } from "@components/organisms"
import { FormLayout } from "@components/templates"

export const LoginPage = () => {
  return (
    <FormLayout
      header={<img src="images/logo.png" />}
      body={<LoginForm />}
      footer={
        <Paragraph>
          Don't have an account? <Anchor to="/register">Sign up</Anchor>{" "}
          instead.
        </Paragraph>
      }
    />
  )
}
