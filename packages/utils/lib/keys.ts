import { KeyboardEvent } from "react"

const actionKeys = ["ArrowDown", "ArrowUp", "Enter"] as const
type Keys = typeof actionKeys[number]

const isActionKey = (key: string): key is Keys =>
  !!actionKeys.find((lit) => lit === key)

// TODO: debounce?
export const createKeyHandler = (mapping: Record<Keys, () => void>) => ({
  key,
}: KeyboardEvent) => isActionKey(key) && mapping[key]()
