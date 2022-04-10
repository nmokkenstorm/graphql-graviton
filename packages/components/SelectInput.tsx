import React, { ReactElement, useMemo, useState } from "react"

import { Button } from "./Button"
import { List } from "./List"
import { TextInput } from "./TextInput"

import { useSelectedIndex } from "../hooks/useSelectedIndex"
import { createKeyHandler } from "../utils/lib/keys"

type Value = string | number
type SelectOption<T extends Value> = { value: T; label?: ReactElement }
const blurDelay: number = 150
const defaultFilterFunction = <T extends Value>(search: string) => ({
  value,
  label,
}: SelectOption<T>): boolean => {
  const matches = String(
    typeof label === "string" || typeof label === "number" ? label : value
  ).match(new RegExp(search, "i"))

  return !!matches?.length
}

interface SelectProps<T extends Value> {
  filterFunction?: typeof defaultFilterFunction
  name: string
  onChange?: (value: T) => void
  onSearchChange?: (value: string) => void
  options?: SelectOption<T>[] | undefined
  placeholder?: string
}

export const SelectInput = <T extends Value>({
  name,
  onChange,
  onSearchChange,
  options = [],
  filterFunction = defaultFilterFunction,
  placeholder,
}: SelectProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string>("")
  const [selected, setSelected] = useState<T | undefined>()

  const filteredOptions = useMemo(
    () => options.filter(filterFunction(searchString)),
    [filterFunction, searchString, options]
  )

  const { increase, decrease, reset, selectedIndex } = useSelectedIndex(
    filteredOptions.length
  )

  const selectValue = (value: T) => {
    setOpen(false)
    onChange?.(value)
    setSelected?.(value)
  }

  const keyHandler = createKeyHandler({
    ArrowDown: increase,
    ArrowUp: decrease,
    Enter: () => selectValue(filteredOptions[selectedIndex].value),
  })

  return (
    <div onKeyDown={keyHandler}>
      <label id={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <div className="mt-1 relative">
        {open ? (
          <TextInput
            autoFocus
            onBlur={() =>
              setTimeout(() => {
                setOpen(false)
                reset()
                setSearchString("")
              }, blurDelay)
            }
            onChange={(search: string) => {
              onSearchChange?.(search)
              reset()
              setSearchString(search)
            }}
          />
        ) : (
          <Button onClick={() => setOpen(true)}>
            {options.find(({ value }) => value === selected)?.value ??
              placeholder ??
              name}
          </Button>
        )}
        {open && !!options?.length && (
          <List
            onSelect={selectValue}
            options={filteredOptions}
            focussedIndex={selectedIndex}
            value={selected}
          />
        )}
      </div>
    </div>
  )
}
