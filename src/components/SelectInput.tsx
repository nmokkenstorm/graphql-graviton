import React, { ReactElement, useState } from "react"
import { Button } from "./Button"

type Value = string | number

interface SelectProps<T extends Value> {
  options?: Array<{ value: T; label?: ReactElement }>
  name: string
  onChange?: (value: T) => void
  placeholder?: string
}

export const SelectInput = <T extends Value>({
  name,
  onChange,
  options = [],
  placeholder,
}: SelectProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<T | undefined>()

  return (
    <div>
      <label id={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <div className="mt-1 relative">
        <Button onClick={() => setOpen(true)}>
          {options.find(({ value }) => value === selected)?.value ??
            placeholder ??
            name}
        </Button>
        {open && !!options?.length && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby={name}
          >
            {options.map(({ value, label }) => (
              <li
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                id={`${name}-option-${value}`}
                key={`${name}-option-${value}`}
                role="option"
                onClick={() => {
                  setOpen(false)
                  onChange?.(value)
                  setSelected?.(value)
                }}
              >
                <span className="font-normal block truncate">
                  {label ?? value}
                </span>
                {value === selected && (
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
