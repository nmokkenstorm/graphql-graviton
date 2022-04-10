import React from "react"

import { useLocalStorage } from "@graviton/utils"
import { Pane } from "./Pane"
import { ApolloProvider } from "./ApolloProvider"

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <Pane />
    </ApolloProvider>
  )
}
