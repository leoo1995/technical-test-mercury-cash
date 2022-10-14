import Search from "@assets/svg/Search"
import { Anchor, Button, CheckBox, InputText, Select } from "@components/atoms"
import { LoginForm, RegisterForm } from "@components/organisms"
import { FormLayout } from "@components/templates"
import { useState } from "react"
import { InputTypeText } from "./types"
import { Paragraph } from "./components/atoms/Paragraph/index"

function App() {
  return (
    <div className="App">
      <FormLayout
        header={<img src="images/logo.png" />}
        body={<LoginForm />}
        footer={
          <Paragraph>
            Don't have an account? <Anchor href="#">Sign up</Anchor> instead
          </Paragraph>
        }
      />
    </div>
  )
}

export default App
