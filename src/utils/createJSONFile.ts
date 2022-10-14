import { saveAs } from "file-saver"
export const createJSONFile = (value: object, name: string) => {
  const blob = new Blob([JSON.stringify(value)], {
    type: "aplication/json;charset=utf-8",
  })
  saveAs(blob, `${name}.json`)
}
