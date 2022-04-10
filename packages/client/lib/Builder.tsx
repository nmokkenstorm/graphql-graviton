import React from "react"

import { useLocalStorage } from "@graviton/utils"

import { Pane } from "./Pane"
import { ApolloProvider } from "./ApolloProvider"

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <div className="grid gap-4 grid-cols-2">
        {/* see https://github.com/nmokkenstorm/graphql-graviton/issues/4 */}
        {[1, 2].map((i) => (
          <Pane key={String(i)} />
        ))}
      </div>
    </ApolloProvider>
  )
}
