import React from "react"

import { SelectInput } from "@graviton/components"
import { unwrapType, useQueries } from "@graviton/utils"

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
