import React, { useState } from "react"

import { useLocalStorage } from "./hooks/useLocalStorage"
import { ApolloProvider } from "./ApolloProvider"
import { QuerySelector } from "./QuerySelector"
import { InputTable } from "./InputTable"

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")
  const [activeQuery, setActiveQuery] = useState<string>()

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <QuerySelector onChange={setActiveQuery} />
      {activeQuery && <InputTable activeQuery={activeQuery} />}
    </ApolloProvider>
  )
}
