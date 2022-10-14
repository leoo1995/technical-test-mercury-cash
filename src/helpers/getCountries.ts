import { OptionType } from "@local-types/index"
export const getCountries = (): Promise<OptionType[]> => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          { value: "Colombia", label: "Colombia" },
          { value: "Venezuela", label: "Venezuela" },
          { value: "México", label: "México" },
          { value: "Perú", label: "Perú" },
          { value: "Chile", label: "Chile" },
          { value: "Brazil", label: "Brazil" },
        ]),
      3000,
    )
  })
}
