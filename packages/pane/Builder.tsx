import React from "react"

import { useLocalStorage } from "../hooks/useLocalStorage"
import { Pane } from "./Pane"
import { ApolloProvider } from "../client/ApolloProvider"

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <Pane />
    </ApolloProvider>
  )
}
