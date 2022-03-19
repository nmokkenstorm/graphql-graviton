import { useState } from "react"

export const useLocalStorage = (key: string) => {
  const [state, rawSetState] = useState<string | undefined>(
    localStorage.getItem(key) ?? ""
  )

  const setState = (value: string | undefined) => {
    rawSetState(value ?? "")
    localStorage.setItem(key, value ?? "")
  }

  return [state, setState] as const
}
