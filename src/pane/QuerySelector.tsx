import React from "react"

import { SelectInput } from "../components/SelectInput"
import { useQueries } from "../hooks/useQueries"
import { unwrapType } from "../utils/introspection"

interface QuerySelectorProps {
  onChange?: (value: string) => void
}

export const QuerySelector = ({ onChange }: QuerySelectorProps) => {
  const queries = useQueries()

  return (
    <SelectInput
      name="query"
      onChange={(value) => {
        const resolved = queries.find(({ name }) => name === value)?.type

        resolved && onChange?.(unwrapType(resolved).name)
      }}
      options={queries.map(({ name }) => ({ value: name }))}
    />
  )
}
