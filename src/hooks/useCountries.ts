import { useState, useEffect } from "react"
import { getCountries } from "@helpers/index"
import { OptionType } from "@local-types/index"

export const useCountries = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [countriesOptions, setCountriesOptions] = useState<OptionType[]>([])

  const fetchCountries = async () => {
    setLoading(true)
    const countries = await getCountries()
    setCountriesOptions(countries)
    setLoading(false)
  }
  useEffect(function () {
    fetchCountries()
  }, [])
  return { countriesOptions, loading }
}
