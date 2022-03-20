import { useState } from "react"

export const useSelectedIndex = (totalAmount: number) => {
  const defaultIndex = -1
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex)

  const increase = () =>
    setSelectedIndex((current) => Math.min(current + 1, totalAmount - 1))

  const decrease = () =>
    setSelectedIndex((current) => Math.max(current - 1, defaultIndex))

  const reset = () => setSelectedIndex(defaultIndex)

  return { selectedIndex, increase, decrease, reset }
}
