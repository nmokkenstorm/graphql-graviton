import {
  getIntrospectionQuery,
  IntrospectionQuery,
  IntrospectionObjectType,
  IntrospectionType,
} from "graphql/utilities"
import { useQuery, gql } from "@apollo/client"

const introspection = getIntrospectionQuery()

const isObjectType = (
  type: IntrospectionType
): type is IntrospectionObjectType => type.kind === "OBJECT"

export const useQueries = () => {
  const { data } = useQuery<IntrospectionQuery>(
    gql`
      ${introspection}
    `
  )

  return {
    queries:
      data?.__schema?.types
        ?.filter(isObjectType)
        ?.find(({ name }) => name === "Query")
        ?.fields?.map(({ name: value }) => ({ value })) ?? [],
  }
}
