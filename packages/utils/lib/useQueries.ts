import { getIntrospectionQuery, IntrospectionQuery } from "graphql/utilities"
import { useQuery as useApolloQuery, gql } from "@apollo/client"

import { isObjectType } from "./introspection"

const introspection = getIntrospectionQuery()

export const useType = (name: string) => {
  const { data } = useApolloQuery<IntrospectionQuery>(
    gql`
      ${introspection}
    `
  )

  return data?.__schema?.types?.find((type) => type.name === name)
}

export const useQueries = () => {
  const result = useType("Query")

  return result && isObjectType(result) ? result.fields : []
}

export const useQuery = (queryName: string) =>
  useQueries().find(({ name }) => name === queryName)
