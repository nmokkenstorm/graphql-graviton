import getQueries from "../queries/getQueries.gql"
import { useQuery } from "@apollo/client"

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

export const useQueries = () => {
  const { data } = useQuery<IntroSpectionResult>(getQueries)

  return {
    queries:
      data?.__schema?.queryType?.fields?.map(({ name: value }) => ({
        value,
      })) ?? [],
  }
}
