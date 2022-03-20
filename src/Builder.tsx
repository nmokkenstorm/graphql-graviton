import React from "react"
import { SelectInput } from "./components/SelectInput"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { ApolloProvider } from "./ApolloProvider"
import { useQueries } from "./hooks/useQueries"

const QuerySelector = () => (
  <SelectInput name="query" options={useQueries().queries} />
)

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <QuerySelector />
    </ApolloProvider>
  )
}
