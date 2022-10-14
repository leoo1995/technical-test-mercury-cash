import Search from "@assets/svg/Search"
import {
  Button,
  CheckBox,
  InputText,
  SelecOption,
  Select,
} from "@components/atoms"
import { LoginForm, RegisterForm } from "@components/organisms"
import { useState } from "react"

function App() {
  const [selectValue, setSelectValue] = useState()
  return (
    <div className="App">
      <LoginForm />
      <RegisterForm />
      {/* <CheckBox />
      <CheckBox disabled />
      <CheckBox shape="circle" />
      <CheckBox shape="circle" disabled />
      <Select
        icon={<Search />}
        value={selectValue}
        onChange={value => setSelectValue(value)}
        options={[
          { value: 1, label: "hola mundo" },
          { value: 2, label: "segunda opcion" },
        ]}
      />
      <Select
        icon={<Search />}
        options={[
          { value: 1, label: "hola mundo" },
          { value: 2, label: "segunda opcion" },
        ]}
      /> */}
    </div>
  )
}

export default App
