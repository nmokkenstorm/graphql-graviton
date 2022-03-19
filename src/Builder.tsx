import React from "react"
import { SelectInput } from "./components/SelectInput"
import { useQuery } from "@apollo/client"
import introspectionQuery from "./queries/introspection.gql"
import { useLocalStorage } from "./utils/useLocalStorage"
import { ApolloProvider } from "./ApolloProvider"

type IntroSpectionResult = {
  __schema: {
    queryType: {
      fields: Array<{
        name: string
        args: Array<{ name: string }>
      }>
    }
  }
}

const QuerySelector = () => {
  const { data } = useQuery<IntroSpectionResult>(introspectionQuery)

  return (
    <SelectInput
      name="query"
      options={data?.__schema?.queryType?.fields?.map(({ name: value }) => ({
        value,
      }))}
    />
  )
}

export const Builder = () => {
  const [token] = useLocalStorage("token")
  const [baseUrl] = useLocalStorage("baseUrl")

  return (
    <ApolloProvider token={token ?? ""} baseUrl={baseUrl}>
      <QuerySelector />
    </ApolloProvider>
  )
}
