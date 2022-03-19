import React, { useMemo, ReactChild } from "react"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  ApolloLink,
  RequestHandler,
  HttpLink,
} from "@apollo/client"

const defaultBaseUrl = "http://localhost:4000"
type Token = string

const createAuthHandler = (token: Token): RequestHandler => (
  operation,
  forward
) => {
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
      credentials: "include",
    },
  })

  return forward(operation)
}

const createApolloClient = (token: Token, baseUrl: URL) => {
  const httpLink = new HttpLink({ uri: baseUrl.toString() })

  const authLink = new ApolloLink(createAuthHandler(token))

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

interface ProviderProps {
  children?: ReactChild
  token?: string
  baseUrl?: string
}

export const ApolloProvider = ({
  children,
  token,
  baseUrl = defaultBaseUrl,
}: ProviderProps) => {
  const client = useMemo(
    () =>
      token && baseUrl ? createApolloClient(token, new URL(baseUrl)) : null,
    [token, baseUrl]
  )

  return client ? <Provider client={client}>{children}</Provider> : null
}
