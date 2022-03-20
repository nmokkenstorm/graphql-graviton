import React, { ReactElement } from "react"
import { Check } from "../utils/icons"

type Value = string | number
type SelectOption<T extends Value> = { value: T; label?: ReactElement }

interface ListProps<T extends Value> {
  onSelect?: (value: T) => void
  options?: SelectOption<T>[]
  focussedIndex?: number
  value?: T
}

export const List = <T extends Value>({
  onSelect,
  options = [],
  value,
  focussedIndex,
}: ListProps<T>) => (
  <ul
    className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
    tabIndex={-1}
    role="listbox"
  >
    {options.map(({ value: optionValue, label }, index) => {
      const isActive = index === focussedIndex

      return (
        <li
          className={`group cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 ${
            isActive ? "bg-indigo-600" : 0
          }`}
          id={String(optionValue)}
          key={String(optionValue)}
          role="option"
          onClick={() => onSelect?.(optionValue)}
        >
          <span
            className={`font-normal block truncate text-gray-900 group-hover:text-white ${
              isActive ? "text-white" : ""
            }`}
          >
            {label ?? optionValue}
          </span>
          {value === optionValue && (
            <span
              className={`group-hover:text-white text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 ${
                isActive ? "text-white" : ""
              }`}
            >
              <Check />
            </span>
          )}
        </li>
      )
    })}
  </ul>
)
