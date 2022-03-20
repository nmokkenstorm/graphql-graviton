import React from "react"

import { useLocalStorage } from "./hooks/useLocalStorage"
import { ApolloProvider } from "./ApolloProvider"
import { QuerySelector } from "./QuerySelector"

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <QuerySelector/>
    </ApolloProvider>
  )
}
