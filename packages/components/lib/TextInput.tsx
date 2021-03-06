import React, { useState, ReactNode } from "react"

interface TextInputProps<T = string> {
  autoFocus?: boolean
  id?: string
  initialValue?: T
  label?: string | ReactNode
  name?: string
  onBlur?: () => void
  onChange?: (value: T) => void
  placeholder?: string
}

export const TextInput = ({
  autoFocus,
  id,
  initialValue = "",
  label,
  name,
  onBlur,
  onChange,
  placeholder,
}: TextInputProps<string>) => {
  const [value, setValue] = useState<string>(initialValue)

  return (
    <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      {label || name ? (
        <label
          htmlFor={id ?? name}
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          {label ?? name}
        </label>
      ) : null}
      <input
        autoFocus={autoFocus}
        type="text"
        value={value}
        onBlur={() => onBlur?.()}
        onChange={(e) => {
          setValue(e.target.value)
          onChange?.(e.target.value)
        }}
        name={name}
        id={id ?? name}
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  )
}
