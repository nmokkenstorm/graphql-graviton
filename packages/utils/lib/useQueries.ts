import { getIntrospectionQuery, IntrospectionQuery } from "graphql/utilities"
import { useQuery, gql } from "@apollo/client"
import { isObjectType } from "./introspection"

const introspection = getIntrospectionQuery()

export const useType = (name: string) => {
  const { data } = useQuery<IntrospectionQuery>(
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
